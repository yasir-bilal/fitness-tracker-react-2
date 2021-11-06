import React from 'react'
import Summaryhead from './Summaryhead'
import Summarytable from './Summarytable'

function Summary() {
    return (
        <>
            <div className="row">

                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                



                           <Summarytable/> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary
