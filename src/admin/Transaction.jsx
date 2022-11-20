import React from 'react'
// import styled from 'styled-components'
import Navibar from '../components/Navibar'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import success from '../assets/success.png'
import cancle from '../assets/cancle.png'

export default function Transaction() {

    const IconStatus = styled.img`
    position: relative;
    left: 45%;
    `
    const Wraple = styled.div`
    width: 210px;
    display: flex;
    text-align: center;
    
    `

    const Cancle = styled.div`
        background-color: #FF0742;
        padding: 3px 30px;
        margin: 0px 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px black;
        cursor: pointer;
    `
    const Approve = styled.div`
        background-color: #0ACF83;
        padding: 3px 30px;
        margin: 0px 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px black;
        cursor: pointer;
    `

    const IncomeColor = styled.p`
        color:#061E99;
    `

    const SWaiting = styled.p`
        color:#FF9900;
    `
    const SSucces = styled.p`
        color:#78A85A;
    `

    const SCancle = styled.p`
        color:#E83939;
    `
    const SOtw = styled.p`
        color: #00D1FF;
    `


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
                            <td><IncomeColor>69.000</IncomeColor></td>
                            <td><SWaiting>Waiting Approve</SWaiting></td>
                            <td>
                                <Wraple>
                                    <Cancle>Cancle</Cancle>
                                    <Approve>Approve</Approve>
                                </Wraple>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Aryo</td>
                            <td>Bandung</td>
                            <td>32456</td>
                            <td><IncomeColor>78.000</IncomeColor></td>
                            <td><SSucces>Succes</SSucces></td>
                            <td><IconStatus src={success} /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Maestro</td>
                            <td>Medan</td>
                            <td>11156</td>
                            <td><IncomeColor>45.000</IncomeColor></td>
                            <td><SCancle>Cancle</SCancle></td>
                            <td><IconStatus src={cancle} /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mayonaise</td>
                            <td>Papua</td>
                            <td>11156</td>
                            <td><IncomeColor>20.000</IncomeColor></td>
                            <td><SOtw>On The Way</SOtw></td>
                            <td><IconStatus src={success} /></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    )
}
