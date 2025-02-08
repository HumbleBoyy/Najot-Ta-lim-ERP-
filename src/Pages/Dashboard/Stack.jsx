import React, { useState } from 'react'
import Caption from '../../Components/Caption'
import { AppstoreAddOutlined, EditFilled, InfoCircleFilled } from '@ant-design/icons'
import { Button, Card } from 'antd'
import getRequest from '../../service/getRequest'

const cardContent = () => {
  return(
    <>
         <div className='flex items-center gap-2'>
             <Button type='primary' className='hover:!text-white' size='large'><EditFilled/>Tahrirlash</Button>
             <Button type='primary' className='hover:!text-white' size='large'><InfoCircleFilled/>Batafsil</Button>
         </div>
    </>
  )
}


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
                <Card.Meta title={item.name} description={cardContent()}
              />
            </Card>
        ))}
      </ul>
    </div>
  )
}

export default Stack
