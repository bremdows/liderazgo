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

    mostrarTarea();

    document.getElementById('btnCookie').addEventListener('click', () => {
        document.cookie = 'user=Davis'
        alert(document.cookie)
    })
});

function mostrarTarea(){

    let cerrar = document.querySelector(".cerrar-tarea"),
        tareas = document.querySelectorAll('.tarea a')
        contenedor = document.getElementById('marco-tarea')
        mostrarTareas = document.querySelector('.mostrar-tareas')

    cerrar.addEventListener('click', () =>{
        mostrarTareas.classList.remove('active')
    })

    // Agregando eventos a todos los elementos HTML con la clase .tarea
    console.log(tareas);

    tareas.forEach( (tarea, index) => {
        
        tarea.addEventListener('click', (e)=> {
            e.preventDefault();
            enlace = tarea.getAttribute('data-enlace')
            contenedor.setAttribute('src', enlace)
            mostrarTareas.classList.add('active')
        })
    })
}

(()=>{
    document.cookie = "__cf_bm=55966cf4f31cc7caedf7bd4153fafd5fedd46ff4-1609655616-1800-AQOyq0N1EuZsuuUylr9Laxy348ReUx6ncaC0cBTFZEcSBrQg6eSCO9f6AkdqWTLJvRWK84sMAc3nR2AEmeY4a/Q=;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None; Secure";
    alert( document.cookie );
})()

/*
    SIN NINGUN COMENTARIO QUE AGREGAR POR EL MOMENTO
*/

