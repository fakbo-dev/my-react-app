import { useState } from "react";
import { initialTravelPlan } from "./data.js";


function PlaceTree({ place }) {
    const childPlaces = place.childPlaces;
    return (
        <li>
            {place.title}
            {childPlaces.length > 0 && (
                <ol>
                    {childPlaces.map(place => (
                        <PlaceTree key={place.id} place={place} />
                    ))}
                </ol>
            )}
        </li>
    );
}

function Test() {

    const [plan, setPlan] = useState(initialTravelPlan);
    const planet = plan.childPlaces;
    return (
        <>
            <h1>Lugares para visitar</h1>

            <ol>
                {planet.map(p => (
                    <PlaceTree key={p.id} place={p} />
                ))}
            </ol>
        </>
    );
}

export default Test