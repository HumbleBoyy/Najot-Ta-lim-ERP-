import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export const GlobalContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("userToken")) || null)
    
    localStorage.setItem("userToken", JSON.stringify(token))
   return(
    <Context.Provider value={{token, setToken}}>
        {children}
    </Context.Provider>
   )
}