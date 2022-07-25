/* Esta función recolectará la entrada del usuario
y tomando en cuenta dicha entrada mostrará u ocultará información 
de una fila en particular */

function filterData(){
    // Accede al texto de entrada y a varios elementos del DOM
    let value = document.getElementById("searchInput").value.toUpperCase();
    let names = document.getElementById("names");
    let rows = names.getElementsByTagName("tr");

    // Iteramos el arreglo de filas
    for (let i = 0; i < rows.length; i++) {
        // Por cada fila se obtiene la referencia a la columna lenguaje
        let column = rows[i].getElementsByTagName("td")[2];

        // Se extrae el texto de la columna lenguaje
        let language = column.textContent;

        // Se muestra u oculta la fila si la entrada de texto
        // coincide con el texto de la columna lenguaje
        rows[i].style.display = language.toUpperCase().indexOf(value) > -1 ? "" : "none";
    }
}

document.getElementById("searchInput").addEventListener("keyup", filterData);