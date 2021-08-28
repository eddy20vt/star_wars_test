import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'; 
import CharacterCard from '../character-card/CharacterCard';


import { getCharactersPromise } from '../../api/index'

import './MainContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    const [maxPageLoaded, setMaxPageLoaded] = useState(0);
    const [loading, setLoading] = useState(false);
    // Redux
    const currentPage = useSelector(state => state.pageCounter);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {        
            await getCharactersPromise(currentPage)
            .then(res => {
                    dispatch({ type: "addCharacters", payload: [...res.data.results] })

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
        if (type === 'previous') {
            if (currentPage > 1) {
                dispatch({ type: "previousPage"})
            }
        } else {
            dispatch({ type: "nextPage"})
        }
    }
     
    const buildColumns = (colPos) => {
        const MAX_COLUMNS = 3; 
        let newCardsArray = Array(MAX_COLUMNS).fill([]);

         return newCardsArray.map((Card, offset) => 
                    [...Card,
                    <Col xs={12} md={4} key={offset}>
                        <CharacterCard row={currentPage-1} col={offset+colPos} />
                    </Col>]
                )
    }

    return (
        !loading && maxPageLoaded >= currentPage 
        ?
        <>
        <Container fluid>
            <Row>{buildColumns(0)}</Row>
            <Row>{buildColumns(3)}</Row>
            <Row>{buildColumns(6)}</Row>
        </Container>
        <div className='main-container__buttons'>
            <Button variant="primary" size="lg"  onClick={() => handleClick('previous')}>Previous</Button>
            <Button variant="primary" size="lg" onClick={() => handleClick('next')}>Next</Button>
        </div>
        </>
        : <div className='main-container__loading'>
            <Spinner animation="border" variant="primary" />
            <h1>Loading more characters...</h1>
        </div>
    )
}

export default MainContainer;
