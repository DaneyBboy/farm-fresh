import { createContext, useState } from "react";

export const AddtoCart = createContext()

export const AddtoCartProvider = ({ children }) => {

    const [badge, setBadge] = useState(0)
    function Cart(){
        setBadge(badge +1)
    }

    return (

        <AddtoCart.Provider value={{badge, Cart}}>
            {children}
        </AddtoCart.Provider>

    )
}

