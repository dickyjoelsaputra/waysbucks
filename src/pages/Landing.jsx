// Core
import React from 'react'
import styled from 'styled-components'
import Navibar from '../components/Navibar'
import Jumbotron from '../components/partials/Jumbotron'
import Cardlist from '../components/partials/Cardlist'

export default function Main() {

    const Con = styled.div`
    margin: 0 10%;`

    let FindData = localStorage.getItem('PRODUCT_DATA')
    let data = JSON.parse(FindData)

    // let u = localStorage.getItem('USER_DATA')
    // Session nya disini
    let DataLogin = localStorage.getItem('DATA_LOGIN')
    let IsLogin = JSON.parse(DataLogin)

    return (
        <>
            <Navibar />
            <Con>
                <Jumbotron />
                {IsLogin.length > 0 ?
                    <>
                        <Cardlist data={data} />
                    </> :
                    <>
                    </>}
            </Con>
        </>
    )
}
