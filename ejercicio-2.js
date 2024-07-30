/* <h1 id="titulo_1">Este es un documento HTML con JavaScript</h1>
<h2 id="titulo_2">Este es un documento HTML con JavaScript</h2>
<p>El texto <span id="texto_1">indicado</span> fue seleccionado</p>
<button id="btn">Enviar</button> */


$(document).ready(
    function() {
        // Llamado por selector de ID
        // let titulo1 = $("#titulo_1");
        // let titulo2 = $("#titulo_2");
        // let texto1 = $("#texto_1");
        // let btn = $("#btn");
        // console.log(titulo1);
        // console.log(titulo2);
        // console.log(texto1);
        // console.log(btn);

        //Llamado por selector de Clase
        // let titulos = $(".titulos");
        //Se muestran los objetos html en la consola
        // console.log(titulos);


        $("ul.todos > li > ul > li").css("color", "red");
    }
);