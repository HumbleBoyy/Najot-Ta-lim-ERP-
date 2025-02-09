import React, { useState } from 'react'
import { ArrowLeftOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'
import CustomTable from '../../Components/CustomTable'

const Group = () => {
  const {stackId} = useParams()
  const {name} = getRequest(`/stack/${stackId}`)
   const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
 
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

  const groups = getRequest(`/groups?stackId=${stackId}`)
  console.log(groups)
  return (
    <div className='p-5'>
      <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
      <Button onClick={()=> navigate(-1)} size='middle' className='border-none mt-2'><ArrowLeftOutlined/></Button>
       <div className='flex flex-col'>
         <h2 className='font-bold text-[25px] mb-1'>{name}</h2>
         <p className='text-[15px] text-slate-400 lowercase'>Guruxlar 10-ta</p>
       </div>
      </div>
       <Button onClick={()=> navigate(`${addLink}`)} htmlType='button' size='large' type='primary' icon={<UsergroupAddOutlined/>} className='!addBtn hover:!text-white'>Qo'shish</Button>
    </div>

     <CustomTable isLoading={isLoading} columns={columns} dataSource={groups}/>
    </div>
  )
}

export default Group
