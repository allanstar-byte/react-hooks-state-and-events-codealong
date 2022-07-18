import React from "react";
import react, { useState } from "react";

// function Toggle() {
//     const [isOn, setIsOn] = useState(false);

//     function handleClick() {
//         setIsOn((isOn) => !isOn);
//     }

//     return <button onClick = { handleClick } > { isOn ? "ON" : "OFF" } < /button>;

//     // return <button onClick = { handleClick } > {
//     //     if (isOn) {
//     //         return ("ON")
//     //     } else {
//     //         "OFF"
//     //     }
//     // } < /button>;
// }


function Toggle() {
    const [isOff, setIsOn] = useState(true);

    function handleClick() {
        setIsOn(!isOff);
    }

    const color = isOff ? "white" : "red";

    return <button style = {
        { background: color }
    }
    onClick = { handleClick } > { isOff ? "ON" : "OFF" } <
        /button>


    // return <button onClick = { handleClick } > {
    //     if (isOn) {
    //         return ("ON")
    //     } else {
    //         "OFF"
    //     }
    // } < /button>;
}
export default Toggle;