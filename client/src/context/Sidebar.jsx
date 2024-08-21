import React, {createContext, useContext, useState} from "react";

export const SidebarContext = createContext(null)
export const useSidebar = ()=>{
    const Sidebar = useContext(SidebarContext)
    return Sidebar
}

export const Provider = (props)=>{
    const [active, setActive] = useState('')
    return(
        <SidebarContext.Provider value={{active, setActive}}>
            {props.children}
        </SidebarContext.Provider>
    )
}

const Sidebar = ()=>{
    return(
        <div>

        </div>
    )
}
export default Sidebar