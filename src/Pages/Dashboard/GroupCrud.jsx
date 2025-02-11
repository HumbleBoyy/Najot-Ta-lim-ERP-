import React, { useEffect, useState } from 'react'
import CrudCaption from '../../Components/CrudCaption'
import toast, { Toaster } from 'react-hot-toast'
import { PlusCircleFilled } from '@ant-design/icons'
import { DatePicker, Input } from 'antd'
import FilterCustom from '../../Components/FilterCustom'
import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import { Create, Edit } from '../../service/auth'
import getRequest from '../../service/getRequest'

const GroupCrud = () => {
  const {stackId, groupId} = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [groupName, setGroupName] = useState(null)
  const navigate = useNavigate()

  const editGroupData = groupId && getRequest(`/groups/${groupId}`, true)

  const [teacherId, setTeacherId] = useState(null)
  const [mainTeacher, setMainTeacher] = useState(null)
  const [roomId, setRoomId] = useState(null)
  const [roomName, setRoomName] = useState(null)
  const [supportTeacher, setSupportTeacher] = useState(null)
  const dateFormat = 'YYYY-MM-DD';
  
  const date = new Date()
  const [createdAt, setCreatedAt] = useState(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,0)}-${String(date.getDate()).padStart(2,0)}`)

  const handleCreateGroup = (e) => {
    setIsLoading(true)
     e.preventDefault()
     const data = {
      stackId, 
      name:groupName, 
      mainTeacher,
      status:true,
      room:roomName,
      roomId,
      teacherId,
      createdAt,
      supportTeacher:supportTeacher
     }

     if(groupId){
      data.id = groupId
      Edit(data, `/groups/${groupId}`, setIsLoading, navigate, toast)
      }else{
        Create(data, "/groups", setIsLoading, navigate, toast)
      }
  }


  useEffect(()=> {
     if(editGroupData){
       setGroupName(editGroupData.name)
       setTeacherId(editGroupData.teacherId)
       setMainTeacher(editGroupData.mainTeacher)
       setRoomId(editGroupData.roomId)
       setRoomName(editGroupData.room)
       setSupportTeacher(editGroupData.supportTeacher)
       setCreatedAt(editGroupData.createdAt)
     }
  }, [editGroupData])
  return (
    <form onSubmit={handleCreateGroup} autoComplete='off' className='p-5'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
     <CrudCaption  isLoading={isLoading} icon={<PlusCircleFilled/>} title={groupId ? "Tahrirlash" : "Guruh yaratish"} btnText={groupId ? "Tahrirlash" : "Qo'shish"}/>
      <div className='flex  justify-around mt-10'>
            <div className='flex flex-col w-[40%] gap-5'>
               <Input allowClear type='text' value={groupName} onChange={(e)=> setGroupName(e.target.value)} required size='large' placeholder="Guruh nomi...."/>
               <FilterCustom API={`/teachers?stackId=${stackId}`} allowClear placeholder={"Asosiy ustoz bo'yicha saralash"} filterId={teacherId} setFilterId={setTeacherId} setFilterName={setMainTeacher} extraClass={"!w-full"}/>
               <Input allowClear type='text' value={supportTeacher} onChange={(e)=> setSupportTeacher(e.target.value)} required size='large' placeholder="Yordamchi ustoz tayinlang...."/>
               <FilterCustom API={"/rooms"} filterId={roomId} setFilterId={setRoomId} setFilterName={setRoomName} placeholder={"Xona tayinlang...."} extraClass={"!w-full"}/>
               <DatePicker onChange={(a,b)=> setCreatedAt(b)} size='large'  defaultValue={dayjs(createdAt, dateFormat)}/>
            </div>
      </div>
    </form>
  )
}

export default GroupCrud
