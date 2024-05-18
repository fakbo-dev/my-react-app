import { getImageUrl } from './utils.js';

export default function Gallery() {
    return (
        <div>
            <h1>Científicos Notables</h1>
            <Profile person={{
                name: "Maria Skłodowska-Curie",
                size: 70,
                url: "szV5sdG",
                profession: "fisica y quimica",
                description: ["Premio Nobel fisica", "premio nobel de quimica", "medalla davy", "medalla Matteucci"],
                awards: 4,
                discovery: "polonio (elemento quimico)"
            }} />
            <Profile person={{
                name: "Katsuko Saruhashi",
                size: 70,
                url: "YfeOqp2",
                profession: "geoquimica",
                description: ["Premio Miyake de geoquimica, Premio Tanaka"],
                awards: 2,
                discovery: "un metodo para medir el dioxido de carbono en el agua de mar",
            }} />
        </div>
    );
}

function Profile({ person }) {

    return (
        <section className='profile'>
            <h2>{person.name}</h2>
            <img
                className='avatar'
                src={getImageUrl(person.url)}
                alt={person.name}
                width={person.size}
                height={person.size}
            />

            <ul>
                <li>
                    <b>Profesion: </b>
                    {person.profession}
                </li>
                <li>
                    <b>Premios: {person.awards} </b>
                    {person.description.join(", ")}
                </li>
                <li>
                    <b>Descrubio: </b>
                    {person.discovery}
                </li>
            </ul>
        </section>
    );
}