/*

Similar al primer ejercicio, solo que buscaremos datos de una nave espacial
 SWAPI (https://swapi.dev/api/starships/9/)

*/

const formulario = document.getElementById('formulario')
const id = document.getElementById('idNave')
const nombre = document.getElementById("NombreNave")
const modelo = document.getElementById('Modelo')
const velocidad = document.getElementById('MaxVelocidad')
const clase = document.getElementById('Clase')
const longitud = document.getElementById('Longitud')

formulario.addEventListener('submit', event => {
event.preventDefault()
    Naves(id.value)
})

async function Naves(id) {
    const url_nave = `https://swapi.info/api/starships/${id}`;

    
    try {

        const datosnave = await fetch(url_nave);

        if(!datosnave.ok){
            alert("ID no registrado")
            throw new Error("No se concecto con el API")
            
        }
        
        
        const ObtenidoDatos = await datosnave.json()

        //Mandar para el formulario
        nombre.value = ObtenidoDatos.name
        modelo.value = ObtenidoDatos.model
        velocidad.value = ObtenidoDatos.max_atmosphering_speed
        clase.value = ObtenidoDatos.starship_class
        longitud.value = ObtenidoDatos.length


    }catch(e){
        console.log(e)
    }
}