import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

function Navbar() {
    return (
        <>
            {/* <!-- Begin page --> */}
            

                {/* <!-- Top Bar Start --> */}
                <div className="topbar">

                    {/* <!-- LOGO --> */}
                    <div className="topbar-left">
                        <a href="#" className="logo">
                            <span>
                                <img src="" alt="" height="18" />
                            </span>
                            <i>
                                <img src="" alt="" height="22" />
                            </i>
                        </a>
                    </div>

                    <nav className="navbar-custom">

                        <ul className="navbar-right d-flex list-inline float-right mb-0">
                            <li className="dropdown notification-list d-none d-sm-block m-t-20">
                                <strong>User 1</strong>
                                <br />
                                xyz@abc.com
                            </li>


                            <li className="dropdown notification-list">
                                <div className="dropdown notification-list nav-pro-img">
                                    <a className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown"
                                        href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                        {/* <!-- item--> */}
                                        <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle"></i>
                                            Profile</a>
                                        <a className="dropdown-item" href="exercise.html"><i className="mdi mdi-bike"></i> Exercise</a>
                                        <a className="dropdown-item d-block" href="#"><i className="mdi mdi-settings"></i>
                                            Settings</a>
                                        <div className="dropdown-divider"></div>
                                        <Link to='/login' className="dropdown-item text-danger" href="#"><i className="mdi mdi-power text-danger"></i>
                                            Logout</Link>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <ul className="list-inline menu-left mb-0">
                            <li className="float-left">
                                <button className="button-menu-mobile open-left waves-effect">
                                    <i className="mdi mdi-menu"></i>
                                </button>
                            </li>

                        </ul>

                    </nav>

                </div>
                {/* <!-- Top Bar End -->

<!-- ========== Left Sidebar Start ========== --> */}
                <div className="left side-menu">
                    <div className="slimscroll-menu" id="remove-scroll">

                        {/* <!--- Sidemenu --> */}
                        <div id="sidebar-menu">
                            {/* <!-- Left Menu Start --> */}
                            <ul className="metismenu" id="side-menu">
                                <li className="menu-title">Main</li>
                                <li>
                                    <Link to="/home" className="waves-effect">
                                        <i className="mdi mdi-home-variant"></i><span> Dashboard </span>
                                    </Link>
                                </li>

                                <li>
                                    <a href="exercise.html" className="waves-effect"><i className="mdi mdi-bike"></i><span>
                                        Exercise </span></a>
                                </li>
                                <li>
                                    <a href="#" className="waves-effect"><i className="mdi mdi-calendar-check"></i><span>
                                        Calendar </span></a>
                                </li>

                                <li>
                                    <a href="#" className="waves-effect"><i className="mdi mdi-account-circle"></i><span>
                                        Profile </span></a>
                                </li>
                                <li>
                                    <a href="#" className="waves-effect"><i className="mdi mdi-settings"></i><span>
                                        Settings </span></a>
                                </li>

                            </ul>

                        </div>
                        {/* <!-- Sidebar --> */}
                        <div className="clearfix"></div>

                    </div>
                    {/* <!-- Sidebar -left --> */}

                </div>
                {/* <!-- Left Sidebar End --> */}
            
        </>
    )
}

export default Navbar
