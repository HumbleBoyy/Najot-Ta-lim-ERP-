import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {navbarRoutesList } from '../hooks/useRoutes'
import { Button } from 'antd'

const Caption = ({addLink, iconBtn, count}) => {
    const path = useLocation()
    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center'>
       <div className='flex flex-col'>
         <h2 className='font-bold text-[25px] mb-1'>{navbarRoutesList.map(item => item.path === path.pathname && item.title)}</h2>
         <p className='text-[15px] text-slate-400 lowercase'>{navbarRoutesList.map(item => item.path === path.pathname && item.title)} {count}-ta</p>
       </div>
       <Button onClick={()=> navigate(`${addLink}`)} htmlType='button' size='large' type='primary' icon={iconBtn} className='!addBtn'>Qo'shish</Button>
    </div>
  )
}

export default Caption
