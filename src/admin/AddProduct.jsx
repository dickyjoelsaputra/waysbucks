import React from 'react'
import { useState } from 'react';
// import styled from 'styled-components'
import Navibar from '../components/Navibar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export default function AddProduct() {
    // const Con = styled.div`
    // margin: 20px 10%;`

    const Gambor = styled.img`
        max-width: 100%;
    `

    //  onChange={e => setProduct({ ...product, name: e.target.value })}
    // value = { product.name }

    // function handleChange(e) {
    //     setProduct({
    //         ...product, [e.target.name]: e.target.value
    //     })
    //     console.log(product)
    // }

    const [product, setProduct] = useState({ name: "", price: "", image: "" })

    const gambar = product.image

    let FindData = localStorage.getItem('PRODUCT_DATA')
    let ProductContent = []

    const submitHandle = (e) => {
        e.preventDefault()

        let data = JSON.parse(FindData)

        if (data == null) {
            ProductContent.push(product)
            localStorage.setItem("PRODUCT_DATA", JSON.stringify(ProductContent))
        }
        else {
            data.forEach(element => {
                ProductContent.push(element)
            })
            ProductContent.push(product)
            localStorage.setItem("PRODUCT_DATA", JSON.stringify(ProductContent))
        }
    }

    return (
        <>
            <Navibar />
            <Container className='mt-5'>
                <Row>
                    <Col md="7">
                        <Form onSubmit={submitHandle}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Name</Form.Label>
                                <div className='border border-danger rounded border-opacity-25' >
                                    <Form.Control type="text" placeholder="Enter Product Name"
                                        name="name"
                                        onChange={e => setProduct({ ...product, [e.target.name]: e.target.value })}
                                        // onChange={handleChange}
                                        value={product.name}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <div className='border border-danger rounded border-opacity-25' >
                                    <Form.Control type="text" placeholder="Enter Price"
                                        name="price"
                                        onChange={e => setProduct({ ...product, price: e.target.value })}
                                        value={product.price}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <div className='border border-danger rounded border-opacity-25' >
                                    <Form.Control type="text" placeholder="Enter Image URL"
                                        name="image"
                                        onChange={e => setProduct({ ...product, image: e.target.value })}
                                        value={product.image}
                                    />
                                </div>
                            </Form.Group>

                            <div className="d-grid gap-2 my-4">
                                <Button variant="danger" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md="5">
                        <Gambor src={gambar} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
