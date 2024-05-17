import { getImageUrl } from './utils.js';

export default function Gallery() {
    return (
        <div>
            <h1>Científicos Notables</h1>
            <section className="profile">
                <h2>Maria Skłodowska-Curie</h2>
                <img
                    className="avatar"
                    src={getImageUrl('szV5sdG')}
                    alt="Maria Skłodowska-Curie"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profesión: </b>
                        física y química
                    </li>
                    <li>
                        <b>Premios: 4 </b>
                        (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)
                    </li>
                    <li>
                        <b>Descubrió: </b>
                        polonio (elemento químico)
                    </li>
                </ul>
            </section>
            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src={getImageUrl('YfeOqp2')}
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profesión: </b>
                        geoquímica
                    </li>
                    <li>
                        <b>Premios: 2 </b>
                        (Premio Miyake de geoquímica, Premio Tanaka)
                    </li>
                    <li>
                        <b>Descubrió: </b>
                        un método para medir el dióxido de carbono en el agua de mar
                    </li>
                </ul>
            </section>
        </div>
    );
}

function Profile() {

}