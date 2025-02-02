import React from 'react'
import Navbar from '../modules/Navbar'
import Header from '../modules/Header'

const DashBoardLayout = ({children}) => {
  return (
    <>
    <Header/>
      <div className='flex justify-between'>
       <Navbar/>
       <div className='w-[80%] h-[100vh] overflow-y-auto'>
          {children}
       </div>
    </div>
    </>
  )
}

export default DashBoardLayout
