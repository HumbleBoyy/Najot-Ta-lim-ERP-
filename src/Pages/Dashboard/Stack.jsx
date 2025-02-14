import React from 'react'
import Caption from '../../Components/Caption'
import { AppstoreAddOutlined, EditFilled, InfoCircleFilled } from '@ant-design/icons'
import { Button, Card } from 'antd'
import getRequest from '../../service/getRequest'
import { useNavigate } from 'react-router-dom'

const cardContent = (navigate, id) => {
  return(
    <>
         <div className='flex items-center gap-2'>
             <Button onClick={()=> navigate(`edit/${id}`)} type='primary' className='hover:!text-white' size='large'><EditFilled/>Tahrirlash</Button>
             <Button onClick={()=> navigate(`${id}`)} type='primary' className='hover:!text-white' size='large'><InfoCircleFilled/>Batafsil</Button>
         </div>
    </>
  )
}


const Stack = () => {
  const stackList = getRequest("/stackList")
  const navigate = useNavigate()
  return (
    <div className='p-5'>
      <Caption iconBtn={<AppstoreAddOutlined />} addLink={"add"} count={5}/>
      <ul className='flex  flex-wrap gap-5 mt-10'>
        {stackList.map(item => (
            <Card
            key={item.id}
            className='w-[250px]'
            hoverable
            style={{
            width: 350,
            }}
            cover={<img onClick={()=> navigate(`${item.id}`)} alt="Images" className='h-[200px] object-cover' src={item.image} />}
            >
                <Card.Meta title={item.name} description={cardContent(navigate, item.id)}
              />
            </Card>
        ))}
      </ul>
    </div>
  )
}

export default Stack
