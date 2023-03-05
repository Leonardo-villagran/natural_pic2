import "./styles.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import  Context  from "./Context/Context";
import { useState, useEffect } from 'react';

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

  const [productos, setProductos] = useState([]);
  const [nuevaMatriz, setNuevaMatriz] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./fotos.json');
      const data = await response.json();
      setProductos(data['photos']);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const nuevaMatriz = productos.map((producto, index) => ({
      id: index,
      tiny: producto.src.tiny,
      cantidad: 0,
      alt: producto.alt
    }));
    setNuevaMatriz(nuevaMatriz);
  }, [productos]);

  console.log(nuevaMatriz)
  const globalState = { nuevaMatriz, setNuevaMatriz };


  return (
    <div className="App">
      <Context.Provider value={ globalState }>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
