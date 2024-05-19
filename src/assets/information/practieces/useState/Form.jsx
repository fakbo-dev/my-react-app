import { useState } from "react"

function Test() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleResetButton() {
        setFirstName("");
        setLastName("");
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Name"
                    value={firstName}
                    onChange={handleNameChange} />

                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange} />

                <h1>Hello, {firstName} {lastName}</h1>
                <button onClick={handleResetButton}>Restart</button>
            </form>
        </>
    )
}

export default Test