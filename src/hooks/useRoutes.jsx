import React from 'react'
import { PATH } from './usePath'
import { Groups, Home, Market, Students, Teachers } from '../Pages/Dashboard'

export const DashboardRoutesList = () => [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        title:"Asosiy"
    },
    {
        id:2,
        path:PATH.teachers,
        element:<Teachers/>,
        title:"Ustozlar"
    },
    {
        id:3,
        path:PATH.groups,
        element:<Groups/>,
        title:"Guruhlar"
    },
    {
        id:4,
        path:PATH.market,
        element:<Market/>,
        title:"Do'kon"
    },
    {
        id:5,
        path:PATH.students,
        element:<Students/>,
        title:"O'quvchilar"
    }
]
