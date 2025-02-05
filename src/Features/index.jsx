import React, { useContext } from 'react'
import Navbar from '../modules/Navbar'
import Header from '../modules/Header'
import { Context } from '../Context/Context'

const DashBoardLayout = ({children}) => {
   const {openMenu} = useContext(Context)
  return (
    <>
    <Header/>
      <div className='flex'>
       <Navbar/>
       <div className={`${openMenu ? "w-[3500px]" : "w-[80%]"} duration-300 h-[100vh] overflow-y-auto`}>
          {children}
       </div>
    </div>
    </>
  )
}

export default DashBoardLayout
