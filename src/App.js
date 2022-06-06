import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Producto from "./components/Producto";
import Footer from './components/Footer'
import listado from './utils/listado.json'


/* const allCategories = [ ...new Set(data.map(item => item.category))]
console.log(allCategories); */


function App() {

  
  return (
    <>
      <BrowserRouter>
        <Header listado={listado}/>
        
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/registro' element={<Register />}/>
              <Route path='/producto/:id' element={<Producto/>} />
            </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;