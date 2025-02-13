import {PlusCircleFilled } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import CrudCaption from '../../Components/CrudCaption'
import { Input, Select } from 'antd'
import FilterCustom from '../../Components/FilterCustom'
import { Create, Edit } from '../../service/auth'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import getRequest from '../../service/getRequest'

const TeachersCrud = () => {
  const {id} = useParams()
  const singleData = id && getRequest(`/teachers/${id}`, true)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const [name, setName] = useState(null)
  const [surName, setSurName] = useState(null)
  const [age, setAge] = useState(null)
  const [experience, setExperience] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [study, setStudy] = useState(null)
  const [regionId, setRegionId] = useState(null)
  const [region, setRegion] = useState(null)
  const [stackId, setStackId] = useState(null)
  const [stack, setStack] = useState(null)
  const [district, setDistrict] = useState(null)
  const [statusId, setStatusId] = useState(null)
  const [status, setStatus] = useState(null)
  const [gender, setGender] = useState(null)
  const [isMerried, setIsMerried] = useState(null)
  const [workedCompanyId, setWorkedCompanyId] = useState(null)
  const [workedCompany, setWorkedCompany] = useState(null)

  const handleAddTeacher = (e) => {
    e.preventDefault()
    const data = { name, surName, age, stack, stackId, region,
      regionId,
      district,
      status,
      statusId,
      experience,
      gender,
      email,
      phone,
      isMerried,
      study,
      workedCompanyId,
      workedCompany
    }
    
    if(id){
       data.id = id
       Edit(data, `/teachers/${id}`, setIsLoading, navigate, toast)
    }else{
      Create(data, "/teachers", setIsLoading, navigate, toast)
    }
  }

  // Edit Part Update
  useEffect(()=> {
     if(singleData){
       setName(singleData.name)
       setSureName(singleData.surName)
       setAge(singleData.age)
       setExperience(singleData.experience)
       setEmail(singleData.email)
       setPhone(singleData.phone)
       setStudy(singleData.study)
       setStackId(singleData.stackId)
       setStack(singleData.stack)
       setRegionId(singleData.regionId)
       setRegion(singleData.region)
       setDistrict(singleData.district)
       setStatusId(singleData.statusId)
       setStatus(singleData.status)
       setGender(singleData.gender)
       setIsMerried(singleData.isMerried)
       setWorkedCompany(singleData.workedCompany)
       setWorkedCompanyId(singleData.workedCompanyId)
       
     }
  },[singleData])

  return (
    <form onSubmit={handleAddTeacher} autoComplete='off' className='p-5'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
     <CrudCaption isLoading={isLoading} icon={<PlusCircleFilled/>} title={id ? "Tahrirlash" : "Ro'yxatga qo'shish"} btnText={id ? "Tahrirlash" : "Qo'shish"}/>
      <div className='flex  justify-around mt-10'>
            <div className='flex flex-col w-[40%] gap-5'>
               <Input allowClear type='text' value={name} onChange={(e)=> setName(e.target.value)} required size='large' placeholder="Ism kiriting..."/>
               <Input allowClear type='text' value={surName} onChange={(e)=> setSurName(e.target.value)} required size='large' placeholder="Familiya kiriting..."/>
               <Input allowClear type='number' value={age} onChange={(e)=> setAge(e.target.value)} required size='large' placeholder="Yosh kiriting..."/>
               <Input allowClear type='text' value={experience} onChange={(e)=> setExperience(e.target.value)} required size='large' placeholder="Tajriba kiriting..."/>
               <Input allowClear type='email' value={email} onChange={(e)=> setEmail(e.target.value)} required size='large' placeholder="Email kiriting..."/>
               <Input allowClear type='tel' value={phone} onChange={(e)=> setPhone(e.target.value)} required size='large' placeholder="Telefon raqam kiriting..."/>
               <Input allowClear type='text' value={study} onChange={(e)=> setStudy(e.target.value)} required size='large' placeholder="O'qish kiriting..."/>
            </div>
            <div className='flex flex-col w-[40%] gap-5'>
                <FilterCustom API={"/stack"} filterId={stackId} setFilterName={setStack} setFilterId={setStackId} extraClass="!w-full" placeholder={"Kasbga ko'ra tanlang"}/>
                <FilterCustom API={"/regions"} filterId={regionId} setFilterName={setRegion} setFilterId={setRegionId} extraClass="!w-full" placeholder={"Viloyat tanlang"}/>
                <Input allowClear type='text' value={district} onChange={(e)=> setDistrict(e.target.value)} required size='large' placeholder="Tuman kiriting..."/>
                <FilterCustom API={"/status"} filterId={statusId} setFilterName={setStatus}  setFilterId={setStatusId} extraClass="!w-full" placeholder={"Maqom tanlang"}/>
                <Select value={gender} onChange={(value) => setGender(value)}  size='large'  placeholder={"Erkak/Ayol"} optionFilterProp='label' options={[{label:"Erkak", value:"Erkak"}, {label:"Ayol", value:"Ayol"}]} />
                <Input allowClear type='text' value={isMerried} onChange={(e)=> setIsMerried(e.target.value)} required size='large' placeholder="Turmush qurganmi"/>
                <FilterCustom API={"/companiesList"} mode={"multiple"} filterId={workedCompanyId} setFilterId={setWorkedCompanyId} setFilterName={setWorkedCompany} extraClass="!w-full" placeholder={"Kompaniya tanlang"}/>
            </div>
      </div>
    </form>
  )
}

export default TeachersCrud
