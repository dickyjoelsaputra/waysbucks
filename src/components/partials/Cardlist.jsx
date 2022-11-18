import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CleponCoffee from '../../assets/kopi/Clepon Coffe.jpg'
import HanamiLatte from '../../assets/kopi/Hanami Latte.jpg'
import GreenTea from '../../assets/kopi/Ice Coffee Green Tea.jpg'
import PalmSugar from '../../assets/kopi/Ice Coffee Palm Sugar.jpg'
import { Link } from 'react-router-dom';

export default function Cardlist() {
    const Badan = styled.div`
    margin : 5% 0px;
    `
    const CardTitle = styled.p`
    font-weight: bold;
    color: red;
    font-size: 0.9em;
    `
    const WrapTambahan = styled.div`
    cursor: pointer;
    `

    const CardPrice = styled.div`
    color:#974A4A;
    `



    return (
        <>
            <Badan>
                <Row>
                    <Col>
                        <Link to="/product-detail" className='text-decoration-none'>
                            <WrapTambahan>
                                <Card bg="danger bg-opacity-25" style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={CleponCoffee} />
                                    <Card.Body>
                                        <Card.Title>
                                            <CardTitle>
                                                Ice Coffee Palm Sugar
                                            </CardTitle>
                                        </Card.Title>
                                        <Card.Text>
                                            <CardPrice>
                                                Rp.20.000
                                            </CardPrice>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </WrapTambahan>
                        </Link>
                    </Col>

                    <Col>
                        <WrapTambahan>
                            <Card bg="danger bg-opacity-25" style={{ width: '100%' }}>
                                <Card.Img variant="top" src={HanamiLatte} />
                                <Card.Body>
                                    <Card.Title>
                                        <CardTitle>
                                            Ice Coffee Green Tea
                                        </CardTitle>
                                    </Card.Title>
                                    <Card.Text>
                                        Rp.15.000
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </WrapTambahan>
                    </Col>

                    <Col>
                        <WrapTambahan>
                            <Card bg="danger bg-opacity-25" style={{ width: '100%' }}>
                                <Card.Img variant="top" src={GreenTea} />
                                <Card.Body>
                                    <Card.Title>
                                        <CardTitle>
                                            Hanami Latte
                                        </CardTitle>
                                    </Card.Title>
                                    <Card.Text>
                                        Rp.25.000
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </WrapTambahan>
                    </Col>

                    <Col>
                        <WrapTambahan>
                            <Card bg="danger bg-opacity-25" style={{ width: '100%' }}>
                                <Card.Img variant="top" src={PalmSugar} />
                                <Card.Body>
                                    <Card.Title>
                                        <CardTitle>
                                            Clepon Coffee
                                        </CardTitle>
                                    </Card.Title>
                                    <Card.Text>
                                        Rp.20.000
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </WrapTambahan>
                    </Col>
                </Row>
            </Badan>
        </>
    )
}
