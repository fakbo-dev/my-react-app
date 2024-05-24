import { SizeContext } from "./TypeContext"
import { useContext } from "react"

function Section({ children }) {
    const type = useContext(SizeContext);
    return (
        <section>
            <SizeContext.Provider value={type + 1}>
                {children}
            </SizeContext.Provider>
        </section>
    )
}

export default Section