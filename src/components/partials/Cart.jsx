import React from 'react'
import Keranjangs from '../../assets/Keranjang.png'
import styled from 'styled-components'

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
    return (
        <>
            <BadgeWrapper>
                <a href="/#">
                    <Badge>10</Badge>
                    <Keranjang src={Keranjangs} />
                </a>
            </BadgeWrapper>


        </>
    )
}

