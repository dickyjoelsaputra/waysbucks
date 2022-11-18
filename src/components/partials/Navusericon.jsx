import React from 'react'
import styled from 'styled-components'
// import { redirect } from "react-router-dom";
// import UserIcon from '../../assets/img_avatar.png'
import DropDownIconProfile from '../../assets/profileicon.png'
import DropDownIconLogout from '../../assets/logouticon.png'

export default function Navusericon({ Logout, UserImage }) {

    const Icon = styled.img`
    border-radius: 50%;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    cursor: pointer;
    `
    const Dropdownicon = styled.img`
        width: 20px;
        margin-right: 15%;
    `

    return (
        <>
            <div className="dropdown">
                <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Icon src={UserImage} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                        <a className="dropdown-item" href="/profile">
                            <Dropdownicon src={DropDownIconProfile} />
                            Profile
                        </a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                        <a className="dropdown-item" href="/#"
                            onClick={Logout}
                        >
                            <Dropdownicon src={DropDownIconLogout} />
                            Logout
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )


}