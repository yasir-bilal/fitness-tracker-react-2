import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <>
                <div className="wrapper-page">

<div className="card">
    <div className="card-body">

        <h3 className="text-center m-0">
            <a href="#" className="logo logo-admin"><img src="" height="30" alt="logo"/></a>
        </h3>

        <div className="p-3">
            <h4 className="text-muted font-18 m-b-5 text-center">Welcome Exercise Tracker !</h4>
            <p className="text-muted text-center">Sign in to continue.</p>

            <form className="form-horizontal m-t-30" action="index.html">

                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="xyz@abc.com"/>
                </div>

                <div className="form-group">
                    <label for="userpassword">Password</label>
                    <input type="password" className="form-control" id="userpassword" placeholder="********"/>
                </div>

                <div className="form-group row m-t-20">
                    <div className="col-6">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                        </div>
                    </div>
                    <div className="col-6 text-right">
                        <Link to='/home'>
                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log
                            In</button>
                            </Link>
                    </div>
                </div>

                <div className="form-group m-t-10 mb-0 row">
                    <div className="col-12 m-t-20">
                        <a href="#" className="text-muted"><i className="mdi mdi-lock"></i> Forgot
                            your password?</a>
                    </div>
                </div>
            </form>
        </div>

    </div>
</div>

<div className="m-t-40 text-center">
    <p>Don't have an account ? <Link to='/signup'  className="text-primary"> Signup Now </Link> </p>
    <p>© 2021 All Rights Reserved - Exercise Tracker</p>
</div>

</div>
        </>
    )
}

export default Login
