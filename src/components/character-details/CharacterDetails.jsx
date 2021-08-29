import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import { getFilmsPromise, getDetailsPromise } from '../../api/index'

import './CharacterDetails.css';

export const CharacterDetails = () => {
    const [filmNames, setFilmNames] = useState(null);
    const [details, setDetails] = useState(null);
    const storeState = useSelector(state => state);
    let { id } = useParams();

    useEffect(() => {
        const {
            pagesLoaded,
            selectedCharacter,
            characters
        } = storeState;

        const fetchDetails = async () => {           
                await getDetailsPromise(id)
                .then(res => {
                    setDetails(res.data);
                    }
                )
                .catch(error => console.log(error))
            }

            if (pagesLoaded === 0){
                fetchDetails();
            }else{
                setDetails(characters[selectedCharacter-1]);
            }
    }, [id, storeState])


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

        details && fetch(details.films);

      }, [details])


    const buildAttributesTable = () => {
        const {
            height, 
            gender, 
            mass, 
            hair_color, 
            eye_color, 
            skin_color, 
            birth_year,

        } = details;

        return (
            <Container fluid className={'character-details__atributes'}>
            <Row>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Height: ${height}`}</p></Col>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Gender: ${gender}`}</p></Col>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Mass: ${mass}`}</p></Col>
            </Row>
            <Row>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Hair color: ${hair_color}`}</p></Col>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Eye color: ${eye_color}`}</p></Col>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Skin color: ${skin_color}`}</p></Col>
            </Row>
            <Row>
                <Col xs={12} md={4}><p className={'character-details__columns'}>{`Birth year: ${birth_year}`}</p></Col>
            </Row>
            </Container>
        )
    }

    return (
        details &&
        <Container fluid className='character-details'>
            <Row>
                <Col>
                    <Link to='/' >Back to main list</Link>
                    <h2>{details.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {buildAttributesTable()}
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