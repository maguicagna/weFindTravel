import React, {useState} from "react"
import {FaBars} from 'react-icons/fa'
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Header({listado}){

    const[showLogin, setShowLogin] = useState(false)
    const[showRegister, setShowRegister] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)


    return(
        <>
            <header className="home-header">
                <Link to='/'><img className="logo" src='./img/logoCropeado.png' alt="digital booking"/></Link>
                <div >
                    <Link className="user-btn" to='/login'>Login</Link>
                    <Link className="user-btn" to='/registro'>Sign up</Link>
                    
                </div>
                <button onClick={()=> setShowSidebar(true)} className="menu-hamburguesa">
                    <FaBars />
                </button>
            </header>
           
            
            
            {showSidebar && 
            <Sidebar handleClose={()=>setShowSidebar(false)}/>}
        </>
    )
}
