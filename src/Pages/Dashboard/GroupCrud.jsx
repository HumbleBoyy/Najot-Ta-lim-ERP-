import React, { useState } from 'react'
import CrudCaption from '../../Components/CrudCaption'
import { Toaster } from 'react-hot-toast'
import { PlusCircleFilled } from '@ant-design/icons'
import { Input } from 'antd'
import { useParams } from 'react-router-dom'
import FilterCustom from '../../Components/FilterCustom'

const GroupCrud = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [groupName, setGroupName] = useState(null)
  const {groupId} = useParams
  const [stackId, setStackId] = useState(null)
  const [teacherId, setTeacherId] = useState(null)
  const [teacherName, setTeacherName] = useState(null)

  const handleCreateGroup = () => {

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
               <FilterCustom API={"/stack"} filterId={stackId} setFilterId={setStackId} placeholder={"Asosiy ustozni tayinlang"} extraClass={"!w-full"}/>
               <FilterCustom API={"/teachers"} filterId={teacherId} setFilterId={setTeacherId} setFilterName={setTeacherName} placeholder={"Asosiy ustozni tayinlang...."} extraClass={"!w-full"}/>
               <Input allowClear type='text' value={groupName} onChange={(e)=> setGroupName(e.target.value)} required size='large' placeholder="Yordamchi ustoz tayinlang...."/>
            </div>
      </div>
    </form>
  )
}

export default GroupCrud
