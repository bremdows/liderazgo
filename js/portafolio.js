document.addEventListener('DOMContentLoaded', ()=>{

    console.log("Documento listo para ejecutar JS");

    // Agregando funcionalidad al boton de navegación
    let barMenu = document.getElementById("bar-nav");

    barMenu.addEventListener('click', ()=>{
        alert('Hiciste click ser inferior del cual necesito soporte para funcionar correctamente');
    });

});