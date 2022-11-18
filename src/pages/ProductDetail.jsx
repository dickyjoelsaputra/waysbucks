import React, { useState } from 'react'
import Navibar from '../components/Navibar'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import styled from 'styled-components'
import cleponcoffe from '../assets/kopi/Clepon Coffe.jpg'
import { Toping } from '../data/dummyTopping'
import buttonceklis from '../assets/buttonceklis.png'

export default function ProductDetail() {

    const Wrapper = styled.div`
        margin-top: 30px;
        margin-bottom: 50px;
        `
    const Detail = styled.p`
    color: #BD0707;
        font-weight: bolder;
        font-size: 40px;
    `
    const HargaItem = styled.p`
        font-size: 20px;
        color:#974A4A;
    `
    const Gambar = styled.img`
        height: 500px;
        box-shadow: 4px 4px 4px black;
        border-radius: 5%;
    `

    const Toto = styled.p`
        font-size: 25px;
        color: #974A4A;
        font-weight: bold;
        margin-top:30px;
        `
    const Wraper = styled.div`
        text-align: center;
        cursor: pointer;
        &:hover{
            box-shadow: 4px 4px 10px 4px #974A4A;
        }
            `
    const GambarToping = styled.img`
        height: 85px;

    ${Wrapper}:hover & {
        transform: rotate(360deg);
        transition-duration:30s;
    }
            `

    const HargaToping = styled.p`
        color: #BD0707;
        `
    const NamaToping = styled.p`
        color: #BD0707;
        margin-bottom: 0px;
        font-size: 20px;
        `
    const Buton = styled.button`          
        background-color: #BD0707; /* Green */
        border: none;
        color: white;
        padding: 10px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
    `
    const Badge = styled.img`
    position: relative;
    font-size: 0.8em;
    background:green;
    border-radius: 30px;
    color:white;
    z-index: 1;
    left: 90px;
    bottom: 30px;
    
    `

    return (
        <>
            <Navibar />

            <Container>
                <Wrapper>
                    <Row>
                        <Col md={5}>
                            <Gambar src={cleponcoffe} />
                        </Col>
                        <Col md={7}>
                            <Detail>Ice Coffee Palm Sugar</Detail>
                            <HargaItem>Rp.12.000</HargaItem>

                            <Toto>Toping</Toto>

                            <Row>
                                {Toping.map((Topieng) => {
                                    return <>
                                        <Col md={3}>
                                            <Wraper onClick={() => { console.log(Topieng.Nama) }}>
                                                <Badge src={buttonceklis} />
                                                <GambarToping src={Topieng.Gambar} />
                                                <NamaToping>{Topieng.Nama}</NamaToping>
                                                <HargaToping>Rp. {Topieng.Harga}</HargaToping>
                                            </Wraper>
                                        </Col>
                                    </>
                                })}
                            </Row>
                            <div className='d-flex justify-content-between'>
                                <Toto>Total</Toto>
                                <Toto>Rp. 27000</Toto>
                            </div>

                            <div class="d-grid gap-2">
                                <Buton>Add To Chart</Buton>
                            </div>
                        </Col>
                    </Row>
                </Wrapper >
            </Container >
        </>
    )
}
