import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { dashboardRoutesList } from '../../hooks/useRoutes'
import DashBoardLayout from '../../Features'

const DashBoardRoutes = () => {
  return (
    <DashBoardLayout>
      <Routes>
          {dashboardRoutesList.map(item => <Route element={item.element} key={item.id} path={item.path}/>)}
      </Routes>
    </DashBoardLayout>
  )
}

export default DashBoardRoutes
