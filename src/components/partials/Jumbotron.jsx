import React from 'react'
import styled from 'styled-components'
import JumboRectangle from '../../assets/jumborect.jpg'
import JumboImage from '../../assets/spongebob.jpg'

export default function Jumbotron() {
    const Backg = styled.img`
    position: static;
    margin-bottom: -290px;
    `
    const Title = styled.h1`
    font-weight: 900;
    color: white;
    position: absolute;
    top: -50px;
    `
    const Imagess = styled.img`
    position: relative;
    top: -65px;
    left: 645px;
    z-index: 1;
    width: 450px;
    `
    const Cardtext = styled.div`
        position: relative;
        top: 100px;
        left:50px;
        margin-top: 35px;
    `
    const Textss = styled.h5`
    position: absolute;
    margin-top: 10px;
    color: white;
    top: 20px;
    `
    const Textp = styled.p`
    position: absolute;
    margin-top: 10px;
    color: white;
    top: 80px;
    `
    const Textb = styled.p`
    position: absolute;
    margin-top: 10px;
    color: white;
    top: 220px;
`
    return (
        <>
            <Cardtext>
                <Title>WAYSBUCKS</Title>
                <Textss>Things are changing, but we’re still here for you</Textss>
                <Textp>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Tempore, velit optio culpa obcaecati facere quo neque ut vero <br />
                    libero dicta commodi beatae pariatur possimus molestiae dolore c <br />
                    upiditate consequuntur quae magnam!
                </Textp>
                <Textb>
                    findout more at...
                </Textb>
            </Cardtext>
            <Backg src={JumboRectangle}></Backg>
            <Imagess src={JumboImage}></Imagess>
        </>
    )
}
