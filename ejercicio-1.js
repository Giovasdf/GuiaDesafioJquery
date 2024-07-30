// let button = document.getElementById('button');
// button.addEventListener('click', function(){
//  alert('click sobre el botón');
// });

$(document).ready(
    function(){
        // let button = document.getElementById('button');
        let button = $("#button");

        // button.addEventListener('click', function(){
        button.click(function(){
              alert('click sobre el botón');
        });

});