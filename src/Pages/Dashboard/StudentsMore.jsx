import React, { useState } from 'react'
import MoreItem from '../../Components/MoreItem'
import { Button, Modal } from 'antd'
import { Link, useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import getRequest from '../../service/getRequest'
import { deleteRequest } from '../../service/deleteRequest'
import { ArrowLeftOutlined, DeleteFilled, EditFilled, PhoneFilled } from '@ant-design/icons'

const StudentsMore = () => {
  const navigate = useNavigate()
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const {id} = useParams()
  const singleData = getRequest(`/students/${id}`, true)

  const handleDelete = () => {
    setDeleteLoading(true)
    deleteRequest(`/students/${id}`, setDeleteLoading, toast, setDeleteModal, navigate)
  }
  return (
    <div className='p-5'>
    <Toaster
     position="top-center"
     reverseOrder={false}
   />
     <div className='flex items-center justify-between'>
     <div className='flex items-center gap-2'>
         <Button onClick={()=> navigate(-1)} size='middle' className='border-none'><ArrowLeftOutlined/></Button>
         <h2 className='text-[23px] font-bold'>{singleData.name} {singleData.surname} / <span className='text-blue-600'>#{singleData.id}</span></h2>
      </div>
      <div className='flex gap-2'>
        <Link to={`tel:${singleData.phone}`}><Button size='large' type='primary' className='!bg-blue-500 hover:!text-white hover:!border-blue-500'><PhoneFilled/></Button></Link>
        <Button onClick={()=> setDeleteModal(true)} size='large' type='primary' className='!bg-red-500 hover:!text-white hover:!border-red-500'><DeleteFilled/></Button>
        <Button onClick={()=> navigate(`edit`)} size='large' type='primary' className='hover:!text-black'><EditFilled/> Tahrirlash</Button>
      </div>
     </div>
     <div className="flex justify-between gap-2 mt-15">
       <ul className='p-5 rounded-md border-[2px] border-slate-500 w-[50%]'>
       <MoreItem title={"Maxsus id raqami"} value={singleData.studentId}/>
        <MoreItem title={"Yo'nalishi"} value={singleData.stack}/>
        <MoreItem title={"Yoshi"} value={singleData.age}/>
        <MoreItem title={"Elektron pochta manzili"} value={singleData.email}/>
        <MoreItem title={"Telefon raqami"} value={singleData.number}/>
       </ul>
       <ul className='p-5 rounded-md border-[2px] border-slate-500 w-[50%]'>
       <MoreItem title={"Guruxi"} value={singleData.group}/>
        <MoreItem title={"Viloyat"} value={singleData.region}/>
        <MoreItem title={"Tuman"} value={singleData.district}/>
        <MoreItem title={"Jinsi"} value={singleData.gender}/>
        <MoreItem title={"O'qigan/O'qish joyi"} value={singleData.study}/>
      </ul>
     </div>
      <Modal confirmLoading={deleteLoading} open={deleteModal} onCancel={()=> setDeleteModal(false)} onOk={handleDelete}  title="O'chirish">
         <p className='text-[17px]'>Tizimdan <span className='text-blue-600 font-bold'>{singleData.name}</span> ustozni o'chirishni xoxlaysizmi?</p>
     </Modal>
 </div>
  )
}

export default StudentsMore
