import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'; 
import CharacterCard from '../character-card/CharacterCard';


import { getCharactersPromise } from '../../api/index'

import './MainContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    const [loading, setLoading] = useState(false);
    // Redux
    const storeStatus = useSelector(state => state);
    const {
        currentPage,
        pagesLoaded,
        reloadPage
    } = storeStatus;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {        
            await getCharactersPromise(currentPage)
            .then(res => {
                    dispatch({ type: "addCharacters", payload: res.data.results })
                    dispatch({ type: "setPagesLoaded", payload: pagesLoaded+1 })

                    setLoading(false);
                }
            )
            .catch(error => console.log(error))
        }

        if ((currentPage > pagesLoaded) && reloadPage){
            setLoading(true);
            fetch();   
        }

        if (!reloadPage){
            setLoading(false);
        }

      }, [currentPage, dispatch, pagesLoaded, reloadPage])

    const handleClick = (type) => {
        if (type === 'previous') {
            if (currentPage > 1) {
                dispatch({ type: "previousPage"})
            }
        } else {
            dispatch({type: 'setReloadPage', payload: true})
            dispatch({ type: "nextPage"})
        }
    }
     
    const buildColumns = (colPos) => {
        const MAX_COLUMNS = 3; 
        let newCardsArray = Array(MAX_COLUMNS).fill([]);
       
         return newCardsArray.map((Card, offset) => {
            const index = ((currentPage-1)*9)+(offset+colPos);
            console.log('index: ', index);
            return (
                [...Card,
                    <Col xs={12} md={4} key={offset}>
                        <CharacterCard id={index+1}/>
                    </Col>
                ]
            )
            }
         )
    }

    return (
        !loading && pagesLoaded >= currentPage 
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
        : 
            <div className='main-container__loading'>
                <Spinner animation="border" variant="primary" />
                <h1>Loading Characters...</h1>
            </div>
    )
}

export default MainContainer;
