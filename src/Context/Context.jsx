import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export const GlobalContext = ({children}) => {
    const [token, setToken] = useState(null)

   return(
    <Context.Provider value={{token, setToken}}>
        {children}
    </Context.Provider>
   )
}