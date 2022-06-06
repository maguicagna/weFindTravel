import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../utils/img.json'
import {ImCross} from 'react-icons/im'

export default function ImgCarousel({handleClose}){
    return(
        <>
            <Carousel autoPlay={true} width={600}>
                {img.map(item => {
                    return(
                        <div>
                            <img src={item.img} alt="foto" />
                        </div>
                    )
                })}
            </Carousel>
            <button className="close-gallery" onClick={()=> handleClose()}><ImCross /></button>
        </>
    )
    
}
