import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Login/Login'

const LoginRoutes = () => {
  return (
   <Routes>
       <Route path='/' element={<Login/>}/>
   </Routes>
  )
}

export default LoginRoutes
