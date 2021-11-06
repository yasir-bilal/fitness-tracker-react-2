import React from 'react';
// import Progressbar from './Progressbar';
import PropTypes from "prop-types";
import "../../../App.css"

import Sumup from './Logic-control/Sum';



function Tablebody() {
   
        return (

            <> 
            <div className="table-responsive">
                                <table className="table table-striped mb-0">
         
                <tbody>
                <Sumup/>
                </tbody>
                </table>

            </div>




            {/* <Progressbar/>
                <Progressbar/>
                <Progressbar/>
                <Progressbar/>
                <Progressbar/> */}

        </>
    )
}






export default Tablebody
