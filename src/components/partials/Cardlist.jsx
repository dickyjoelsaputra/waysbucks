import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CleponCoffee from '../../assets/kopi/Clepon Coffe.jpg'
import HanamiLatte from '../../assets/kopi/Hanami Latte.jpg'
import GreenTea from '../../assets/kopi/Ice Coffee Green Tea.jpg'
import PalmSugar from '../../assets/kopi/Ice Coffee Palm Sugar.jpg'
import { Link, useParams } from 'react-router-dom';

export default function Cardlist({ data }) {
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


    console.log(data)
    return (
        <>
            <Badan>
                <Row>
                    {data.map((Products) => {
                        return <>
                            <Col md={3} >
                                <Link to={"/detail-product/" + Products.name + "/" + Products.price + "/"} className='text-decoration-none'>
                                    <WrapTambahan>
                                        <Card bg="danger bg-opacity-25" style={{ width: '100%' }}>
                                            <Card.Img variant="top" src={Products.image} />
                                            <Card.Body>
                                                <Card.Title>
                                                    <CardTitle>
                                                        {Products.name}
                                                    </CardTitle>
                                                </Card.Title>
                                                <Card.Text>
                                                    <CardPrice>
                                                        {Products.price}
                                                    </CardPrice>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </WrapTambahan>
                                </Link>
                            </Col>
                        </>
                    })}
                </Row>
            </Badan>
        </>
    )
}
