import React from "react";

export default function Categorias({categorias}){
    //const [category, img, available] = categorias;
    return(

        <section className="categorias">
            <h2 className="title-categorias">Buscar por tipo de alojamiento</h2>
            <div className="cards-categorias"> 
                
                {categorias.map((categoria, i) => {
                    return(

                        <article key={i} className="single-category">
                            <img className="cat-img" src={categoria.img} alt={categoria.category} />
                            <div className="cat-info">
                                <h4>{categoria.category}</h4>
                                <p>{categoria.available} {categoria.category.toLowerCase()}</p>
                            </div>
                            
                        </article>
                    )
                })}
              
            </div>

        </section>
    )
}

