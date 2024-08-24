import React, {createContext, useContext, useState} from "react";

export const SideNavContext = createContext(null)
export const useSideNav = ()=>{
    const SideNav = useContext(SideNavContext);
    return SideNav;
}

export const Provider = (props)=>{
    const [active, setActive] = useState('')
    return(
        <SideNavContext.Provider value={{active, setActive}}>
            {props.children}
        </SideNavContext.Provider>
    )
}

const SideNav = ()=>{
    return(
        <div>

        </div>
    )
}
export default SideNav