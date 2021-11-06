import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../dashboard/Navbar';
import PropTypes from "prop-types";
import dateformat from "dateformat";
import todoApi from '../../todoApi';

function Addexercise({add, cancel}) {
    // const [name, setName] = React.useState("");
    const [discription, setDiscription] = React.useState("");
    const [activityType, setActivityType] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [sets, setSets] = React.useState("");
    const [date, setDate] = React.useState(dateformat(new Date(), "yyyy-mm-dd"));

    const addItem = () => {
        const dueDate = new Date(date);
        add({ discription,  activityType, date,sets, duration , timestampDue: dueDate.getTime(), complete: false, id: 1 });
    };




    return (
        <> <div id="wrapper">
        {/* <Navbar/> */}
            <div className="content-page">
     
            <div className="content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Add New Exercise</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">New Exercise</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                 


                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">New Exercise</h4>

                                    <form action="#">
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Category</label>
                                            <div className="col-sm-10">
                                                <select className="form-control" value={activityType}
                    onChange={e => setActivityType(e.target.value)}>
                                                    <option>Select</option>
                                                    <option>Cycling</option>
                                                    <option>Running</option>
                                                    <option>Swimming</option>
                                                    <option>Gym</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="form-group row">
                                            <label for="date-input" className="col-sm-2 col-form-label">Date</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="date" id="date-input"/>
                                            </div>

                                        </div>

                                        <div className="form-group row">
                                            <label for="sets" className="col-sm-2 col-form-label">No. of Sets</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="tel" id="sets" value={sets}
                    onChange={e => setSets(e.target.value)} 
                                                
                                                
                                                />
                                            </div>

                                        </div>



                                        {/* <div className="form-group row">
                                            <label for="time" className="col-sm-2 col-form-label">Starting
                                                at</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="time" value="" id="time"/>
                                            </div>

                                        </div> */}



                                        <div className="form-group row">
                                            <label for="datetime-local-input" className="col-sm-2 col-form-label">Duration
                                                in minutes
                                            </label>
                                            <div className="col-sm-10">
                                                <select className="form-control" value={duration}
                    onChange={e => setDuration(e.target.value)}>
                                                    <option>Select</option>
                                                    <option>5</option>
                                                    <option>10</option>
                                                    <option>15</option>
                                                    <option>20</option>
                                                    <option>25</option>
                                                    <option>30</option>
                                                </select>
                                            </div>

                                        </div>



                                        <div className="form-group row">

                                            <label for="datetime-local-input" className="col-sm-2 col-form-label">Reminder

                                            </label>
                                            <div className="col-sm-10">
                                                <input type="checkbox" id="switch3" switch="bool" checked 
                                                value={date}
                                                onChange={e => setDate(e.target.value)}
                                                />
                                                <label for="switch3" data-on-label="Yes" data-off-label="No" ></label>
                                            </div>

                                        </div>



                                        <div className="form-group row">

                                            <label for="datetime-local-input"
                                                className="col-sm-2 col-form-label">Description

                                            </label>
                                            <div className="col-sm-10">
                                                <textarea id="textarea" className="form-control" maxlength="225" rows="3"
                                                    placeholder="Write any Description here" 
                                                    value={discription}
                                                onChange={e => setDiscription(e.target.value)}
                                                    
                                                    ></textarea>
                                            </div>

                                        </div>
                                        <div className="form-group mb-0 row justify-content-center">

                                            <div>
                                                <button type="submit"
                                                    className="btn btn-primary waves-effect waves-light mr-1"
                                                    disabled={discription === ""} onClick={addItem}
                                                    
                                                    >
                                                    Add
                                                </button>

                                                <Link to="/home">
                                                <button type="reset" 
                                                    className="btn btn-secondary waves-effect"
                                                    onClick={cancel}>
                                                    Cancel
                                                </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div> 
                    </div> 


                </div> 

            </div> 



        </div>
        </div>
        </>
    )
}

Addexercise.propTypes = {
    add: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
};

export default Addexercise
