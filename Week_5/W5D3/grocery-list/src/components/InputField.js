import React, { useState, useEffect } from 'react';



function InputField(props) {

    const [inputData, setInputfield] = useState("")

    function changeHandler(event) {
        setInputfield(event.target.value);

    }

    return (
        < div >
            <input type="text" name="bottomText" value={inputData} onChange={changeHandler} />
            <button onClick={() => { props.addFunction(inputData) }}>Test voor send</button>
        </div >
    );
}
export default InputField
