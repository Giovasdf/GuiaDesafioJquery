// ● Para el siguiente HTML, selecciona mediante los filtros de posición el primer y último
// <li> perteneciente a la clase denominada “todos”, añadiendo un color al texto a los
// elementos seleccionados, en este caso debe ser el color rojo.

$(document).ready(
    function() {
        // $("ul.todos > li:eq(0)").css("color", "red");
        // $("ul.todos > li:eq(2)").css("color", "red");

        $("ul.todos > li").first().css("color", "red");
        $("ul.todos > li").last().css("color", "red");
    }
);