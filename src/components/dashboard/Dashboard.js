import React from 'react'
import Navbar from './Navbar';
import Allcount from './Allcount';
import Todaycount from './Todaycount';
import Compcount from './Compcount';
import Pendcount from './Pendcount';
import Summary from './summary/Summary';
import "../../App.css"

function Dashboard() {

    return (
        <> <div id="wrapper">
            <Navbar />

            <div className="content-page ">
                container-fluid
                {/* <!-- Start content --> */}
                <div className="content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Dashboard</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active">
                                            Welcome to Exercise Tracker
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row">
                            <Allcount />
                            <Todaycount />
                            <Compcount />
                            <Pendcount />

                        </div>
                        {/* <!-- end row --> */}

                        <Summary />
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- container-fluid --> */}

                </div>
                {/* <!-- content --> */}

                <footer className="footer">
                    <h3> © 2021 All Rights Reserved - Exercise Tracker </h3>
                </footer>

              



            </div>
            </div>
        </>








    )
}

export default Dashboard
