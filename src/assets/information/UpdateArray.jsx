import { useState } from "react"

function MyComponent() {
    const [foods, setFoods] = useState(["apple", "orange", "banana"]);


    function handlerAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handlerRemoveFood(index) {

        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={
                    () => handlerRemoveFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={handlerAddFood}>Add Food</button>
        </>
    )
}

export default MyComponent