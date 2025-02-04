import React from 'react'
import mainLogo from "../../assets/logos/mainLogo.ico"
const Home = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] overflow-y-auto'>
      <img src={mainLogo} alt="Main Logo" className='animated_logo w-[200px]'/>
    </div>
  )
}

export default Home
