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

/*
    SIN NINGUN COMENTARIO QUE AGREGAR POR EL MOMENTO
*/

