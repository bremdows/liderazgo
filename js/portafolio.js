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

    obtenerDatosJSON()

    mostrarTarea()
    
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

// GENERAR EL HTML DE LA SECCIÓN DE TAREAS CON JAVASCRIPT MEDIANTE UN ARCHIVO JSON

function obtenerDatosJSON(){
    
    const url = 'https://bremdows.github.io/liderazgo/js/tareas.json';

    // consultar los datos 
    /*
        La función fetch nos retorna una promesa
    */
    fetch(url)
        .then(respuesta => respuesta.json() )
        .then(datos => generarHTML(datos) )
        .catch(error => {
            console.log(error)
        })
}


function generarHTML(datos){
    
    let html = ''
    
    datos.forEach(tarea => {
        
        const {nombre, enlace, tipoArchivo, fechaCreacion} = tarea

        
    })
}



