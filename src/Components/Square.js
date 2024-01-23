import React, { useState } from 'react'
import { blue, red, white } from '../constants';


function Square(prop) {


    const [bgCarrentColor, setBgColor] = useState(white);
    function changeColor() {

        if (bgCarrentColor !== white) return;
        const newColor = prop.curCount % 2 === 0 ? red : blue;
        setBgColor(newColor);
        prop.onClick(newColor);


    }



    return (
        <div onClick={changeColor}>
            <button
                className="one-square"
                style={{ backgroundColor: bgCarrentColor }}>
            </button>
        </div>
    )
}

export default Square


