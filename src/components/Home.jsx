import React, {useState} from 'react';
import Categorias from './Categorias'
import Recomendaciones from './Recomendaciones';
import Buscador from './Buscador';
import dataCat from '../utils/categorias.json'
import data from '../utils/listado.json'

export default function Home(){

    const [categorias, setCategorias] = useState(dataCat)
    const [listado, setListado] = useState(data) 

    return(
        <>
            <Buscador listadoCiudades={listado}/>
            <main>
                <Categorias categorias={categorias}/>
                <Recomendaciones listado={listado}/>
            </main>
        </>
    )

}
