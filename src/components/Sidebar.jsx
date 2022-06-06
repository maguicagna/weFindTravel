import React from "react";
import { Link } from "react-router-dom";
import {ImCross} from 'react-icons/im'


function Sidebar({handleClose}) {
    return ( 
        <div className="sidebar">
            <div className="sidebar-header">
                <button onClick={()=>{handleClose()}} className="sidebar-close"><ImCross /></button>
                <h2>MENÚ</h2>
            </div>
            <div className="menu-items">
                <Link to='/login' className='sidebar-btn' onClick={()=>{handleClose()}}>Iniciar sesión</Link>
                <Link to='/registro' className='sidebar-btn' onClick={()=>{handleClose()}}>Crear Cuenta</Link>
            </div>
        </div>
     );
}

export default Sidebar;