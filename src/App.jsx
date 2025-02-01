import React, { useContext } from 'react'
import LoginRoutes from './routes/Register'
import DashBoardRoutes from './routes/Dashboard'
import { Context } from './Context/Context'

const App = () => {
const {token} = useContext(Context)
   if(token){
      return <DashBoardRoutes/>
   }
     else{
      return <LoginRoutes/>
     }
}

export default App
