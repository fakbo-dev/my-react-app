//PASO 1

//1 Separa la UI en una jerarquia de componentes

//Utilizar principio de responsabilidad unica lo ideal es que un componente sólo haga una cosa. Si termina creciendo, debería descomponerse en subcomponentes más pequeños.

// FilterableProductTable (gris) contiene toda la aplicación.

// SearchBar (azul) recibe la entrada del usuario.

// ProductTable (lavanda) muestra y filtra la lista de acuerdo a la entrada del usuario.

// ProductCategoryRow (verde) muestra un encabezado para cada categoría.

// ProductRow (amarillo) muestra una fila para cada producto.

//Ahora que has identificado los componentes en el boceto, ordénalos en una jerarquía:



// FilterableProductTable
//   * SearchBar
//   * ProductTable
//    * ProductCategoryRow
//    * ProductRow


//-----------------------

// PASO 2

// Ahora que tienes tu jerarquía de componentes, es momento de implementar tu aplicación. El enfoque más sencillo consiste en construir una versión que renderiza la UI a partir de tu modelo de datos sin añadir ninguna interactividad… ¡Aún! A menudo es más fácil construir primero la versión estática y luego añadir la interactividad de forma independiente. Construir una versión estática requiere mucha escritura y poco pensamiento, pero añadir interactividad requiere mucho pensamiento y no mucha escritura.


import { useState } from 'react';

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Buscar..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Mostrar solo productos en stock
            </label>
        </form>
    );
}

const PRODUCTS = [
    { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
    { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
    { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
    { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
    { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
    { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" }
];

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}
