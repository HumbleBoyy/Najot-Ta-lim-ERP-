import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined} from '@ant-design/icons'
import { Button } from 'antd'
const CrudCaption = ({title,icon,btnText}) => {
const navigate = useNavigate()


  return (
    <div className='flex justify-between items-center'>
    <div className='flex items-center gap-2'>
      <Button onClick={()=> navigate(-1)} size='middle' className='border-none'><ArrowLeftOutlined/></Button>
      <h2 className='text-[25px] font-bold'>{title}</h2>
    </div>
    <Button htmlType='submit' type='primary' size='large'>{icon} {btnText}</Button>
  </div>
  )
}

export default CrudCaption
