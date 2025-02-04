import React from 'react'
import { PATH } from './usePath'
import { Groups, Home, Market, Students, Teachers } from '../Pages/Dashboard'
import { DeploymentUnitOutlined, HomeOutlined, ShoppingCartOutlined, TeamOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons'

export const dashboardRoutesList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        title:"Asosiy",
        icon:<HomeOutlined className='!text-[25px]'/>
    },
    {
        id:2,
        path:PATH.teachers,
        element:<Teachers/>,
        title:"Ustozlar",
        icon:<UserAddOutlined className='!text-[25px]'/>
    },
    {
        id:3,
        path:PATH.students,
        element:<Students/>,
        title:"O'quvchilar",
        icon:<UsergroupAddOutlined className='!text-[25px]'/>
    },
    {
        id:4,
        path:PATH.groups,
        element:<Groups/>,
        title:"Guruhlar",
        icon:<DeploymentUnitOutlined className='!text-[25px]'/>
    },
    {
        id:5,
        path:PATH.market,
        element:<Market/>,
        title:"Do'kon",
        icon:<ShoppingCartOutlined className='!text-[25px]'/>
    }
   
]
