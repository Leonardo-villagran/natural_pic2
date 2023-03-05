import React, { useContext } from 'react';
import Context from "../Context/Context"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/galeria.css";
import blanco from "../assets/img/corazon_blanco.png";
import rojo from "../assets/img/corazon_rojo.png";
//import Heart from "./Heart";

export default function Home() {

  const { nuevaMatriz, setNuevaMatriz } = useContext(Context);

  const presionarboton = (id, cantidad) => {
    
    const nuevosDatos = nuevaMatriz.map((dato) =>
      dato.id === id ? { ...dato, cantidad: cantidad + 1 } : dato
    );
    setNuevaMatriz(nuevosDatos);
    console.log('Button clicked', id, cantidad);
  }

  const imprimir = () => {
    const arreglo=
      nuevaMatriz.map((producto) => (
        <Col key={producto.id}>
          <div className='caja'>
            <img className='imagen' onClick={() => presionarboton(producto.id, producto.cantidad)} src={producto.tiny} alt="foto" />
            <div className='heart px-2'><img onClick={() => presionarboton(producto.id, producto.cantidad)} 
            src={producto.cantidad === 0 ? blanco: rojo} alt="foto"/>{ producto.cantidad}</div>
            <div className='texto_blanco px-2'>{producto.alt}</div>
          </div>
        </Col>
      ));
    return arreglo;
  }



  return (
    <div>
      <Container fluid>
        <Row >
          {imprimir()}
        </Row>
      </Container>
    </div>

  );
}
