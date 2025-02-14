import React, { useState } from 'react'
import { ArrowLeftOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'
import CustomTable from '../../Components/CustomTable'
import { getGroups } from '../../service/getGroups'
import FilterCustom from '../../Components/FilterCustom'

const Group = () => {
  const {stackId} = useParams()
  const {name} = getRequest(`/stackList/${stackId}`)
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [groups, setGroups] = useState([])
  const navigate = useNavigate()
  const [teacherId, setTeacherId] = useState(null)
  console.log(groups)
  const columns = [
    {
      title:"ID",
      dataIndex:"key"
    },
    {
      title:"Nomi",
      dataIndex:"name"
    },
    {
      title:"Asosiy ustoz",
      dataIndex:"mainTeacher"
    },
    {
      title:"Yordamchu ustoz",
      dataIndex:"supportTeacher"
    },
    {
      title:"Xolati",
      dataIndex:"status"
    },
    {
      title:"Ochilgan vaqti",
      dataIndex:"createdAt"
    },
    {
      title:"Batafsil",
      dataIndex:"action"
    }
  ]

  getGroups(stackId, refresh, setGroups, teacherId)

  const handleSearchByGroupName = (e) => {
    setIsLoading(true)
    const filterByName = groups.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
      if(e.target.value){
        setTimeout(()=> {
          setIsLoading(false)
          setGroups(filterByName)
        }, 1000)
      }else{
        setTimeout(()=> {
          setIsLoading(false)
          setRefresh(!refresh)
        },1000)
      }
   }
  return (
    <div className='p-5'>
      <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
      <Button onClick={()=> navigate(-1)} size='middle' className='border-none mt-2'><ArrowLeftOutlined/></Button>
       <div className='flex flex-col'>
         <h2 className='font-bold text-[25px] mb-1'>{name}</h2>
         <p className='text-[15px] text-slate-400 lowercase'>Guruhlar {groups.length}-ta</p>
       </div>
      </div>
       <Button onClick={()=> navigate(`add`)} htmlType='button' size='large' type='primary' icon={<UsergroupAddOutlined/>} className='!addBtn hover:!text-white'>Qo'shish</Button>
    </div>

    <div className='p-5 flex gap-5'>
        <Input onChange={handleSearchByGroupName} className='!w-[350px]' size='large' placeholder='Guruh Nomi Bilan Qidiring' allowClear/>
        <FilterCustom API={`/teachers?stackId=${stackId}`} allowClear placeholder={"Asosiy ustoz bo'yicha saralash"} filterId={teacherId} setFilterId={setTeacherId}/>
    </div>

     <CustomTable isLoading={isLoading} columns={columns} dataSource={groups}/>
    </div>
  )
}

export default Group
