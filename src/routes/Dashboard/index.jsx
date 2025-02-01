import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { dashboardRoutesList } from '../../hooks/useRoutes'

const DashBoardRoutes = () => {
  return (
    <Routes>
        {dashboardRoutesList.map(item => <Route element={item.element} key={item.id} path={item.path}/>)}
    </Routes>
  )
}

export default DashBoardRoutes
