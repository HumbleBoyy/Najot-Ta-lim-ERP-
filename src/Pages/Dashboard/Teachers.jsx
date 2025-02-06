import React, {useState} from 'react'
import Caption from '../../Components/Caption'
import { Input } from 'antd'
import CustomTable from '../../Components/CustomTable';
import { PATH } from '../../hooks/usePath';
import FilterCustom from '../../Components/FilterCustom';
import { getTeachers } from '../../service/getTeachers';

const Teachers = () => {
  const [stackId, setStackId] = useState(null)
  const [teachers, setTeachers] = useState([])
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

getTeachers(stackId, refresh, setTeachers, teachers)

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
      title:"Yo'nalishi",
      dataIndex:"stack"
    },
    {
      title:"Maqomi",
      dataIndex:"status"
    },
    {
      title:"Telefon raqami",
      dataIndex:"phone"
    },
    {
      title:"Batafsil",
      dataIndex:"action"
    }
  ]
  return (
   <>
    <div className={`p-5`}>
     <Caption addLink={PATH.teachersAdd}/>
     <div className='flex gap-2 mt-2'>
        <label className='flex flex-col'>
          <span className='text-[15px] text-slate-400'>Qidirish</span>
          <Input allowClear onChange={handleSearchByName} className='!w-[350px]' size='large' placeholder='Qidirish......'/>
        </label>
        <label className='flex flex-col'>
          <span className='text-[15px] text-slate-400'>Kasbni Tanlang</span>
          <FilterCustom  API={"/stack"} filterId={stackId} setFilterId={setStackId}  placeholder={"Kasbga ko'ra tanlang"}/>
        </label>
     </div>

     <CustomTable isLoading={isLoading} columns={columns} dataSource={teachers}/>
    </div>
   </>
  )
}

export default Teachers
