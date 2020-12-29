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
});

function mostrarTarea(){

    let cerrar = document.querySelector(".cerrar-tarea"),
        tareas = document.querySelectorAll('.tarea a')
        contenedor = document.getElementById('marco-tarea')

    cerrar.addEventListener('click', () =>{
        console.log('Tarea Cerrada');
    })

    // Agregando eventos a todos los elementos HTML con la clase .tarea
    console.log(tareas);

    tareas.forEach( (tarea, index) => {
        tarea.addEventListener('click', ()=> {

            enlace = tarea.getAttribute('data-enlace')

        })
    })

}

