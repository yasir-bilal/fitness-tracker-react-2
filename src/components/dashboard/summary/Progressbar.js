import React from 'react'
import Addexercise from '../../exercise/Addexercise'
import dateformat from "dateformat";
import isOverdue from "./isOverdue";
import Tablebody from './Tablebody';
import todoApi from "../../..todoApi"



function Progressbar() {

    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState(defaultFilter);
    const [loading, setLoading] = React.useState(true);

    const loadItems = async () => {
        setLoading(true);
        const todoItems = await todoApi.get();
        setItems(todoItems);
        setLoading(false);
    };

    React.useEffect(() => {
        loadItems();
    }, []);

    const complete = async id => {
        const updatedItems = await todoApi.complete(id);
        setItems(updatedItems);
    };

    const add = async item => {
        const updatedItems = await todoApi.add(item);
        setItems(updatedItems);
    };

    const filteredItems = items.filter(
        item => (filter.includeComplete || !item.complete) && (!filter.overdueOnly || isOverdue(item)) && (!filter.future ||todaysItem(item)) );




    return (
        <>
        <div className="list">
               
               <List items={filteredItems} completeItem={complete} />
           </div>


                                                    {/* <tr>
                                            <td>ex name </td>
                                            <td>date</td>
                                            <td>
                                                date
                                                <br />
                                                time
                                            </td>
                                            <td>
                                                <div className="">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100">25%</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" className="waves-effect">
                                                    <i className="mdi mdi-eye"></i>
                                                </a>
                                                &nbsp;
                                                &nbsp;

                                                <a href="#" className="waves-effect">
                                                    <i className="mdi mdi-alarm-off"></i>
                                                </a>
                                                &nbsp;
                                                &nbsp;
                                                <a href="#" className="waves-effect">
                                                    <i className="mdi mdi-pencil"></i>
                                                </a>
                                            </td>
                                        </tr> */}
        </>
    )
}

export default Progressbar
