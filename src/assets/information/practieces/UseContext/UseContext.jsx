import Heading from "./Heading"
import Section from "./Section"


function Test() {
    return (
        <>
            <Section>
                <Heading >Titulo</Heading>

                <Section>
                    <Heading >Encabezado</Heading>
                    <Heading >Encabezado</Heading>
                    <Heading >Encabezado</Heading>

                    <Section>
                        <Heading >Sub-Encabezado</Heading>
                        <Heading >Sub-Encabezado</Heading>
                        <Heading >Sub-Encabezado</Heading>

                        <Section>
                            <Heading > Sub-sub-Encabezado</Heading>
                            <Heading > Sub-sub-Encabezado</Heading>
                            <Heading > Sub-sub-Encabezado</Heading>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </>
    )
}

export default Test