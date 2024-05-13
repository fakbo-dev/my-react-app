// useEffect() = React Hooks that tells React DO SOME CODE WHEN (pick one);
//               This component re-renders
//               this component mounts
//               the state of a value

//               useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render
// 1. useEffect(() => {}, [])      // Runs only on mount
// 1. useEffect(() => {}, [value]) // Runs on mount + when value changes

//USES
// #1 Event Listener
// #2 DOM manipulation
// #3 Subscription (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts


import { useState, useEffect } from "react"

function Test() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);



    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColor() {

        setColor((c) => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button
                onClick={addCount}>
                Add
            </button>
            <button onClick={subtractCount}>
                Substract
            </button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

// export default Test



// import { useState, useEffect } from "react";

// function Test() {

//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);


//     useEffect(() => {
//         window.addEventListener("resize", handleResize);
//         console.log("Event ADDED");

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             console.log("Event Listener REMOVED");
//         }
//     }, []);

//     useEffect(() => {
//         document.title = `Size: ${width} x ${height}`;
//     }, [width, height]);

//     function handleResize() {
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     };

//     return (
//         <>
//             <p>Window Width: {width}px</p>
//             <p>Window Height: {height}px</p>
//         </>
//     )
// }

// export default Test