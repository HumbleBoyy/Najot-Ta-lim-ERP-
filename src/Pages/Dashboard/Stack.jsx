import React, { useState } from 'react'
import Caption from '../../Components/Caption'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import getRequest from '../../service/getRequest'



const Stack = () => {
   const stackList = getRequest("/stackList")
   console.log(stackList)
    
  return (
    <div className='p-5'>
      <Caption iconBtn={<AppstoreAddOutlined />} count={5}/>
      <ul className='flex  flex-wrap gap-5 mt-10'>
        {stackList.map(item => (
            <Card
            key={item.id}
            className='w-[250px]'
            hoverable
            style={{
            width: 350,
            }}
            cover={<img alt="Images" className='h-[200px] object-cover' src={item.image} />}
            >
                <Card.Meta title={item.name} />
            </Card>
        ))}
      </ul>
    </div>
  )
}

export default Stack
