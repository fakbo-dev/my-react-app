import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const prev = index > 0;
    const next = index < sculptureList.length - 1;


    function handleNextClick() {
        if (next) {
            setIndex((i) => i + 1);
        }
    }
    function handlePreviousClick() {

        if (prev) {
            setIndex((i) => i - 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handlePreviousClick} disabled={!prev}>Previous</button>
            <button onClick={handleNextClick} disabled={!next}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                por {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} de {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Ocultar' : 'Mostrar'} detalles
            </button>
            <br /><br />
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
