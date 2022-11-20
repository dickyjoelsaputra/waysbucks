// Core
import React from 'react'
import styled from 'styled-components'
import Navibar from '../components/Navibar'
import Jumbotron from '../components/partials/Jumbotron'
import Cardlist from '../components/partials/Cardlist'

export default function Main() {

    let FindData = localStorage.getItem('PRODUCT_DATA')
    let data = JSON.parse(FindData)

    const Con = styled.div`
    margin: 0 10%;`

    return (
        <>
            <Navibar />
            <Con>
                <Jumbotron />
                <Cardlist data={data} />
            </Con>
        </>
    )
}
