import React from 'react'
import { PATH } from './usePath'
import { Group, GroupCrud, Home, Market, SingleGroup, Stack, StackCrud, Students, StudentsCrud, Teachers, TeachersCrud, TeachersMore } from '../Pages/Dashboard'
import {AppstoreOutlined, HomeOutlined, ShoppingCartOutlined, UserAddOutlined, UsergroupAddOutlined, WindowsOutlined } from '@ant-design/icons'
import StudentsMore from '../Pages/Dashboard/StudentsMore'

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
        path:PATH.group,
        element:<Group/>,
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
    },
    {
        id:10,
        path:PATH.groupAdd,
        element:<GroupCrud/>,
    },
    {
        id:11,
        path:PATH.groupEdit,
        element:<GroupCrud/>,
    },
    {
        id:12,
        path:PATH.groupMore,
        element:<SingleGroup/>,
    },
    {
        id:13,
        path:PATH.studentsAdd,
        element:<StudentsCrud/>,
    },
    {
        id:14,
        path:PATH.studentsEdit,
        element:<StudentsCrud/>,
    },
    {
        id:15,
        path:PATH.studentsMore,
        element:<StudentsMore/>,
    },
    {
        id:16,
        path:PATH.stackAdd,
        element:<StackCrud/>,
    },
    {
        id:17,
        path:PATH.stackEdit,
        element:<StackCrud/>,
    },
]
