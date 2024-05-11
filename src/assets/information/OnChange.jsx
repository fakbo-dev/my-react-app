

import { useState } from "react"

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {

        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }


    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }


    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange} />
                Pick Up
            </label>
            <label><br />
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default MyComponent;


//Color Picker


// import React, { useState } from "react"
// import { div } from "three/examples/jsm/nodes/Nodes.js";

// function ColorPicker() {

//     const [color, setColor] = useState("#FFFFFF");


//     function handleColorChange(event) {
//         setColor(event.target.value);

//     }

//     return (
//         <div className="color-picker-container">
//             <h1>Color Picker</h1>
//             <div className="color-display" style={{ backgroundColor: color }}>
//                 <p>Selected Color: {color}</p>
//             </div>
//             <label>Select a color</label>
//             <input type="color" value={color} onChange={handleColorChange} />
//         </div>
//     )
// }

// export default ColorPicker