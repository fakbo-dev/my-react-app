import { useRef } from "react";

function Test() {

    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }
    return (
        <>
            <nav>
                <button onClick={handleFocus}>Buscar</button>
            </nav>
            <br />
            <input
                type="text"
                placeholder="Buscando algo?"
                ref={inputRef} />
        </>
    )
}

export default Test