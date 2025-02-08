import { ArrowLeftOutlined, DeleteFilled, EditFilled, PhoneFilled } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'
import MoreItem from '../../Components/MoreItem'
import { deleteRequest } from '../../service/deleteRequest'
import toast, { Toaster } from 'react-hot-toast'

const TeachersMore = () => {
    const navigate = useNavigate()
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const {id} = useParams()
    const singleData = getRequest(`/teachers/${id}`, true)

    const handleDelete = () => {
      setDeleteLoading(true)
      deleteRequest(`/teachers/${id}`, setDeleteLoading, toast, setDeleteModal, navigate)
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
            <h2 className='text-[23px] font-bold'>{singleData.name} {singleData.surName} / <span className='text-blue-600'>#{singleData.id}</span></h2>
         </div>
         <div className='flex gap-2'>
           <Link to={`tel:${singleData.phone}`}><Button size='large' type='primary' className='!bg-blue-500 hover:!text-white hover:!border-blue-500'><PhoneFilled/></Button></Link>
           <Button onClick={()=> setDeleteModal(true)} size='large' type='primary' className='!bg-red-500 hover:!text-white hover:!border-red-500'><DeleteFilled/></Button>
           <Button onClick={()=> navigate(`edit`)} size='large' type='primary' className='hover:!text-black'><EditFilled/> Tahrirlash</Button>
         </div>
        </div>
        <div className="flex justify-between gap-2 mt-15">
          <ul className='p-5 rounded-md border-[2px] border-slate-500 w-[50%]'>
           <MoreItem title={"Mutaxasisligi"} value={singleData.stack}/>
           <MoreItem title={"Maqomi"} value={singleData.status}/>
           <MoreItem title={"Tajribasi"} value={singleData.experience}/>
           <MoreItem title={"Yoshi"} value={singleData.age}/>
           <MoreItem title={"Elektron pochta manzili"} value={singleData.email}/>
           <MoreItem title={"Telefon raqami"} value={singleData.phone}/>
          </ul>
          <ul className='p-5 rounded-md border-[2px] border-slate-500 w-[50%]'>
           <MoreItem title={"Viloyat"} value={singleData.region}/>
           <MoreItem title={"Tuman"} value={singleData.district}/>
           <MoreItem title={"Jinsi"} value={singleData.gender}/>
           <MoreItem title={"Turmush qurganmi"} value={singleData.isMerried}/>
           <MoreItem title={"O'qigan/O'qish joyi"} value={singleData.study}/>
           <li className="py-2 flex flex-col border-b-2">
           <span className='text-slate-400 text-[15px]'>Faoliyat olib borgan kompaniyalari</span>
              <div className="flex flex-wrap gap-2">
               {singleData.workedCompany?.map((item, index) => <Button size={"large"} key={index}>{item}</Button>)}
              </div>
           </li>
         </ul>
        </div>
         <Modal confirmLoading={deleteLoading} open={deleteModal} onCancel={()=> setDeleteModal(false)} onOk={handleDelete}  title="O'chirish">
            <p className='text-[17px]'>Tizimdan <span className='text-blue-600 font-bold'>{singleData.name}</span> ustozni o'chirishni xoxlaysizmi?</p>
        </Modal>
    </div>
  )
}

export default TeachersMore
