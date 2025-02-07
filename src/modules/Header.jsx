import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MainLogo } from '../assets/logos'
import { dashboardRoutesList } from '../hooks/useRoutes'
import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal, Tooltip } from 'antd'
import { useContext } from 'react'
import { Context } from '../Context/Context'
const Header = () => {
    const path = useLocation()
    const {setToken, setOpenMenu, openMenu} = useContext(Context)
    const [logOut, setLogOut] = useState(false)
    const handleLogout = () => {
      setToken(null)
    }
  return (
    <div className='flex items-center justify-between bg-[#01152a]'>
       <div className={`${openMenu ? "w-[90px]" : "w-[20%]"} main_color flex items-center p-4 gap-5`}>
         <MainLogo/>
         {openMenu ? null : <h2 className='text-white text-[20px]'>Admin</h2>}
       </div>
       <div className={`${openMenu ? "w-full" : "w-[80%]"}  flex items-center justify-between px-[10px]`}>
          <button className='text-white' onClick={()=> setOpenMenu(!openMenu)}>{openMenu ?  <MenuUnfoldOutlined className='text-[25px] cursor-pointer' /> : <MenuFoldOutlined className='text-[25px] cursor-pointer'/>}</button>
           <div className='flex items-center gap-5'>
             <Tooltip placement="bottom" title={"So'nggu yangilanish 30s oldin"}>
               <Button size='middle' iconPosition='left'><InfoCircleOutlined /> Sinxronlash</Button>
             </Tooltip>
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
          <p className='text-[17px]'>Tizimdan chiqishni xoxlaysizmi?</p>
       </Modal>
    </div>
  )
}

export default Header
