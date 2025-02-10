import React, { useState } from 'react'
import CrudCaption from '../../Components/CrudCaption'
import { Toaster } from 'react-hot-toast'
import { PlusCircleFilled } from '@ant-design/icons'
import { DatePicker, Input } from 'antd'
import FilterCustom from '../../Components/FilterCustom'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

const GroupCrud = () => {
  const {stackId, groupId} = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [groupName, setGroupName] = useState(null)

  const [teacherId, setTeacherId] = useState(null)
  const [mainTeacher, setMainTeacher] = useState(null)
  const [roomId, setRoomId] = useState(null)
  const [roomName, setRoomName] = useState(null)
  const [supportTeacher, setSupportTeacher] = useState(null)
  const dateFormat = 'YYYY-MM-DD';
  

  const handleCreateGroup = (e) => {
     e.preventDefault()

     const data = {
      stackId, 
      name:groupName, 
      mainTeacher,
      status:true,
      room:roomName,
      createdAt: "03.08.2024",
      supportTeacher:""
     }
  }
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
               <FilterCustom API={`/teachers?stackId=${stackId}`} filterId={teacherId} setFilterId={setTeacherId} setFilterName={setMainTeacher} placeholder={"Asosiy ustozni tayinlang...."} extraClass={"!w-full"}/>
               <Input allowClear type='text' value={supportTeacher} onChange={(e)=> setSupportTeacher(e.target.value)} required size='large' placeholder="Yordamchi ustoz tayinlang...."/>
               <FilterCustom API={"/rooms"} filterId={roomId} setFilterId={setRoomId} setFilterName={setRoomName} placeholder={"Xona tayinlang...."} extraClass={"!w-full"}/>
               <DatePicker  defaultValue={dayjs('2019-09-03', dateFormat)}/>
            </div>
      </div>
    </form>
  )
}

export default GroupCrud
