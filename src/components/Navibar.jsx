// Core
import React from 'react'
import { useState } from 'react';
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// AuthForm
import LoginForm from './auth/LoginForm'
import RegisterForm from './auth/RegisterForm'

// Boostrap
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navusericon from './partials/Navusericon';

// Asset
// import { dummyUser } from '../data/dummyUser';

// Component Used
import Cart from './partials/Cart'
import Icon from './partials/Icon';
import Navadminicon from '../admin/Navadminicon';

export default function Navibar() {
    // handle register with usestate and props
    const [showRegister, setRegisterShow] = useState(false);

    const handleRegisterClose = () => setRegisterShow(false);
    const handleRegisterShow = () => setRegisterShow(true);

    // login login with usetatse and props

    const [showLogin, setLoginShow] = useState(false);

    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    // const [isLogin, setIsLogin] = useState(false)

    // data user
    // const [user, setUserStatus] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     image: "",
    // })

    // error handling
    // const [error, setError] = useState("")

    // handle login
    // Data untuk user
    let FindData = localStorage.getItem('USER_DATA')
    // Session nya disini
    let DataLogin = localStorage.getItem('DATA_LOGIN')
    let IsLogin = JSON.parse(DataLogin)
    // console.log(typeof (DataLogin.email))
    const arr = []

    const Login = (user) => {
        // parse untuk data session
        let DataParse = JSON.parse(FindData)

        console.log(DataParse)

        DataParse.forEach(element => {
            if (user.email === element.email && user.password === element.password) {
                console.log("Log In")
                // setUserStatus({
                //     email: user.email,
                //     password: user.password,
                //     username: element.username,
                //     image: element.image,
                // })
                arr.push(element)
                localStorage.setItem("DATA_LOGIN", JSON.stringify(arr))
            } else {
                console.log("Detail Not Match")
            }
        })

        handleLoginClose()
    }

    // handle logout
    const navigate = useNavigate();

    const Logout = () => {
        console.log("Logout")
        // setUserStatus({
        //     username: "",
        //     email: "",
        //     password: "",
        //     image: "",
        // })
        let pushing = JSON.parse(DataLogin)
        pushing.pop()
        localStorage.setItem("DATA_LOGIN", JSON.stringify(pushing))
        navigate("/");
    }

    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Icon />
                    <Navbar.Brand href="/">WAYSBUCKS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">

                        {IsLogin.length > 0 ? <>
                            {
                                IsLogin[0].role === "admin" ?
                                    <>
                                        <Navadminicon UserImage={IsLogin[0].image} Logout={Logout} />
                                    </>
                                    :
                                    <>
                                        <Cart /><Navusericon UserImage={IsLogin[0].image} Logout={Logout} />
                                    </>
                            }
                        </> : <>
                            {/* Button Untuk Modal */}
                            <Button onClick={handleRegisterShow} className='mx-3 px-3' variant="outline-danger" size='sm'>Register</Button>{' '}
                            <Button onClick={handleLoginShow} className='px-4' variant="danger" size='sm'>Login</Button>{' '}
                            {/* Modal nya */}

                            <RegisterForm Show={showRegister} Hide={handleRegisterClose} />

                            <LoginForm Login={Login} Show={showLogin} Hide={handleLoginClose} />
                        </>}
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </div>
    )
}
