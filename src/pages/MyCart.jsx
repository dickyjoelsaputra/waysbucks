import React from 'react'
import Navibar from '../components/Navibar'
import styled from 'styled-components'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import Stack from 'react-bootstrap/esm/Stack'
import AttachImg from "../assets/AttachImg.png"
import TempatSampah from "../assets/tempatsampah.png"


// import ronaldhino from '../assets/ronaldhino.jpg'
// import Transaction from '../components/partials/MyTransaction'

const CardTitle = styled.p`
font-weight: bold;
color: #BD0707;
font-size: 2em;
margin-top: 40px;
`
const Image = styled.img`
  width: 250px;
  object-fit: cover;
`

const Wrapper = styled.div`

`
const IconSampah = styled.img`

`

const ImageKiri = styled.img`
    width: 100%;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
`

export default function MyCart() {
    const a = localStorage.getItem('DATA_LOGIN')
    const IsLogin = JSON.parse(a)
    const s = localStorage.getItem('TRANSACTION_DATA')
    const TransactionData = JSON.parse(s)
    const p = localStorage.getItem('PRODUCT_DATA')
    const ProductData = JSON.parse(p)

    console.log(IsLogin)
    console.log(TransactionData)

    const qlt = TransactionData.map((e) => {
        if (IsLogin[0].email === e.email) {
            return e.name
        }
    }).length

    const ttlhrg = TransactionData.map((e) => {
        if (IsLogin[0].email === e.email) {
            return e.totalharga
        }
    })
    // const location = useLocation();
    const TotalHargas = ttlhrg.reduce((a, b) => {
        return a + b;
    });

    return (
        <>
            <Navibar />
            <Container>
                <CardTitle>
                    My Cart
                </CardTitle>
                <Row>
                    <h5 className='text-danger'>Review your order</h5>
                    <hr />
                    <Col md={7} className=''>
                        {
                            TransactionData.map((e) => {
                                return <>
                                    {IsLogin[0].email === e.email ?
                                        <>
                                            <Wrapper>
                                                <Row className='my-3'>
                                                    <Col md={3}>
                                                        {
                                                            ProductData.map((s) => {
                                                                return <>
                                                                    {s.name === e.name ?
                                                                        <>
                                                                            < ImageKiri src={s.image} />
                                                                        </> : <>

                                                                        </>
                                                                    }
                                                                </>
                                                            })
                                                        }

                                                    </Col>
                                                    <Col md={6} className='my-auto'>
                                                        <p className='h4 bolder text-danger'>{e.name}</p>
                                                        <p><b className='text-danger'>Toping : </b>{e.Topieng.map(element => {
                                                            // element.join(",")
                                                            return <>
                                                                <span className='text-danger'> {element}</span>
                                                            </>
                                                        })}
                                                        </p>
                                                    </Col>
                                                    <Col md={3} className='my-auto'>
                                                        <p className='text-danger text-end'>{e.totalharga}</p>
                                                        <IconSampah className='float-end' src={TempatSampah} />
                                                    </Col>
                                                </Row>
                                            </Wrapper>
                                        </> : <>

                                        </>}
                                </>
                            })}
                        <Row>
                            <Col>
                                <hr />
                                <Stack direction="vertical">
                                    <Stack direction="horizontal">
                                        <p>Subtotal</p>
                                        <p className="ms-auto">
                                            {
                                                TotalHargas
                                            }
                                        </p>
                                    </Stack>
                                    <Stack direction="horizontal">
                                        <p>Qty</p>
                                        <p className="ms-auto">{qlt}</p>
                                    </Stack>
                                    <hr />
                                    <Stack direction="horizontal">
                                        <p>Total</p>
                                        <p className="ms-auto">
                                            {
                                                TotalHargas
                                            }
                                        </p>
                                    </Stack>
                                </Stack>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center">
                                <div className="d-flex flex-column justify-content-center">
                                    <Form.Label
                                        className="btn d-flex flex-column justify-content-center"
                                        style={{
                                            backgroundColor: "#FFF3F7",
                                            color: "#bd0707",
                                            borderColor: "#bd0707",
                                            height: "150px",
                                            borderWidth: "3px",
                                        }}
                                    >
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>
                                                <Image style={{ width: '30px' }} src={AttachImg} />
                                            </div>
                                            Atache of Transaction
                                        </div>
                                        <Form.Control
                                            type="file"
                                            style={{
                                                width: "100%",
                                                borderColor: "#bd0707",
                                                borderWidth: "3px",
                                                backgroundColor: "#FFF3F7",
                                            }}
                                            hidden
                                        />
                                    </Form.Label>
                                </div>
                            </Col>
                        </Row>


                    </Col>
                    {/* <Col md={1}></Col> */}
                    <Col md={5}>
                        <Form>
                            <Form.Group className="my-4" >
                                <div className='border border-danger rounded' >
                                    <Form.Control type="text" placeholder="Name"
                                        name="name"
                                    // onChange={handleChange}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="my-4">
                                <div className='border border-danger rounded' >
                                    <Form.Control type="text" placeholder="Email"
                                        name="email"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="my-4">
                                <div className='border border-danger rounded' >
                                    <Form.Control type="text" placeholder="Phone"
                                        name="phone"
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="my-4">
                                <div className='border border-danger rounded' >
                                    <Form.Control type="text" placeholder="Post Code"
                                        name="postcode"
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="my-4">
                                <div className='border border-danger rounded' >
                                    <Form.Control type="textarea" placeholder="Address"
                                        name="address"
                                    />
                                </div>
                            </Form.Group>

                            <div className="d-grid gap-2 my-4">
                                <Button variant="danger" type="submit">
                                    Pay
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row >
            </Container >
        </>
    )
}
