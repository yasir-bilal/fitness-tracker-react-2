import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import isOverdue from "./isOverdue";


function Item({ item, completeItem,}) {
    const itemClass = `list-group-item list-group-item-${isOverdue(item) ? "danger" : "info"}`;

    
    return (
        <ol className={itemClass}>
            {/* <th className={`item-title${item.complete ? " complete-item" : " "}` }></th> */}
            <div className= "table-responsive">
                                <table className="table table-striped mb230">

                <tbody style={{layout: "fixed"}}>
                    <tr>

                    
                   <td style={{width: "230px", overflow: "hidden"}}> {`${item.activityType}`} </td>
                   <td style={{width: "230px", overflow: "hidden"}}>{`${item.sets}`}</td>
                   <td style={{width: "260px", overflow: "hidden"}}>{`${item.discription}`}</td>
                   <td style={{width: "260px", overflow: "hidden"}}>{`${dateformat(new Date(item.timestampDue), "dd-mmm-yyyy")}`}</td>

                   <td style={{width: "210px", overflow: "hidden"}}> <i className={isOverdue(item) ? "fas fa-exclamation-circle" : "Due"} /></td>
                   
                



                {!item.complete && (
                    <button type="button" className="btn btn-link" onClick={completeItem}>
                        Complete item
                    </button>
                )}

                </tr>
                </tbody>
                </table>



            </div>
        </ol>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    completeItem: PropTypes.func.isRequired,
};

export default Item;


                 
// {`${item.activityType} ${item.sets} ${item.discription} ${item.date} - ${dateformat(new Date(item.timestampDue), "dd-mmm-yyyy")}`}
// {`${item.name}`}