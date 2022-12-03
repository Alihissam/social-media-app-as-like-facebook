import React from 'react'
import "./login.css"
const Login = () => {
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
                            <input placeholder='Email' className='loginInput' />
                            <input placeholder='Password' className='loginInput' />
                            <button className="loginButton">Log In</button>
                            <span className="loginForget">Forget Password?</span>
                            <button className="loginRegistration">
                                Create a New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
