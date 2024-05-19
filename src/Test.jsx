import { recipes } from './data.js';

export default function RecipeList() {
    return (
        <div>
            <h1>Recetas</h1>
            {recipes.map(recipe =>
                <Recipe {...recipe} key={recipe.id} />
            )}
        </div>
    );
}

function Recipe({ name, id, ingredients }) {


    return (
        <div key={id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
    )
}