// updater Function = A function passed as an argument to setState() usually
//                    ex, setYear(updater function)
//                    Allow for safe update based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Food practice to use updater functions



import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);


    const increment = () => {

        //Takes the PENDING state to calculate NEXT state.
        //React puts your updater function in a queue (waiting in line).
        //During the next render, it will call them in the same order.

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }


    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }
    const reset = () => {
        setCount(0);
    }


    return (
        <>
            <div className="display">Count: {count}</div>

            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter