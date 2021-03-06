import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import {Link} from "react-router-dom";
import "../../../../App.css"


function NewItem({add, cancel}) {
    // const [activity, setactivity] = React.useState("");
    const [discription, setDiscription] = React.useState("");
    const [activityType, setActivityType] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [sets, setSets] = React.useState("");
    const [date, setDate] = React.useState(dateformat(new Date(), "yyyy-mm-dd"));

    const addItem = () => {
        const dueDate = new Date(date);
        add({ discription,  activityType,timestampDue: dueDate.getTime(), sets, duration , timestampDue: dueDate.getTime(), complete: false, id: 1 });
    };

   

        



    return (
        <> 
        {/* <div id="wrapper"> */}
        {/* <Navbar/> */}
            {/* <div class="content-page"> */}
     
            {/* <div class="content"> */}
                {/* <div class="container-fluid"> */}

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Add New Exercise</h4>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li class="breadcrumb-item active">New Exercise</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                 


                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="card m-b-20">
                                <div class="card-body">

                                    <h4 class="mt-0 header-title">New Exercise</h4>

                                    <form action="#" onsubmit="return validateForm()" method="post">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Activity Type</label>
                                    <div class="col-sm-10">
                                        <select class="form-control" 
                                        
                                        value={activityType}
                                            onChange={e => setActivityType(e.target.value)}>
                                            <option> Select an Exercise </option>
                                            <option>  Running </option>
                                            <option>Cycling </option>
                                            <option>Riding  </option>
                                            <option> Swiming  </option>
                                            <option>Walking</option>
                                            <option>Hiking</option>
                                        </select>
                                            </div>

                                        </div>

                                        <div class="form-group row">
                                            <label for="date-input" class="col-sm-2 col-form-label">Date</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" type="date" id="date-input"
                                                value={date}
                                                onChange={e => setDate(e.target.value)}
                                                
                                                />
                                            </div>

                                        </div>

                                        <div class="form-group row">
                                            <label for="sets" class="col-sm-2 col-form-label">No. of Sets</label>
                                            <div class="col-sm-10">
                                            <select class="form-control"
                                             value={sets}
                    onChange={e => setSets(e.target.value)} required>
                                                    <option>Select No. of sets</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    
                                                </select>
                                            </div>

                                        </div>



                                        {/* <div class="form-group row">
                                            <label for="time" class="col-sm-2 col-form-label">Starting
                                                at</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" type="time" value="" id="time"/>
                                            </div>

                                        </div> */}



                                        <div class="form-group row">
                                            <label for="datetime-local-input" class="col-sm-2 col-form-label">Duration
                                                in minutes
                                            </label>
                                            <div class="col-sm-10">
                                                <input type="number" class="form-control" value={duration}
                    onChange={e => setDuration(e.target.value)} min="1" max="60" required/>
                                                    
                                            </div>

                                        </div>



                                        <div class="form-group row">

                                            <label for="datetime-local-input" class="col-sm-2 col-form-label">Reminder

                                            </label>
                                            <div class="col-sm-10">
                                                <input type="checkbox" id="switch3" switch="bool" checked 
                                                value={date}
                                                onChange={e => setDate(e.target.value)}
                                                />
                                                <label for="switch3" data-on-label="Yes" data-off-label="No" ></label>
                                            </div>

                                        </div>



                                        <div class="form-group row">

                                            <label for="datetime-local-input"
                                                class="col-sm-2 col-form-label">Description

                                            </label>
                                            <div class="col-sm-10">
                                                <textarea id="textarea" class="form-control" minlength="1" maxlength="10" rows="3"
                                                    placeholder="Write any Description here" required
                                                    value={discription}
                                                onChange={e => setDiscription(e.target.value)}
                                                    
                                                    ></textarea>
                                            </div>

                                        </div>
                                        <div class="form-group mb-0 row justify-content-center">

                                            <div>
                                                <button type="submit"
                                                    class="btn btn-primary waves-effect waves-light mr-1"
                                                    
                                                    disabled={activityType==="" }
                                                    disabled={sets===""}
                                                    // disabled={duration===""}
                                                    disabled={discription === ""}
                                                    onClick={addItem}
                                                    
                                                    >
                                                    Add
                                                </button>

                                                <Link to="/home">
                                                <button type="reset" 
                                                    class="btn btn-secondary waves-effect"
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


                {/* </div>  */}

            {/* </div>  */}



        {/* </div> */}
        {/* </div> */}
        </>
    )
}


NewItem.propTypes = {
    add: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
};

export default NewItem;
