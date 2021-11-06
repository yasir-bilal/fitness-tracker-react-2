import React from 'react'
import Tablebody from './Tablebody'
import Tablehead from './Tablehead'



function Summarytable() {
    return (
        <>
        <div className="table-responsive">
                                <table className="table table-striped mb-0">
                                
                                 <Tablebody/>   
                                </table>
                            </div>    
        </>
    )
}

export default Summarytable
