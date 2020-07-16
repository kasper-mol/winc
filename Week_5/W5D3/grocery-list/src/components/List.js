import React, { useState } from 'react';
import ListItem from './ListItem.js';

function List(props) {
    const list = props.value
    return (
        <div>
            <ul>
                {list.map(item => {
                    return <ListItem clickFunction={props.clickFunction ? () => props.clickFunction(item) : () => console.log(null)} amount={item.cart ? null : item.amount} key={item.id} value={item.title} />

                })}
            </ul>

        </div>
    );
}

export default List;
