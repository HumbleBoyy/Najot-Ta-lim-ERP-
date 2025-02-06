import { ArrowLeftOutlined, DeleteColumnOutlined, DeleteFilled, EditFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'

const TeachersMore = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const singleData = getRequest(`/teachers/${id}`, true)

  return (
    <div className='p-5'>
        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <Button onClick={()=> navigate(-1)} size='middle' className='border-none'><ArrowLeftOutlined/></Button>
            <h2 className='text-[25px] font-bold'>{singleData.name}</h2>
         </div>
         <div className='flex gap-2'>
           <Button size='large' type='primary' className='!bg-red-500'><DeleteFilled/></Button>
           <Button onClick={()=> navigate(`edit`)} size='large' type='primary'><EditFilled/> Tahrirlash</Button>
         </div>
        </div>
    </div>
  )
}

export default TeachersMore
