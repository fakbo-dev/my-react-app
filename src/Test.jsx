import { useState, useRef, useEffect } from "react"

function Test() {

    const ref = useRef(0);

    let [number, setNumber] = useState(0);


    useEffect(() => {
        console.log("Component Redered")
    });

    function handleClick() {
        ref.current++;
        console.log(ref.current);
    }
    return (
        <>
            <button onClick={handleClick}>
                Click Me {ref.current}
            </button>
        </>
    )
}

export default Test;