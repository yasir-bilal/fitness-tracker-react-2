import React from "react";
import PropTypes from "prop-types";
import Item from "./item";

function List({ items, completeItem }) {
    if (items.length === 0) {
        return (
            <div className="alert alert-success" role="alert">
                Congratulations you have completed your workout!
            </div>
        );
    }
    return (
        <ul className="list-group">
            {items.map(item => (
                <Item key={item.id} item={item} completeItem={() => completeItem(item.id)} />
            ))}
        </ul>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    completeItem: PropTypes.func.isRequired,
};

export default List;
