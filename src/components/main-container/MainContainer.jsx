import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import Card from '../character-card/CharacterCard';


import { getPokemonListPromise } from '../../api/index'

import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPageContent, setPokemonsPageContent] = useState([]);
    const [maxPageLoaded, setMaxPageLoaded] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const OFFSET = 10;
    const INDEX = (OFFSET*(currentPage-1))-(currentPage-1); 

    useEffect(() => {
        const fetch = async () => {        
            await getPokemonListPromise(currentPage-1,OFFSET)
            .then(res => {
                    setPokemonsPageContent([...pokemonsPageContent, ...res.data.results])
                    setMaxPageLoaded(maxPageLoaded+1)
                    setLoading(false);
                }
            )
            .catch(error => console.log(error))
        }

        if ((currentPage > maxPageLoaded) || (currentPage === 0)){
            setLoading(true);
            fetch();   
        }

      }, [currentPage])

    const handleClick = (type) => {
        if (type==='previous') {
            if (currentPage > 1) {
                setCurrentPage(currentPage-1)
            }
        } else {
            setCurrentPage(currentPage+1)
        }
    }
        
    return (
        !loading && maxPageLoaded >= currentPage 
        ?
        <>
        <Container fluid>
            <Row>
                <Col xs={12} md={4}>
                    <Card 
                        name={pokemonsPageContent[INDEX].name}
                        films={props.data[0].films.length}
                        birthyear={props.data[0].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={pokemonsPageContent[INDEX+1].name}
                        films={props.data[1].films.length}
                        birthyear={props.data[1].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={pokemonsPageContent[INDEX+2].name}
                        films={props.data[2].films.length}
                        birthyear={props.data[2].birth_year}
                    />
                </Col>
            </Row>
            <Row>
            <Col xs={12} md={4}>
                    <Card 
                        name={props.data[3].name}
                        films={props.data[3].films.length}
                        birthyear={props.data[3].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[4].name}
                        films={props.data[4].films.length}
                        birthyear={props.data[4].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[5].name}
                        films={props.data[5].films.length}
                        birthyear={props.data[5].birth_year}
                    />
                </Col>
            </Row>
            <Row>
            <Col xs={12} md={4}>
                    <Card 
                        name={props.data[6].name}
                        films={props.data[6].films.length}
                        birthyear={props.data[6].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[7].name}
                        films={props.data[7].films.length}
                        birthyear={props.data[7].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[8].name}
                        films={props.data[8].films.length}
                        birthyear={props.data[8].birth_year}
                    />
                </Col>
            </Row>
        </Container>
        <Button onClick={() => handleClick('previous')}>Previous</Button>
        <Button onClick={() => handleClick('next')}>Next</Button>
        </>
        : <div className='main-container__loading'>
            <h1>Loading more pokemons...</h1>
        </div>
    )
}

export default MainContainer;
