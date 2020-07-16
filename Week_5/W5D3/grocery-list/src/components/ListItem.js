import React, { useState, changeState } from 'react';

function ListItem(props) {

    return (
        <div>
            <li
                key={props.id}
                value={props.value}
                className="list-item"
                onClick={props.clickFunction}>
                {props.amount} {props.value}</li>

        </div>
    );
}

export default ListItem;
