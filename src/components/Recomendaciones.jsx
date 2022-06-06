import React from "react";
import { Link } from "react-router-dom";
import {MdLocationOn} from 'react-icons/md'
import { Rating } from 'react-simple-star-rating'



export default function Recomendaciones({listado}){
    return( 
        <section className="listado">
            <h2 className="title-listado">Recomendaciones</h2>
            <div className="cards-alojamiento">
                {listado.map((item, i) => {
                    return(
                        <article key={i} className="alojamiento-item">
                            <img className="item-img" src={item.img} alt={item.titulo} />
                            <div className="item-info">
                                <div className="card-header">
                                    <div>
                                        <small className="categoria">{item.category.toUpperCase()} <Rating size={14} fillColor='#1DBEB4' ratingValue={80}/></small>
                                        <h4>{item.titulo}</h4>
                                    </div>
                                    <div className="card-rating">
                                        <p className="rating-number">8</p>
                                        <small>Muy bueno</small>
                                    </div>
                                </div>
                                <p><MdLocationOn/>{item.location}</p>
                                <p className="descripcion">{`${item.descripcion.substring(0,100)}...`}</p>                                
                                <Link className="vermas-btn" to={`/producto/${item.id}`} >Ver más</Link>    
                            </div>                    
                        </article>
                    )
                })}


            </div>
        </section>
    )
}