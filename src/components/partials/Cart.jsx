import React from 'react'
import Keranjangs from '../../assets/Keranjang.png'
import styled from 'styled-components'
import { useContext } from 'react'

const Keranjang = styled.img`
    margin-right: 3px;
`
const Badge = styled.span`
    position: absolute;
    font-size: 0.8em;
    right:-20px;
    top:-6px;
    background:red;
    text-align: center;
    border-radius: 30px;
    color:white;
    padding:3px 10px;
`
const BadgeWrapper = styled.div`
    position:relative;
    display:inline-block;
    margin-right: 40px;
`

export default function Cart() {
    const a = localStorage.getItem('DATA_LOGIN')
    const IsLogin = JSON.parse(a)
    const s = localStorage.getItem('TRANSACTION_DATA')
    const TransactionData = JSON.parse(s)

    const data = TransactionData.map((e) => {
        if (IsLogin[0].email === e.email) {
            return e.name
        }
    })


    return (
        <>

            <BadgeWrapper>
                <a href="/mycart">
                    {
                        TransactionData.map((e) => {
                            return <>
                                {IsLogin[0].email === e.email ?
                                    <>
                                        <Badge>{data.length}</Badge>
                                    </> : <>
                                        <Badge>0</Badge>
                                    </>
                                }
                            </>
                        })}
                    <Keranjang src={Keranjangs} />
                </a>
            </BadgeWrapper>


        </>
    )
}

