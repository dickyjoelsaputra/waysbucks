import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
    border-radius: 10px;
    
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
                            <Col md={3} className='my-3'>
                                <Link to={"/detail-product/" + Products.name + "/" + Products.price + "/"} className='text-decoration-none'>
                                    <WrapTambahan>
                                        <Card bg="danger bg-opacity-25" style={{ width: "250px" }}>
                                            <Card.Img variant="top" src={Products.image} style={{ height: "300px", objectFit: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title>
                                                    <CardTitle>
                                                        {Products.name}
                                                    </CardTitle>
                                                </Card.Title>
                                                <Card.Text>
                                                    <CardPrice>
                                                        Rp. {Products.price}
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
