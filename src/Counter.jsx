import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);

    }

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    }
    return (
        <>
            <div className="counter">
                <h1 className="counter__display">{count}</h1>
                <button className="counter__decrement" onClick={decrement}>Decrement</button>
                <button className="counter__reset" onClick={reset}>Reset</button>
                <button className="counter__increment" onClick={increment}>Increment</button>
            </div>
        </>
    )
}

export default Counter