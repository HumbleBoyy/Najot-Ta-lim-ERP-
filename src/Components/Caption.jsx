import React from 'react'
import { useLocation } from 'react-router-dom'
import { dashboardRoutesList } from '../hooks/useRoutes'
import { Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'

const Caption = () => {
    const path = useLocation()
  return (
    <div className='flex justify-between items-center'>
       <div className='flex flex-col'>
         <h2 className='font-bold text-[25px] mb-1'>{dashboardRoutesList.map(item => item.path === path.pathname && item.title)}</h2>
         <p className='text-[15px] text-slate-400 lowercase'>{dashboardRoutesList.map(item => item.path === path.pathname && item.title)} {5}-ta</p>
       </div>
       <Button htmlType='button' size='large' type='primary' icon={<UserAddOutlined />} className='!addBtn'>Qo'shish</Button>
    </div>
  )
}

export default Caption
