/*

Ejercicio 01 
Debemos construir un buscador de planetas, utilizando SWAPI (https://swapi.dev/planets/3/) 
Debemos ingresar el ID del planeta y retornar 5 campos (formulario) cualquiera del JSON que obtenemos.
Utilice CSS para mejorar la presentacion y valide en caso se ingrese un ID inexistente.
 
 */
const formulario = document.getElementById('formPlanetas')
const id = document.getElementById('idPlanetas')
const nombre = document.getElementById('NombrePlaneta')
const Diametro = document.getElementById('Diametro')
const Gravedad = document.getElementById('Gravedad')
const Terreno = document.getElementById('Terreno')
const Clima = document.getElementById('Clima')

//boton
const boton = document.getElementById('boton')

formulario.addEventListener("submit", (event) =>{
event.preventDefault()
    planetas(id.value)

})

 async function planetas (id){
    const URL_SWAPI = `https://swapi.info/api/planets/${id}`

    try {
        const datosPlaneta = await fetch(URL_SWAPI)

        if(!datosPlaneta.ok){
            throw new Error("No se conecto como el servidor de datos");
        }

        const recibido = await datosPlaneta.json()

        //van para el formualrio
        nombre.value = recibido.name
        Diametro.value = recibido.diameter
        Gravedad.value = recibido.gravity
        Terreno.value = recibido.terrain
        Clima.value = recibido.climate

    } catch(error) {
        alert("No se encontro el planeta ");
        console.log(error);
    }
    
 } 