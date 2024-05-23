import { useState } from "react"

// 1. Identificar los diferentes estados visuales de mi componente
// 2. Determinar que produce esos cambios de estado
// 3. Representar el estado de la memoria usando useState
// 4. eliminar cualquier variable no esencial
// 5. conecta los controladores de eventos para actualizar el estado

// * El estado causa una paradoja?
// * la misma informacion esta disponible en otro estado?
// * se puede obtener la misma informacion con la inversa de otra variable de estado?


function Test() {

    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState("typing");
    const [error, setError] = useState(null);
    if (status === "success") {
        return <h1>Correcto!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submit");

        try {
            await submitForm(answer);
            setStatus("success");

        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }


    function handleButton(e) {
        setAnswer(e.target.value)
    }


    function submitForm(answer) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== "lima";

                if (shouldError) {
                    reject(new Error("Buen intento, pero incorrecto. Intetalo denuevo!"));
                } else {
                    resolve();
                }
            }, 1500);
        })
    }
    return (
        <>
            <h1>Cuestionario sobre ciudades</h1>
            <p>En que ciudad hay un cartel que convierte el aire en agua potable</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleButton}
                    disabled={status === "submit"}>
                </textarea>
                <br />
                <button
                    disabled={answer.length === 0 || status === "submit"}>
                    Enviar
                </button>
                {error !== null && <p>{error.message}</p>}
            </form>
        </>
    )
}

export default Test