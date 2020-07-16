import React from 'react';
import List from './List.js';



function GroceryList(props) {
    return (
        <div>
            <List value={props.value} />
            <button onClick={props.clickFunction}>Leeg winkelkar</button>
        </div>
    );
}


export default GroceryList;
