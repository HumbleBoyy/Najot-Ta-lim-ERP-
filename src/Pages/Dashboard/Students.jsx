import React, { useState } from 'react'
import Caption from '../../Components/Caption'
import { UserAddOutlined } from '@ant-design/icons'
import { getStudents } from '../../service/getStudents'
import { Input } from 'antd'
import FilterCustom from '../../Components/FilterCustom'
import { PATH } from '../../hooks/usePath'
import CustomTable from '../../Components/CustomTable'

const Students = () => {
   const [stackId, setStackId] = useState(null)
   const [students, setStudents] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [refresh, setRefresh] = useState(false)
  const [groupId, setGroupId] = useState(null)
  getStudents(groupId, refresh, setStudents,stackId)
  const handleSearchByName = (e) => {
    setIsLoading(true)
    const filterByName = students.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.studentId.includes(e.target.value))
      if(e.target.value){
        setTimeout(()=> {
          setIsLoading(false)
          setStudents(filterByName)
        }, 1000)
      }else{
        setTimeout(()=> {
          setIsLoading(false)
          setRefresh(!refresh)
        },1000)
      }
   }

  const columns = [
    {
      title:"ID",
      dataIndex:"key"
    },
    {
      title:"Maxsus ID",
      dataIndex:"studentId"
    },
    {
      title:"Ism",
      dataIndex:"name"
    },
    {
      title:"Familyasi",
      dataIndex:"surname"
    },
    {
      title:"Guruhi",
      dataIndex:"group"
    },
    {
      title:"Holati",
      dataIndex:"status"
    },
    {
      title:"Telefon raqami",
      dataIndex:"number"
    },
    {
      title:"Batafsil",
      dataIndex:"action"
    }
  ]
  
  return (
    <div className={`p-5`}>
    <Caption addLink={PATH.studentsAdd} iconBtn={<UserAddOutlined />} count={students.length}/>
    <div className='flex gap-2 mt-2'>
       <label className='flex flex-col'>
         <span className='text-[15px] text-slate-400'>Qidirish</span>
         <Input allowClear onChange={handleSearchByName} className='!w-[350px]' size='large' placeholder="Id raqami yoki ismi bo'yicha qidirish"/>
       </label>
       <label className='flex flex-col'>
         <span className='text-[15px] text-slate-400'>Yo'nalish bo'yicha saralash</span>
         <FilterCustom API={"/stack"} filterId={stackId} setFilterId={setStackId}  placeholder={"Yo'nalish bo'yicha saralash"}/>
       </label>
       <label className='flex flex-col'>
         <span className='text-[15px] text-slate-400'>Guruhlara kesimida saralash</span>
         <FilterCustom API={"/groups"} filterId={groupId} setFilterId={setGroupId}  placeholder={"Guruhlara kesimida saralash"}/>
       </label>
    </div>

    <div className='mt-10'>
      <CustomTable isLoading={isLoading} columns={columns} dataSource={students}/>
    </div>
   </div>
  )
}

export default Students
