import React, { useEffect, useState } from 'react'
import CrudCaption from '../../Components/CrudCaption'
import { useNavigate, useParams } from 'react-router-dom'
import { PlusCircleFilled } from '@ant-design/icons'
import { Input } from 'antd'
import toast, { Toaster } from 'react-hot-toast'
import { Create, Edit } from '../../service/auth'
import getRequest from '../../service/getRequest'

const StackCrud = () => {
    const {stackId} = useParams()
    const updateStack = stackId && getRequest(`/stackList/${stackId}`, true)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState(null)
    const [image, setImage] = useState(null)

    const handleAddStack = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = { 
            name,
            image,
        }
        
        if(stackId){
           data.id = stackId
           Edit(data, `/stackList/${stackId}`, setIsLoading, navigate, toast)
        }else{
          Create(data, "/stackList", setIsLoading, navigate, toast)
        }
    }

    // Update Part

        useEffect(()=> {
           if(updateStack){
             setName(updateStack.name)
             setImage(updateStack.image)
           }
        },[updateStack])
  return (
    <form onSubmit={handleAddStack} autoComplete='off' className='p-5'>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
   <CrudCaption isLoading={isLoading} icon={<PlusCircleFilled/>} title={stackId ? "Tahrirlash" : "Ro'yxatga qo'shish"} btnText={stackId ? "Tahrirlash" : "Qo'shish"}/>
     <div className='flex justify-center'>
     <div className='flex flex-col justify-center items-center w-[600px] gap-2  mt-10'>
        <Input allowClear type='text' value={name} onChange={(e)=> setName(e.target.value)} required size='large' placeholder="Yo'nalishi nomini kiriting"/>
        <Input allowClear type='text' value={image} onChange={(e)=> setImage(e.target.value)} required size='large' placeholder="Rasm havolasini kiriting"/>
    </div>
     </div>
  </form>
  )
}

export default StackCrud
