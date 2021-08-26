import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'; 
import Card from './character-card/CharacterCard';

const MainContainer = (props) => {

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[0].name}
                        films={props.data[0].films.length}
                        birthyear={props.data[0].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[1].name}
                        films={props.data[1].films.length}
                        birthyear={props.data[1].birth_year}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Card 
                        name={props.data[2].name}
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
    )
}

export default MainContainer;
