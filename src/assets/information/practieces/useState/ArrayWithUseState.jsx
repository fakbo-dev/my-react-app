import { useState } from "react"

const initalProduct = [{
    id: 0,
    name: "Baklava",
    count: 1,
}, {
    id: 1,
    name: "Queso",
    count: 5,
}, {
    id: 2,
    name: "Espagueti",
    count: 2,
}];

function Test() {

    const [products, setProducts] = useState(initalProduct);


    function handleCount(index) {

        const shallow = products.map((product, i) => {

            if (index === i) {

                return {
                    ...product,
                    count: product.count + 1,
                };
            }
            return product
        });
        setProducts(shallow);
    }

    return (
        <>
            {products.map(product => <li key={product.id}>{product.name}{" "}({product.count}){" "} <button onClick={() => handleCount(product.id)}>+</button></li>)}
        </>
    );
}


export default Test;