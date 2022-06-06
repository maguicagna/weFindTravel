import React, {useState} from "react"
import Calendario from "./Calendario";


export default function Buscador({listadoCiudades}){

    const[calendario, setCalendario] = useState(false);
  
    return(
        <>
            <div className="banner">
                <h1>Busca ofertas en hoteles, casas y mucho mas</h1>
                <form>
                    <select className="bucador" name="ciudad">
                        <option value="" disabled selected hidden>A donde vamos?</option>
                        {
                            listadoCiudades.map((item, i) =>{

                                return(
                                    <option value={item.location} key={i}>{item.location}</option>
                                )
                                
                            })

                        }

                    </select>
                    <input className='buscador' type='text' placeholder="Check in - Check out" onFocus={() => setCalendario(!calendario)}></input>
                    {calendario && <Calendario/>}
                    <button className="buscar-btn">Buscar</button>
                </form>
            </div>
        </>
    )

}