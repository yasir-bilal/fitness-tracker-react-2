import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
import NewItem from "./newItem";
import Tablehead from '../Tablehead'
import '../../../../App.css';




function Header({ filter, addItem, setFilter }) {
    const [adding, setAdding] = React.useState(false);

    const selectOverdueFilter = () => setFilter({ ...filter, overdueOnly: true });
    const unSelectOverdueFilter = () => setFilter({ ...filter, overdueOnly: false });
    const selectCompleteFilter = () => setFilter({ ...filter, includeComplete: true });
    const unSelectCompleteFilter = () => setFilter({ ...filter, includeComplete: false });

    const addNewItem = item => {
        setAdding(false);
        addItem(item);
    };

    return (
        <>
            <div className="row d-flex">
                <div className=" mr-auto  p-2">
                    <h4>All Exercises</h4>
                </div>
                <div className="p-2 mr-auto" >   
                        <div className="p-2">
                        <div className="p-2">
                            <Checkbox
                            label=" Overdue Exercises Only"
                            selected={filter.overdueOnly}
                            select={selectOverdueFilter}
                            unSelect={unSelectOverdueFilter}
                        />
                        </div>
                        </div>
                </div>   
                 <div className="p-2 mr-auto"> 
                        <div className="p-2">
                        <div className="p-2">    
                        <Checkbox
                            
                            label="Include Complete Excercises"
                            selected={filter.includeComplete}
                            select={selectCompleteFilter}
                            unSelect={unSelectCompleteFilter}
                        />
                        </div>
                        </div>
                </div>

                <div className="p-2">
                        <div className="p-2"> 
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search.."

                            />
                            {/* <button type="submit"><i className="fa fa-search"></i></button> */}

                        </div>
                    </form>
                    </div>

                </div>
                <div className="p-2 " >
                <div className="p-2"> 
                        {!adding && (
                            <button type="button" className="btn btn-primary waves-effect waves-light" onClick={() => setAdding(true)}>
                               + New Exercise
                            </button>
                        )}
                </div>   </div>
               

            </div>

            {adding && <NewItem cancel={() => setAdding(false)} add={addNewItem} />}
            <div className="table-responsive">
                <table className="table table-striped mb-0">

                    <Tablehead />
                </table>
            </div>


        </>
    );
}

Header.propTypes = {
    addItem: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Header;
