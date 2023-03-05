import React, { useContext } from 'react';
import Context from "../Context/Context"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/galeria.css";
//import Heart from "./Heart";

export default function Home() {

    const {nuevaMatriz} = useContext(Context);

    const imprimirFavoritos = () => {

        const arreglo = nuevaMatriz.map((producto) => (
            producto.cantidad !== 0 ?
                < Col key={producto.id} >
                    <div className='caja'>
                        <img className='imagen' src={producto.tiny} alt="foto" />

                        <div className='texto_blanco px-2'>{producto.alt}</div>
                    </div>
                </Col > : null
        ))
        return arreglo;

    }

    return (
        <div>
            <Container fluid >
                <Row >
                    {imprimirFavoritos()}
                </Row>
            </Container>
        </div>

    );
}
