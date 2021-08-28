import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { getFilmsPromise } from '../../api/index'

import './CharacterDetails.css';

export const CharacterDetails = () => {
    const [filmNames, setFilmNames] = useState(null);
    const history = useHistory();
    const storeState = useSelector(state => state);
    const {row, col} = storeState.selectedCharacter;

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
    } = storeState.characters[row][col];

    const _buildPromises = (urls) => {
        return urls.map(url => (getFilmsPromise(url))) 
    }

    useEffect(() => {
        let filmsArray = [];

        const fetch = async (urls) => {        
            await Promise.all(_buildPromises(urls))
            .then(results => {
                results.forEach( res => {
                    filmsArray.push({title: res.data.title, date: res.data.release_date});
                })
            }).catch(errorMsg => {
                console.log(errorMsg)
            });

            setFilmNames(filmsArray);
        }

        fetch(films);

      }, [films])

    return (
        <Container fluid className='character-details'>
            <Row>
                <Col>
                    <a href='##' onClick={() => history.goBack()}> {"< Back Home"} </a>
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
                        {!filmNames &&
                            <div className='character-details__loading'>
                                <Spinner animation="border" variant="primary" />
                                <h3>Loading films...</h3>
                            </div>
                        }
                        {filmNames &&
                            <>
                            <h3>{`${filmNames.length} films`}</h3>
                            <ul>
                            {filmNames.map((film, key) => {
                                    const currentYear = new Date().getFullYear();
                                    const releaseYear = new Date(film.date).getFullYear();

                                    return <li key={key}>{`${film.title}: ${currentYear - releaseYear} years ago`}</li>
                                })
                            }
                            </ul>
                            </>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CharacterDetails;