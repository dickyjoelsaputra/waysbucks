import React, { useEffect } from 'react'
import Navibar from '../components/Navibar'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import styled from 'styled-components'
// import { Toping } from '../data/dummyTopping'
import buttonceklis from '../assets/buttonceklis.png'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

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
        /* height: 500px; */
        box-shadow: 4px 4px 4px black;
        border-radius: 5%;
        max-width: 100%;
    `

    const Toto = styled.p`
        font-size: 25px;
        color: #974A4A;
        font-weight: bold;
        margin-top:30px;
        `
    const Wraper = styled.div`
        cursor: pointer;
        text-align: center;
        `
    const GambarToping = styled.img`
        border-radius: 50%;
        height: 100px;
        width: 100px;
        display:inline-block;
        vertical-align:middle;
        margin-right:10px;


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
    let { name } = useParams();

    // const imago = "[" + image + "]"

    let FindData = localStorage.getItem('PRODUCT_DATA')
    let product_data = JSON.parse(FindData)


    let FindDataa = localStorage.getItem('TOPING_DATA')
    let toping_data = JSON.parse(FindDataa)
    // data.forEach(element => {
    //     if (element.name == name) {
    //         console.log(element)
    //         console.log(element.image)
    //     }
    // }
    // )

    // let [datak] = data.map((element) => {
    //     if (element.name === name) {
    //         return (
    //             [element.name, element.price, element.image]
    //         )

    //     }
    // })
    // destructuring ES6
    // let [namek, pricek, imagek] = [datak[0], datak[1], datak[2]];

    // Handle Onclick


    const [conBadge, setShowBadge] = useState("")


    // Component Did Mount
    useEffect(
        () => {
            // console.log("start")
            console.log(conBadge)
            // Componenet Did Unmount
            return () => {

            };
        },
        // Component Did Update
        [conBadge]
    )

    return (
        <>
            <Navibar />
            <Container>
                <Wrapper>
                    <Row>
                        {product_data.map((element) => {
                            if (element.name === name) {
                                return (
                                    <>
                                        <Col md={5}>
                                            <Gambar src={element.image} />
                                        </Col>
                                    </>
                                )
                            }
                        })}

                        <Col md={7}>
                            {product_data.map((element) => {
                                if (element.name === name) {
                                    return (
                                        <>
                                            <Detail>{element.name}</Detail>
                                            <HargaItem>{element.price}</HargaItem>
                                        </>
                                    )
                                }
                            })}

                            <Toto>Toping</Toto>

                            <Row>
                                {toping_data.map((element) => {
                                    return <>
                                        <Col md={3}>
                                            <Wraper onClick={() => {
                                                setShowBadge(element.name)
                                            }}>
                                                <Badge src={buttonceklis} />
                                                <GambarToping src={element.image} />
                                                <NamaToping>{element.name}</NamaToping>
                                                <HargaToping>Rp. {element.price}</HargaToping>
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

            {/* {
                data.forEach(element => {
                    console.log(element)
                    element.name === namek ?
                        <>
                            <p>TITITITIDDDDDDD</p>
                        </>
                        :
                        <>
                            <p>AAAAAAAAAAAAAAAA</p>
                        </>
                })


            } */}
        </>
    )
}
