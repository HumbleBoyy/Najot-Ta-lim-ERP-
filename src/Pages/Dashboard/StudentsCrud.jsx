import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import CrudCaption from '../../Components/CrudCaption'
import { Input, Select } from 'antd'
import FilterCustom from '../../Components/FilterCustom'
import { PlusCircleFilled } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import getRequest from '../../service/getRequest'
import { Create, Edit } from '../../service/auth'

const StudentsCrud = () => {
    const {id} = useParams()
    const singleData = id && getRequest(`/students/${id}`, true)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


      const [name, setName] = useState(null)
      const [studentId, setStudentId] = useState(null)
      const [surname, setSurname] = useState(null)
      const [age, setAge] = useState(null)
      const [email, setEmail] = useState(null)
      const [number, setNumber] = useState(null)
      const [study, setStudy] = useState(null)
      const [regionId, setRegionId] = useState(null)
      const [region, setRegion] = useState(null)
      const [stackId, setStackId] = useState(null)
      const [stack, setStack] = useState(null)
      const [district, setDistrict] = useState(null)
      const [groupId, setGroupId] = useState(null)
      const [group, setGroup] = useState(null)
      const [gender, setGender] = useState(null)
      
  const handleAddStudent = (e) => {
    e.preventDefault()
    const data = { name, surname, age, stack, stackId, region,
      regionId,
      district,
      group,
      studentId,
      gender,
      email,
      number,
      study,
      status:true
    }
    
    if(id){
       data.id = id
       Edit(data, `/students/${id}`, setIsLoading, navigate, toast)
    }else{
      Create(data, "/students", setIsLoading, navigate, toast)
    }
  }

    useEffect(()=> {
       if(singleData){
         setName(singleData.name)
         setStudentId(singleData.studentId)
         setSurname(singleData.surname)
         setAge(singleData.age)
         setEmail(singleData.email)
         setNumber(singleData.number)
         setStudy(singleData.study)
         setStackId(singleData.stackId)
         setStack(singleData.stack)
         setRegionId(singleData.regionId)
         setRegion(singleData.region)
         setDistrict(singleData.district)
         setGender(singleData.gender)
         
       }
    },[singleData])
  return (
    <form onSubmit={handleAddStudent} autoComplete='off' className='p-5'>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
   <CrudCaption isLoading={isLoading} icon={<PlusCircleFilled/>} title={id ? "Tahrirlash" : "Ro'yxatga qo'shish"} btnText={id ? "Tahrirlash" : "Qo'shish"}/>
    <div className='flex  justify-around mt-10'>
          <div className='flex flex-col w-[40%] gap-5'>
             <Input allowClear type='text' value={studentId} onChange={(e)=> setStudentId(e.target.value)} required size='large' placeholder="Beshta raqamdan iborat maxsus raqam bering"/>
             <Input allowClear type='text' value={name} onChange={(e)=> setName(e.target.value)} required size='large' placeholder="Ism kiriting..."/>
             <Input allowClear type='text' value={surname} onChange={(e)=> setSurname(e.target.value)} required size='large' placeholder="Familiya kiriting..."/>
             <Input allowClear type='number' value={age} onChange={(e)=> setAge(e.target.value)} required size='large' placeholder="Yosh kiriting..."/>
             <Input allowClear type='email' value={email} onChange={(e)=> setEmail(e.target.value)} required size='large' placeholder="Email kiriting..."/>
             <Input allowClear type='tel' value={number} onChange={(e)=> setNumber(e.target.value)} required size='large' placeholder="Telefon raqam kiriting..."/>
          </div>
          <div className='flex flex-col w-[40%] gap-5'>
              <Input allowClear type='text' value={study} onChange={(e)=> setStudy(e.target.value)} required size='large' placeholder="O'qish kiriting..."/>
              <FilterCustom API={"/stack"} filterId={stackId} setFilterName={setStack} setFilterId={setStackId} extraClass="!w-full" placeholder={"Yo'nalish tanlang"}/>
              <FilterCustom API={"/regions"} filterId={regionId} setFilterName={setRegion} setFilterId={setRegionId} extraClass="!w-full" placeholder={"Viloyat tanlang"}/>
              <Input allowClear type='text' value={district} onChange={(e)=> setDistrict(e.target.value)} required size='large' placeholder="Tuman kiriting..."/>
              <FilterCustom API={"/groups"} filterId={groupId} setFilterName={setGroupId}  setFilterId={setGroup} extraClass="!w-full" placeholder={"Guruh Tanlang"}/>
              <Select value={gender} onChange={(value) => setGender(value)}  size='large'  placeholder={"Erkak/Ayol"} optionFilterProp='label' options={[{label:"Erkak", value:"Erkak"}, {label:"Ayol", value:"Ayol"}]} />
          </div>
    </div>
  </form>
  )
}

export default StudentsCrud
