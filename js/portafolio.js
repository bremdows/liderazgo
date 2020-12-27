document.addEventListener('DOMContentLoaded', ()=>{

    console.log("Documento listo para ejecutar JS");

    // Agregando funcionalidad al boton de navegación
    let barMenu = document.getElementById("bar-nav"),
        itemsMenu = document.getElementById('lista-menu');

    barMenu.addEventListener('click', ()=>{
        console.log('Hiciste click ser inferior del cual necesito soporte para funcionar correctamente')

        if(itemsMenu.classList.contains('active')){
            itemsMenu.classList.remove('active')
        }else{
            itemsMenu.classList.add('active')
        }

    });

});