import React from 'react'
import cleponcoffe from '../../assets/kopi/Clepon Coffe.jpg'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import styled from 'styled-components'
import qrqode from '../../assets/qr-code 1.png'
import Image from 'react-bootstrap/Image'
import kopilogo from '../../assets/kopi.png'

export default function Transaction() {


    const CardTitle = styled.p`
font-weight: bold;
color: red;
font-size: 1.5em;
margin-top: 40px;
`
    const ImageKanan = styled.img`
    width: 140px;
    border-radius: 15px;
    margin-bottom: 20px;
`
    const Rectangle = styled.div`
    width: fit-content;
    height: fit-content;
    background-color:#F7DADA;
    width: 100%;
    border-radius: 15px;
`
    const RightContentWrapper = styled.div`
margin: 10px;

`
    const RightTitle = styled.p`
    font-size: 17px;
    font-weight: bolder;
    margin-top: 10px;
    margin-bottom: 5px;
    color: red;
`

    const Pee = styled.p`
color: red;
font-size: 13px;

    `

    const Sepan = styled.span`
    font-weight: bold;

    `
    const Topieng = styled.p`
    font-weight: bold;
    font-size: 13px;
    color: #e25555;
    `

    const Pricee = styled.p`
            font-size: 13px;
    color: #b66e6e;
    `
    const TrsKanan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  flex-direction: column;
  
  `

    const Logos = styled.img`
        border-radius: 50%;
        width: 90px;
        margin-bottom: 20px;
    `

    return (
        <>
            <CardTitle>
                My Transaction
            </CardTitle>
            <Rectangle>
                <Row>
                    <Col md={8}>
                        <RightContentWrapper>
                            <Row>
                                <Col md={5}>
                                    <ImageKanan src={cleponcoffe} />
                                </Col>
                                <Col md={7}>
                                    <RightTitle>
                                        Ice Coffe Palm Suggar

                                    </RightTitle>
                                    <Pee><Sepan>Saturday</Sepan>, 5 March 2020</Pee>
                                    <Topieng>
                                        Toping : Billy Berry Boba, Buble Tea Gum

                                    </Topieng>
                                    <Pricee>

                                        Price : Rp.33.000
                                    </Pricee>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={5}>
                                    <ImageKanan src={cleponcoffe} />
                                </Col>
                                <Col md={7}>
                                    <RightTitle>
                                        Ice Coffe Palm Suggar

                                    </RightTitle>
                                    <Pee><Sepan>Saturday</Sepan>, 5 March 2020</Pee>
                                    <Topieng>
                                        Toping : Billy Berry Boba, Buble Tea Gum

                                    </Topieng>
                                    <Pricee>

                                        Price : Rp.33.000
                                    </Pricee>
                                </Col>
                            </Row>
                        </RightContentWrapper>
                    </Col>
                    <Col md={4}>
                        <TrsKanan>
                            <Logos src={kopilogo}></Logos>
                            <Image src={qrqode}></Image>
                        </TrsKanan>
                    </Col>
                </Row>
            </Rectangle>

        </>
    )
}
