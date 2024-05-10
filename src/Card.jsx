import profilePic from "./assets/vincent.jpg"

function Card() {

    return (
        <>
            <div className="card">
                <img className="card__image" alt="Profile Picture" src={profilePic}></img>
                <h2 className="card__title">Fakbo</h2>
                <p className="card__para">I'm a student of a degree of software engineer </p>
            </div>
        </>
    );
}

export default Card;