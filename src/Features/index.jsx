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
       <div className={`w-[80%] duration-300 ${openMenu ? "w-[100%] ml-28 duration-300" : "ml-76"}`}>
          {children}
       </div>
    </div>
    </>
  )
}

export default DashBoardLayout
