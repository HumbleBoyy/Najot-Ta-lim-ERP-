import React, { useContext } from 'react'
import { Menu } from 'antd'
import { dashboardRoutesList } from '../hooks/useRoutes'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'

const Navbar = () => {
  const {openMenu} = useContext(Context)
  return (
    <div className='w-[20%]  h-[100vh] overflow-y-auto'>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        className='h-full !p-1'
        inlineCollapsed={openMenu}
        items={dashboardRoutesList.map(item => {
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
