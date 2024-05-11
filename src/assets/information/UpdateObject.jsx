import { useState } from "react";

function MyComponent() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });


    const handleCarYearChange = (event) => {
        setCar(c => ({ ...c, year: event.target.value }));
    }

    const handleCarMakeChange = (event) => {
        setCar(c => ({ ...c, make: event.target.value }));
    }

    const handleCarModelChange = (event) => {
        setCar(c => ({ ...c, model: event.target.value }));

    }

    return (
        <>
            <p>Your favorite car is: <b>{car.year} {car.make} {car.model}</b></p>

            <input type="number" value={car.year}
                onChange={handleCarYearChange} /><br />

            <input type="text" value={car.make}
                onChange={handleCarMakeChange} /><br />

            <input type="text" value={car.model}
                onChange={handleCarModelChange} /><br />
        </>
    );
}

export default MyComponent