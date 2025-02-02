import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MainLogo } from '../assets/logos'
import { dashboardRoutesList } from '../hooks/useRoutes'
import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal } from 'antd'
import { useContext } from 'react'
import { Context } from '../Context/Context'
const Header = () => {
    const path = useLocation()
    const {setToken} = useContext(Context)
    const [logOut, setLogOut] = useState(false)
    
    const handleLogout = () => {
      setToken(null)
    }
  return (
    <div className='flex items-center justify-between bg-[#01152a]'>
       <div className='w-[20%] main_color flex items-center p-4 gap-5'>
         <MainLogo/>
         <h2 className='text-white text-[20px]'>{dashboardRoutesList.map(item => path.pathname === item.path && item.title)}</h2>
       </div>
       <div className='w-[80%] flex items-center justify-between px-[10px]'>
          <span className='text-white'><MenuFoldOutlined className='text-[25px] cursor-pointer'/></span>
           <div className='flex items-center gap-5'>
              <Button size='middle' iconPosition='left'><InfoCircleOutlined /> Sinxronlash</Button>
              <Badge count={5} size='default'>
              <Button size='middle' iconPosition='left'><BellOutlined /></Button>
              </Badge>
              <button onClick={()=> setLogOut(true)} className='flex items-center gap-2 cursor-pointer text-white'>
                <span>Chiqish</span>
                <LogoutOutlined />
              </button>
           </div>
       </div>
       <Modal open={logOut} onCancel={()=> setLogOut(false)} onOk={handleLogout} title="Chiqish">
          <p>Tizimdan chiqishni xoxlaysizmi?</p>
       </Modal>
    </div>
  )
}

export default Header
