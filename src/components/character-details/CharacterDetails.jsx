import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import mockedDetails from '../../mockData/details.json';

import './CharacterDetails.css';

export const CharacterDetails = () => {
    const { 
        name, 
        height, 
        gender, 
        mass, 
        hair_color, 
        eye_color, 
        skin_color, 
        birth_year, 
        films 
    } = mockedDetails;

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Link to="/details"><h2>Back home</h2></Link>
                    <h2>{name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='character-details__atributes'>
                        <p>{`Height: ${height}`}</p>
                        <p>{`Gender: ${gender}`}</p>
                        <p>{`Mass: ${mass}`}</p>
                        <p>{`Hair color: ${hair_color}`}</p>
                        <p>{`Eye color: ${eye_color}`}</p>
                        <p>{`Skin color: ${skin_color}`}</p>
                        <p>{`Birth year: ${birth_year}`}</p>
                    </div>
            </Col>
            </Row>
            <Row>
                <Col>
                    <div className='character-details__films'>
                        <h3>{`${films.length} films`}</h3>
                        <ul>
                        {films.map((film, key) => (
                            <li>{film}</li>
                            ))
                        }
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CharacterDetails;