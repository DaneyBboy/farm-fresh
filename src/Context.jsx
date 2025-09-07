import { createContext, useEffect, useState } from "react";



export const AddtoCart = createContext()

export const AddtoCartProvider = ({ children }) => {


    const [badge, setBadge] = useState(0)

    const loginLocal = localStorage.getItem('loggedIn')

    const [login, setLogin] = useState(loginLocal)
  
    const [local, setLocal] = useState(loginLocal === 'true'?true:false)


    useEffect(()=>{
        localStorage.setItem('loggedIn', local.toString())
    },[local])


    function Cart() {
        setBadge(badge + 1)
    }

    function Auth() {        
            setLogin(true)
            setLocal(true)            
    }
    function logout(){
        localStorage.removeItem('loggedIn')       
    }


    return (

        <AddtoCart.Provider value={{ badge, Cart, login, setLogin, Auth, logout }}>
            {children}
        </AddtoCart.Provider>

    )
}

