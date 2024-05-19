import { useState } from 'react';

export default function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        let newScore = player.score;
        newScore++;

        setPlayer({
            ...player,
            score: newScore,
        });
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            ...player,
            lastName: e.target.value
        });
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>
                {' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                Nombre:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Apellido:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}
