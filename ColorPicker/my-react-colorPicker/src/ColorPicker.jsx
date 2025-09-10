import React,{useState} from "react";

function ColorPicker(){


    const [color,setColor] = useState("#FFFFFF");
function handleColorChange(e){
    setColor(e.target.value);
}

return(<>
<div className="color-picker-container">
    <h1>Color Picker</h1>
    {/* to use css property in javascipt you need to enclose them in an object with double curly brackets */}
    <div className="color-display" style={{backgroundColor : color}}>
    <p>Selected Color: {color}</p>
    </div>
    <label>Select a color</label>
    <input type="color" value={color} onChange={handleColorChange}></input>
    <p>Color is: {color}</p>
</div>
</>);
}

export default ColorPicker;