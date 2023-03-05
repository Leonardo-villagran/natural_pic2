import "./styles.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import  Context  from "./Context/Context";
import { useState, useEffect } from 'react';

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";
import Footer from "./views/Footer";

export default function App() {

  const [productos, setProductos] = useState([]);
  const [nuevaMatriz, setNuevaMatriz] = useState([]);


  const fetchData = async () => {
    
    const response = await fetch('./fotos.json');
    const data = await response.json();
    setProductos(data['photos']);
  };

  const nueva = productos.map((producto, index) => ({
    id: index,
    tiny: producto.src.tiny,
    cantidad: 0,
    alt: producto.alt
  }));

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setNuevaMatriz(nueva);
  }, [productos]);

  console.log(nuevaMatriz)
  const globalState = { nuevaMatriz, setNuevaMatriz };

  // Para el deploy 
  //<BrowserRouter basename='/natural_pic2'>

  return (
    <div className="App">
      <Context.Provider value={ globalState }>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </Context.Provider>
    </div>
  );
}
