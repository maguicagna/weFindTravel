import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import  {useParams} from 'react-router-dom'
import listado from '../utils/listado.json'
import {MdArrowBackIos, MdLocationOn} from 'react-icons/md'
import { Rating } from 'react-simple-star-rating'
import images from '../utils/img.json'
import '../styles/producto.css'
import amenities from '../utils/amenities.json'
import ImgCarousel from "./Carousel";

export default function Producto(){
    const [hotel, setHotel] = useState({})
    const [img, setImgs] = useState(images)
    const {id} = useParams();
    const [carousel, setCarousel] = useState(false)

    
    // en breve vamos a consumir la api pero mientras usamos el json


    useEffect(() => {
        const producto = listado.filter(item => item.id === parseInt(id));
        setHotel(producto[0]);
        
        
    }, [id])
    
    return(
        <>  
                <header className="product-header">
                    <div>
                        <p>{hotel.category}</p>
                        <h2>{hotel.titulo}</h2>
                    </div>
                    <div className="btn-div">
                        <Link to='/'><MdArrowBackIos className="back-btn"/></Link>    
                    </div>
                </header>
                <section className="location">
                    <p><MdLocationOn/> {hotel.location}</p>
                    <div className="rating">
                        <div className="stars">
                            <p>Muy bueno</p>
                            <Rating size={14} fillColor='#1DBEB4' ratingValue={80}/>
                        </div>
                        <div className="number">8</div>
                    </div>
                </section>
                <main className="product-main">
                    <section className="photo-gallery-container">
                        <div className="photo-gallery">
                            {img.map((item) => {
                                return(
                                    <div className={`photo-${item.id}`} key={item.id}>
                                        <img className="gallery-photo" src={item.img} alt="foto"></img>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="gallery-btn" onClick={()=> setCarousel(true)}>ver mas</button>
                        {carousel && <ImgCarousel handleClose={()=> setCarousel(false)} />}

                    </section>
                    <div className="info">
                        <h2>Alojate en el corazon de mar del plata</h2>
                        <p>{hotel.descripcion}</p>
                        <h2>Que ofrece este lugar</h2>
                        <hr />
                        <div className="amenities">
                            {amenities.map(amenity => {
                                return(
                                    <p>{amenity.amenity}</p>
                                )
                            })}
                        </div>
                    </div>
                </main>
                
           
        
        </>
    )
}