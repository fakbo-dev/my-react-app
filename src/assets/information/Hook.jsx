// React hook = Special function that allows functional components
//              to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, userReducer, userCallback, and more..)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM
//              [name, setName]

import React, { useState } from "react";


function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Fakbo");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed);
    }



    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toogle Status</button>
        </div>
    )
}

export default MyComponent




// Counter


// import { useState } from "react"

// function Counter() {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);

//     }

//     const decrement = () => {
//         setCount(count - 1);
//     };

//     const reset = () => {
//         setCount(0);
//     }
//     return (
//         <>
//             <div className="counter">
//                 <h1 className="counter__display">{count}</h1>
//                 <button className="counter__button" onClick={decrement}>Decrement</button>
//                 <button className="counter__button" onClick={reset}>Reset</button>
//                 <button className="counter__button" onClick={increment}>Increment</button>
//             </div>
//         </>
//     )
// }

// export default Counter