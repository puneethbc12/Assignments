import React, { useState } from 'react'
import "./login.css"

const Logon_Page = () => {
    const [values, setValue] = useState({ a: '', b: '', forgotPassword: false, mobileLogin: false })

    return (
        <div className='login_container'>
            <div className="form_container">
                <div className='_login'>LOGIN</div>
                {values.forgotPassword ?
                    <>
                        <div className={`user_name_container`}>
                            <div className="placeholder">Enter Mobile Number</div>
                            <input type='text' className='_user_name' onChange={(e) => { setValue({ ...values, a: e.target.value }) }} />
                        </div>
                        <div className={`user_name_container `}>
                            <div className="placeholder">Enter OTP</div>
                            <input type='password' className='_user_name' onChange={(e) => { setValue({ ...values, b: e.target.value }) }} />
                        </div>
                        <div className={`user_name_container `}>
                            <div className="placeholder">Enter New Password</div>
                            <input type='password' className='_user_name' onChange={(e) => { setValue({ ...values, b: e.target.value }) }} />
                        </div>
                        <div className={`user_name_container `}>
                            <div className="placeholder">Confirm Password</div>
                            <input type='password' className='_user_name' onChange={(e) => { setValue({ ...values, b: e.target.value }) }} />
                        </div>
                        <div className="_btn_container">
                            <button>
                                I'Am In
                            </button>
                            <div>OR</div>
                            <button onClick={() => { setValue({ ...values, forgotPassword: !values.forgotPassword }) }}>
                                Back
                            </button>
                        </div>
                    </>
                    :
                    <>
                        {values.mobileLogin ?
                            <>
                                <div className={`user_name_container`}>
                                    <div className="placeholder">Mobile Number</div>
                                    <input type='text' className='_user_name' onChange={(e) => { setValue({ ...values, a: e.target.value }) }} />
                                </div>
                                <div className={`user_name_container `}>
                                    <div className="placeholder">Password</div>
                                    <input type='password' className='_user_name' onChange={(e) => { setValue({ ...values, b: e.target.value }) }} />
                                </div>
                            </>
                            :
                            <>
                                <div className={`user_name_container`}>
                                    <div className="placeholder">Company Name</div>
                                    <input type='text' className='_user_name' onChange={(e) => { setValue({ ...values, a: e.target.value }) }} />
                                </div>
                                <div className={`user_name_container`}>
                                    <div className="placeholder">Enter Username</div>
                                    <input type='text' className='_user_name' onChange={(e) => { setValue({ ...values, a: e.target.value }) }} />
                                </div>
                                <div className={`user_name_container `}>
                                    <div className="placeholder">Password</div>
                                    <input type='password' className='_user_name' onChange={(e) => { setValue({ ...values, b: e.target.value }) }} />
                                </div>
                            </>
                        }
                        <div className='_forgot_password' onClick={() => { setValue({ ...values, forgotPassword: !values.forgotPassword }) }}>Forgot Password ?</div>
                        <div className="_btn_container">
                            <button>
                                I'Am In
                            </button>
                            <div>OR</div>
                            <button onClick={() => { setValue({ ...values, mobileLogin: !values.mobileLogin }) }}>
                                {values.mobileLogin ? "Login With Username" : "Login With Mobile"}
                            </button>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Logon_Page
