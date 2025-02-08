import React from 'react'
import Caption from '../../Components/Caption'
import { UserAddOutlined } from '@ant-design/icons'

const Students = () => {
  return (
    <div className='p-5'>
      <Caption iconBtn={<UserAddOutlined/>} count={10}/>
    </div>
  )
}

export default Students
