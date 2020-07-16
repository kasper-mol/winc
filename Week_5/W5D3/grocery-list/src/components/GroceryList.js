import React from 'react';
import List from './List.js'
import InputField from './InputField.js';



function GroceryList(props) {


    return (
        <div>
            <List clickFunction={props.clickFunction} value={props.value} />
            <InputField addFunction={props.addFunction} />
        </div>
    );
}

export default GroceryList;
