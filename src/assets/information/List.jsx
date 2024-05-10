

function List(props) {

    // const fruits = [
    //     { name: "apple", calories: 95, id: 1 },
    //     { name: "banana", calories: 105, id: 2 },
    //     { name: "orange", calories: 45, id: 3 },
    //     { name: "coconut", calories: 159, id: 4 },
    //     { name: "pineapple", calories: 37, id: 5 },
    // ]


    // const vegetables = [
    //     { name: "potatoes", calories: 110, id: 6 },
    //     { name: "celery", calories: 15, id: 7 },
    //     { name: "carrots", calories: 25, id: 8 },
    //     { name: "corn", calories: 63, id: 9 },
    //     { name: "broccoli", calories: 50, id: 10 },
    //   ]


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL

    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL

    // fruits.sort((a, b) => a.calories - b.calories); NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); REVERSE NUMERIC

    // const lowCaloFruits = fruits.filter(fruit => fruit.calories < 100); FILTER LOW CALORIES FRUITS

    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100); FILTER HIGH CALORIES FRUITS

    const itemList = props.items;

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     <b>Name:</b> {fruit.name} <b>Calories:</b> {fruit.calories}</li>);

    const category = props.category;
    const listItems = itemList.map(item => <li key={item.id}>
        <b>Name:</b> {item.name} <b>{item.calories}</b>
    </li>);


    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>)
}

export default List;