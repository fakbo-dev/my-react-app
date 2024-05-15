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
