import React from 'react'
import icon from '../../assets/kopi.png';
import styled from 'styled-components';

function Icon() {

    const Icon = styled.img`
    border-radius: 50%;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    `
    return (
        <>
            <Icon src={icon} />
        </>
    )
}

export default Icon