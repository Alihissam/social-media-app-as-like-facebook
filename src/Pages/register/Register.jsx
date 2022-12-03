import React from 'react'
import "./register.css"

const Register = () => {
    return (
        <>
            <div className="login">
                <div className="loginwrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">SocialApp</h3>
                        <span className="loginDesc">
                            Connect with firends and the world you on SocialNetwork
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder='username' className='loginInput' />
                            <input placeholder='Email' className='loginInput' />
                            <input placeholder='Password' className='loginInput' />
                            <input placeholder='Password again' className='loginInput' />
                            <button className="loginButton">Sign Up</button>
                            <button className="loginRegistration">
                                Log into Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
