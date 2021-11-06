import React from "react";
import Header from "./header";
import List from "./list";
import isOverdue from "./isOverdue";
import todoApi from "./todoApi";
// import Login from "./Loginpage";



const defaultFilter = { overdueOnly: false, includeComplete: false }; ///

function Sumup() {
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
        item => (filter.includeComplete || !item.complete) && (!filter.overdueOnly || isOverdue(item)) );

    return (
        
        <div className="container-fluid">
            

            <Header addItem={add} filter={filter} setFilter={setFilter} />
            {!loading && (
                <div className="list">
               
                    <List items={filteredItems} completeItem={complete} />
                </div>
            )}
            {loading && (
                <div className="alert alert-info" role="alert">
                    Loading please wait...
                </div>
            )}
            
        </div>
    );
}


export default Sumup;
