import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'; 
import CharacterCard from '../character-card/CharacterCard';


import { getCharactersPromise } from '../../api/index'

import './MainContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    const [loading, setLoading] = useState(false);
    const [totalCharacters, setTotalCharacters] = useState(Number.MAX_SAFE_INTEGER);
    // Redux
    const storeStatus = useSelector(state => state);
    const {
        currentPage,
        pagesLoaded,
        reloadPage,
        characters
    } = storeStatus;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {        
            await getCharactersPromise(currentPage)
            .then(res => {
                if(res.status === 200){
                    setLoading(true);
                    setTotalCharacters(res.data.count);
                    dispatch({ type: "addCharacters", payload: res.data.results });
                    dispatch({ type: "setPagesLoaded", payload: pagesLoaded+1 });
                    setLoading(false);
                }
            })
            .catch(error => console.log(error))
        }

        if ((currentPage > pagesLoaded) && reloadPage){
            if (characters.length < totalCharacters) 
                fetch();   
        }

        if (!reloadPage){
            setLoading(false);
        }

      }, [currentPage, dispatch, pagesLoaded, reloadPage])
     
    const buildColumns = (initialColumnPosition) => {
        const MAX_COLUMNS = 3;
        const MAX_CARDS = 9; 
        let newCardsArray = Array(MAX_COLUMNS).fill([]);
       
         return newCardsArray.map((Card, offset) => {
            const index = ((currentPage-1) * MAX_CARDS) + (initialColumnPosition + offset);
            return ( index < totalCharacters &&
                [...Card,
                    <Col xs={12} md={4} key={offset}>
                        <CharacterCard id={index+1}/>
                    </Col>
                ]
            )
            }
         )
    }

    const handleClick = (type) => {
        if (type === 'Previous') {
            dispatch({ type: "previousPage"});
        } else {
            dispatch({type: 'setReloadPage', payload: true});
            dispatch({ type: "nextPage"});
        }
    }

    const _renderBoton = (action) => {
        if((action === 'Next') && (pagesLoaded < currentPage)) 
            return <Button variant="primary" size="lg" disabled>Next</Button>
        if((action === 'Previous') && (currentPage === 1)) 
            return <Button variant="primary" size="lg" disabled>Previous</Button>
        
        return <Button variant="primary" size="lg" onClick={() => handleClick(action)}>{action}</Button>
    }

    return (
        !loading && (pagesLoaded >= currentPage || characters.length >= totalCharacters)
        ?
            <>
            <Container fluid>
                <Row>{buildColumns(0)}</Row>
                <Row>{buildColumns(3)}</Row>
                <Row>{buildColumns(6)}</Row>
            </Container>
            <div className='main-container__buttons'>
                {_renderBoton('Previous')}
                {_renderBoton('Next')}
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
