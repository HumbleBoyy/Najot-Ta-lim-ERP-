import React from 'react'
import { PATH } from './usePath'
import { Groups, Home, Market, Stack, Students, Teachers, TeachersCrud, TeachersMore } from '../Pages/Dashboard'
import {AppstoreOutlined, HomeOutlined, ShoppingCartOutlined, UserAddOutlined, UsergroupAddOutlined, WindowsOutlined } from '@ant-design/icons'

export const navbarRoutesList = [
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
        path:PATH.stack,
        element:<Stack/>,
        title:"Yo'nalishlar",
        icon:<AppstoreOutlined className='!text-[25px]'/>
    },
    {
        id:5,
        path:PATH.market,
        element:<Market/>,
        title:"Do'kon",
        icon:<ShoppingCartOutlined className='!text-[25px]'/>
    }
   
]
export const dashboardRoutesList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
    },
    {
        id:2,
        path:PATH.teachers,
        element:<Teachers/>,
    },
    {
        id:3,
        path:PATH.students,
        element:<Students/>,
    },
    {
        id:4,
        path:PATH.groups,
        element:<Groups/>,
    },
    {
        id:5,
        path:PATH.market,
        element:<Market/>,
    },
    {
        id:6,
        path:PATH.teachersAdd,
        element:<TeachersCrud/>,
    },
    {
        id:7,
        path:PATH.teachersMore,
        element:<TeachersMore/>,
    },
    {
        id:8,
        path:PATH.teachersEdit,
        element:<TeachersCrud/>,
    },
    {
        id:9,
        path:PATH.stack,
        element:<Stack/>,
    }
]
