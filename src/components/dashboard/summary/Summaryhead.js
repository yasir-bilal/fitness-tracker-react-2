import React from 'react'
import {Link} from 'react-router-dom'
import "../../../App.css"
import NewItem from './Logic-control/newItem'
import PropTypes from "prop-types";


function Summaryhead({addItem}) {
    const [adding, setAdding] = React.useState(false);
 

    const addNewItem = item => {
        setAdding(false);
        addItem(item);
    };
    return(
        <>
             <div className="row d-flex">
                                <div className=" mr-auto  p-2">
                                    <h4>All Exercises</h4>
                                </div>
                                <div className="p-2">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search.."
                                            
                                            />
                                            {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                                            
                                        </div>
                                    </form>
                                </div>
                                <div className="p-2">
                           
                                     <button type="button" className="btn btn-primary waves-effect waves-light" onClick={() => setAdding(true)}> +
                                        New
                                        Exercise</button>
                                               
                                </div>
                                {adding && <NewItem cancel={() => setAdding(false)} add={addNewItem} />}
                            </div>
        </>
    )
}


Summaryhead.propTypes = {
    addItem: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Summaryhead