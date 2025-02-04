import React, {useContext, useEffect, useState} from 'react'
import Caption from '../../Components/Caption'
import { Input, Modal } from 'antd'
import FilterStack from  '../../Components/FilterStack';
import { instance } from '../../hooks/instance';
import CustomTable from '../../Components/CustomTable';
import { MoreOutlined, QuestionOutlined } from '@ant-design/icons';

const Teachers = () => {
  const [stackId, setStackId] = useState(null)
  const [teachers, setTeachers] = useState([])
  const [action, setAction] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

 const handleSearchByName = (e) => {
  setIsLoading(true)
  const filterByName = teachers.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if(e.target.value){
      setTimeout(()=> {
        setIsLoading(false)
        setTeachers(filterByName)
      }, 1000)
    }else{
      setTimeout(()=> {
        setIsLoading(false)
        setRefresh(!refresh)
      },1000)
    }
 }

  useEffect(()=> {
      instance().get("/teachers").then(res => {
          setTeachers( res.data.map((item, index) => {
            item.key = index
            item.name = item.name ? item.name : <QuestionOutlined />
            item.stack = item.stack ? item.stack : <QuestionOutlined />
            item.action = <button onClick={()=> setAction(!action)} className='flex justify-center items-center text-white text-2xl w-[40px] rounded-md cursor-pointer h-[40px] bg-[#bc8e5b] '>
              <MoreOutlined className='rotate-90'/>
            </button>
            return item
          }))
      })
  },[refresh])

  const columns = [
    {
      title:"ID",
      dataIndex:"id"
    },
    {
      title:"Ism",
      dataIndex:"name"
    },
    {
      title:"Yo'nalishi",
      dataIndex:"stack"
    },
    {
      title:"Maqomi",
      dataIndex:"status"
    },
    {
      title:"Telefon raqami",
      dataIndex:"phoneNumber"
    },
    {
      title:"Batafsil",
      dataIndex:"action"
    }
  ]
  return (
   <>
    <div className={`p-5`}>
     <Caption/>
     <div className='flex gap-2 mt-2'>
        <label className='flex flex-col'>
          <span className='text-[15px] text-slate-400'>Qidirish</span>
          <Input onChange={handleSearchByName} className='!w-[350px]' size='large' placeholder='Qidirish......'/>
        </label>
        <label className='flex flex-col'>
          <span className='text-[15px] text-slate-400'>Kasbni Tanlang</span>
           <FilterStack stackId={stackId} setStackId={setStackId}/>
        </label>
     </div>

     <CustomTable isLoading={isLoading} columns={columns} dataSource={teachers}/>
    </div>
    <Modal open={action} onCancel={()=> setAction(false)} title="Batafsil">
    <p className='text-[17px]'>Amalni tanlang</p>
   </Modal>
   </>
  )
}

export default Teachers
