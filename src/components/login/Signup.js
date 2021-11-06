import React from 'react'
import {Link} from 'react-router-dom'
function Signup() {
    return (
        <>
                <div className="wrapper-page">
        <div className="card">
            <div className="card-body">

                <h3 className="text-center m-0">
                    <a href="index.html" className="logo logo-admin"><img src="" height="30" alt="logo"/></a>
                </h3>

                <div className="p-3">
                    <h4 className="text-muted font-18 m-b-5 text-center">Get Registered here</h4>
                    <p className="text-muted text-center">To Reshape Yourself</p>

                    <form className="form-horizontal m-t-30" action="index.html">

                        <div className="form-group">
                            <label for="useremail">Email</label>
                            <input type="email" className="form-control" id="useremail" placeholder="Enter email"/>
                        </div>

                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                        </div>

                        <div className="form-group">
                            <label for="userpassword">Password</label>
                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password"/>
                        </div>

                        <div className="form-group">
                            <label for="user-confirm-password">Confirm Password</label>
                            <input type="password" className="form-control" id="user-confirm-password"
                                placeholder="Enter password"/>
                        </div>

                        <div className="form-group row m-t-20">
                            <div className="col-12 text-right">
                                <button className="btn btn-primary w-md waves-effect waves-light"
                                    type="submit">Register</button>
                            </div>
                        </div>

                        <div className="form-group m-t-10 mb-0 row">
                            <div className="col-12 m-t-20">
                                <p className="font-14 text-muted mb-0">By registering you agree to the Exercise <a href="#"
                                        className="text-primary">Terms of Use</a></p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <div className="m-t-40 text-center">
            <p>Already have an account ? <Link to='/login' className="text-primary"> Login </Link> </p>
            <p>© 2021 All Rights Reserved - Exercise Tracker</p>
        </div>
    </div>
        </>
    )
}

export default Signup
