import { createContext } from "react";

export const Context = createContext()

export const GlobalContext = ({children}) => {
    <Context.Provider>
        {children}
    </Context.Provider>
}