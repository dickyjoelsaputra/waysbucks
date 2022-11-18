import React from 'react'
// import styled from 'styled-components'
import Navibar from '../components/Navibar'
import Container from 'react-bootstrap/Container';

export default function Transaction() {
    return (
        <>
            <Navibar />
            <Container className='mt-5'>
                <table className="table table-bordered">
                    <thead className='table-secondary'>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Post Code</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sugeng No Pants</td>
                            <td>Cileungsi</td>
                            <td>16820</td>
                            <td>69.000</td>
                            <td>Waiting Approve</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    )
}
