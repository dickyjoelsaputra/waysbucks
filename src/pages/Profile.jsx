import React from 'react'
import Navibar from '../components/Navibar'
import styled from 'styled-components'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'

// import ronaldhino from '../assets/ronaldhino.jpg'
import Transaction from '../components/partials/MyTransaction'

const CardTitle = styled.p`
font-weight: bold;
color: red;
font-size: 1.5em;
margin-top: 40px;
`
const Image = styled.img`
  width: 250px;
  object-fit: cover;
  border-radius: 25px;
`

const TextAtas = styled.p`
font-size: 20px;
font-weight: bold;
color:#613D2B;
`
const TextBawah = styled.p`
font-size: 20px;
color:#613D2B;
`

const TextWrapper = styled.div`
margin-bottom:70px;
`

export default function Profile() {

    let DataLogin = localStorage.getItem('DATA_LOGIN')
    let Data = JSON.parse(DataLogin)

    return (
        <>

            <Navibar />
            <Container>
                <Row>
                    <Col md={6}>
                        <CardTitle>
                            My Profile
                        </CardTitle>
                        <Row>
                            <Col md={6}>
                                <Image src={Data[0].image} />
                            </Col>
                            <Col md={6}>
                                <TextWrapper>
                                    <TextAtas>
                                        Full Name
                                    </TextAtas>
                                    <TextBawah>
                                        {Data[0].username}
                                    </TextBawah>
                                </TextWrapper>

                                <TextWrapper>
                                    <TextAtas>
                                        Email
                                    </TextAtas>
                                    <TextBawah>
                                        {Data[0].email}
                                    </TextBawah>
                                </TextWrapper>
                            </Col>

                            <TextWrapper>

                            </TextWrapper>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Transaction />
                    </Col>
                </Row>
            </Container >
        </>
    )
}
