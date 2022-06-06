import React, {useState} from "react"
import Buscador from './Buscador'
import Login from "./Login";
import Register from "./Register";
import {FaBars} from 'react-icons/fa'
import Sidebar from "./Sidebar";

export default function Header({listado}){

    const[showLogin, setShowLogin] = useState(false)
    const[showRegister, setShowRegister] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)


    return(
        <>
            <header>
                <img onClick={()=>{
                    setShowLogin(false) 
                    setShowRegister(false)}} 
                className="logo" src='./img/logoCropeado.png' alt="digital booking" />
                <div >
                    <button className="user-btn" onClick={()=> setShowLogin(true)} >login</button>
                    <button className="user-btn" onClick={()=> setShowRegister(true)} >sign up</button>
                </div>
                <button onClick={()=> setShowSidebar(true)} className="menu-hamburguesa">
                    <FaBars />
                </button>
            </header>
            {showLogin && 
            <Login handleClose={()=>setShowLogin(false)} 
            handleRegisterLink={()=> {setShowLogin(false)
                                      setShowRegister(true)}}/>}
            {showRegister && 
            <Register handleClose={()=>setShowRegister(false)}
            handleLoginLink={()=> {setShowRegister(false)
                                  setShowLogin(true)}}/>}
            <Buscador listadoCiudades={listado}/>
            {showSidebar && 
            <Sidebar handleClose={()=>setShowSidebar(false)}
            handleLoginBtn={()=>setShowLogin(true)}
            handleRegisterBtn= { ()=> setShowRegister(true)}/>}
        </>
    )
}

//GUARDO EL HEADER ANTERIOR POR SI ROMPO TODO