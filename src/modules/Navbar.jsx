import React, { useContext } from 'react'
import { Menu } from 'antd'
import { navbarRoutesList } from '../hooks/useRoutes'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'

const Navbar = () => {
  const {openMenu} = useContext(Context)
  return (
    <div className='w-[20%] fixed left-0 z-50 h-[100vh] overflow-hidden'>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        className='h-full !p-1'
        inlineCollapsed={openMenu}
        items={navbarRoutesList.map(item => {
           const data = {
              key:item.id,
              icon:item.icon,
              label:<Link to={item.path} className='text-[20px] pl-2'>{item.title}</Link>
           }
           return data
        })}
      />
    </div>
  )
}

export default Navbar
