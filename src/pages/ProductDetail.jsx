import React, { createContext, useEffect } from 'react'
import Navibar from '../components/Navibar'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import styled from 'styled-components'
// import { Toping } from '../data/dummyTopping'
import buttonceklis from '../assets/buttonceklis.png'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';

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
        position:relative;
        `
    const GambarToping = styled.img`
        border-radius: 50%;
        height: 100px;
        width: 100px;
        display:inline-block;
        vertical-align:middle;
        margin-right:10px;
        margin-top: 10px;
    /* ${Wrapper}:hover & {
        transform: rotate(360deg);
        transition-duration:30s;
    } */
            `
    const Badge = styled.img`
        position: absolute;
        z-index: 1;
        right:20%;
        box-shadow: 2px 2px 2px 2px black;
        border-radius: 50%;
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
        padding: 10px 262px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
    `
    const navigate = useNavigate();

    let { name, price } = useParams();

    // const imago = "[" + image + "]"

    let FindData = localStorage.getItem('PRODUCT_DATA')
    let product_data = JSON.parse(FindData)

    let FindDataa = localStorage.getItem('TOPING_DATA')
    let toping_data = JSON.parse(FindDataa)

    const [Topieng, setTopieng] = useState([])
    const [TopiengHarga, setTopiengHarga] = useState([0])

    const handleCeklis = (element, price) => {

        let filtered = Topieng.filter(e => e === element)

        if (filtered[0] !== element) {
            // pas di klik
            setTopieng([...Topieng, element])
            setTopiengHarga([Number(...TopiengHarga) + Number(price)])
        } else {
            // pas di gak klik
            setTopieng(Topieng.filter(e => e !== element))
            setTopiengHarga([Number(...TopiengHarga) - Number(price)])
        }

    }

    let MapToping = TopiengHarga.map(Number);
    let ReduceHarga = MapToping.reduce((a, b) => {
        return a + b;
    });
    const totalharga = ReduceHarga + Number(price)

    let DataLogin = localStorage.getItem('DATA_LOGIN')
    let IsLogin = JSON.parse(DataLogin)
    const email = IsLogin[0].email

    // const ProductGambar = product_data.map((element) => {
    //     if (element.name === name) {
    //         console.log(element.image)
    //         return element.image
    //     }
    // })

    // const gambar = ProductGambar[0]

    const CurrentDataTransaction = { name, Topieng, totalharga, email }
    const ArrKosong = []

    const myCart = () => {
        let transdata = localStorage.getItem('TRANSACTION_DATA')
        let data = JSON.parse(transdata)
        console.log("berhasil")

        if (data == null) {
            ArrKosong.push(CurrentDataTransaction)
            localStorage.setItem("TRANSACTION_DATA", JSON.stringify(ArrKosong))
        }
        else {
            data.forEach(element => {
                ArrKosong.push(element)
            })
            ArrKosong.push(CurrentDataTransaction)
            localStorage.setItem("TRANSACTION_DATA", JSON.stringify(ArrKosong))
            navigate("/detail-product/" + name + "/" + price)
        }
    }



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
                                    // const ProductHargaContext = createContext(element.price)
                                    return (
                                        <>
                                            <Detail>{name}</Detail>
                                            <HargaItem >Rp. {price}</HargaItem>
                                        </>
                                    )
                                }
                            })}

                            <Toto>Toping</Toto>

                            <Row>
                                {toping_data.map((element) => {
                                    return <>
                                        <Col md={3}>
                                            <Wraper onClick={() => handleCeklis(element.name, element.price)}>
                                                {

                                                    Topieng.filter(e => e === element.name)[0]
                                                        ?
                                                        <Badge src={buttonceklis} />
                                                        :
                                                        <Badge className='d-none' src={buttonceklis} />
                                                }
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
                                <Toto>Rp. {totalharga}</Toto>
                            </div>

                            <div class="d-grid gap-2">
                                <Buton
                                    onClick={myCart}
                                >Add To Chart</Buton>
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
