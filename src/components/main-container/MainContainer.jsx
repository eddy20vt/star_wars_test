import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import Card from '../character-card/CharacterCard';


import { getPokemonListPromise } from '../../api/index'

import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPageContent, setPokemonsPageContent] = useState([]);
    const [maxPageLoaded, setMaxPageLoaded] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const OFFSET = 9;
    const INDEX = (OFFSET*(currentPage-1)); 

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
     
    const buildColumns = (columns,index) => {
         let myCols = Array(columns).fill([]);

         return myCols.map((theCol, pos) => 
                    [...theCol,
                    <Col xs={12} md={4} key={pos}>
                        <Card 
                            name={pokemonsPageContent[index+pos].name}
                            films=''
                            birthyear=''
                        />
                    </Col>]
                )
    }

    return (
        !loading && maxPageLoaded >= currentPage 
        ?
        <>
        <Container fluid>
            <Row>{buildColumns(3,INDEX)}</Row>
            <Row>{buildColumns(3,(INDEX+3))}</Row>
            <Row>{buildColumns(3,(INDEX+6))}</Row>
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
