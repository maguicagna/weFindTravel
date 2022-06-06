import React from "react";
import {FaFacebookSquare, FaWhatsapp, FaInstagram} from 'react-icons/fa'


export default function Footer(){
    return(

    <footer>
        <div className="marca">
            &copy; 2021 WeFindTravel
        </div>
        <div className="redes">
            <FaFacebookSquare />
            <FaWhatsapp />
            <FaInstagram />
        </div>
    </footer>  
    )
}