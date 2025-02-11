import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'
import { ArrowLeftOutlined, DeleteFilled, EditFilled, } from '@ant-design/icons'
import { deleteRequest } from '../../service/deleteRequest'
import { Button, Modal } from 'antd'
import { instance } from '../../hooks/instance'
import CustomTable from '../../Components/CustomTable'
import { getStudents } from '../../service/getStudents'
const SingleGroup = () => {
  const {groupId} = useParams()
  const singleData = getRequest(`/groups/${groupId}`)

  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [students, setStudents] = useState([])
  getStudents(groupId, refresh, setStudents)


  const handleDeleteGroup = () => {
    setDeleteLoading(true)
    instance().get(`/students?groupId=${groupId}`).then(res => {
      if(res.data.length){
        setTimeout(()=> {
          toast.error("O'quvchi bor guruhni o'chirish mumkin emas!")
          setDeleteLoading(false)
          setDeleteModal(false)
        },1000)
      }else{
        deleteRequest(`/groups/${groupId}`, setDeleteLoading, toast, setDeleteModal, navigate)
      }
    })
  }

  const columns = [
    {
      title:"ID",
      dataIndex:"key"
    },
    {
      title:"Ism",
      dataIndex:"name"
    },
    {
      title:"Familiya",
      dataIndex:"surname"
    },
    {
      title:"Yoshi",
      dataIndex:"age"
    },
    {
      title:"Telefon raqami",
      dataIndex:"number"
    },
    {
      title:"Holati",
      dataIndex:"status"
    },
    {
      title:"Batafsil",
      dataIndex:"action"
    }
  ]

  return (
    <div className='p-5'>
    <Toaster
     position="top-center"
     reverseOrder={false}
   />
     <div className='flex items-center justify-between'>
     <div className='flex items-center gap-2'>
         <Button onClick={()=> navigate(-1)} size='middle' className='border-none'><ArrowLeftOutlined/></Button>
         <h2 className='text-[23px] font-bold'>{singleData.name} / <span className='text-blue-600'>#{singleData.mainTeacher}</span></h2>
      </div>
      <div className='flex gap-2'>
        <Button onClick={()=> setDeleteModal(true)} size='large' type='primary' className='!bg-red-500 hover:!text-white hover:!border-red-500'><DeleteFilled/></Button>
        <Button onClick={()=> navigate(`edit`)} size='large' type='primary' className='hover:!text-black'><EditFilled/> Tahrirlash</Button>
      </div>
     </div>
     <div className='mt-10'>
     <CustomTable isLoading={isLoading} columns={columns} dataSource={students}/>
     </div>

       <Modal confirmLoading={deleteLoading} open={deleteModal} onCancel={()=> setDeleteModal(false)} onOk={handleDeleteGroup}  title="O'chirish">
            <p className='text-[17px]'>Tizimdan <span className='text-blue-600 font-bold'>{singleData.name}</span> guruhni o'chirishni xoxlaysizmi?</p>
        </Modal>
     </div>
  )
}

export default SingleGroup
