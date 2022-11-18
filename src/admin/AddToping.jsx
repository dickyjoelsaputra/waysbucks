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

export default function AddToping() {
    const Gambor = styled.img`
        max-width: 100%;
    `
    const [toping, setToping] = useState({ name: "", price: "", image: "" })

    const gambar = toping.image

    let FindData = localStorage.getItem('TOPING_DATA')
    let TopingContent = []

    const submitHandle = (e) => {
        e.preventDefault()

        let data = JSON.parse(FindData)

        if (data == null) {
            TopingContent.push(toping)
            localStorage.setItem("TOPING_DATA", JSON.stringify(TopingContent))
        }
        else {
            data.forEach(element => {
                TopingContent.push(element)
            })
            TopingContent.push(toping)
            localStorage.setItem("TOPING_DATA", JSON.stringify(TopingContent))
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
                                <Form.Label>Toping Name</Form.Label>
                                <div className='border border-danger rounded border-opacity-25' >
                                    <Form.Control type="text" placeholder="Enter Toping Name"
                                        name="name"
                                        onChange={e => setToping({ ...toping, [e.target.name]: e.target.value })}
                                        // onChange={handleChange}
                                        value={toping.name}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <div className='border border-danger rounded border-opacity-25' >
                                    <Form.Control type="text" placeholder="Enter Price"
                                        name="price"
                                        onChange={e => setToping({ ...toping, price: e.target.value })}
                                        value={toping.price}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <div className='border border-danger rounded border-opacity-25' >
                                    <Form.Control type="text" placeholder="Enter Image URL"
                                        name="image"
                                        onChange={e => setToping({ ...toping, image: e.target.value })}
                                        value={toping.image}
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
