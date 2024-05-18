

function Test() {

    const people = [
        'Creola Katherine Johnson: matemática',
        'Mario José Molina-Pasquel Henríquez: químico',
        'Mohammad Abdus Salam: físico',
        'Percy Lavon Julian: químico',
        'Subrahmanyan Chandrasekhar: astrofísico'
    ];

    const people2 = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'matemática',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'químico',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'físico',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'químico',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrofísico',
    }];

    const listItems = people.map((person) => <li>{person}</li>);
    const filterItems = people2.filter((person) => person.profession === "químico");
    const filterListItems = filterItems.map((item) => <li key={item.id}>{item}</li>);
    return (
        <>
            <ul>{listItems}</ul>
            <br />
            <ul>{filterListItems}</ul>
        </>
    )
}

export default Test