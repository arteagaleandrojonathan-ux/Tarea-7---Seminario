/*

Utilizaremos el API Dragon Ball. Se colocara en una caja de texto el ID del personaje.
 Al pulsar en buscar nos devolvera 3 elementos: Nombre, descripcion y su imagen.

*/
const formulario = document.getElementById('formulario')
const id = document.getElementById('idHeroe')
const nombre = document.getElementById('nombre')
const descripcion = document.getElementById('descripcion')
const imagen = document.getElementById('imagen')

formulario.addEventListener("submit", event =>{
event.preventDefault()
    Heroe(id.value)
})


async function Heroe(id) {
    const URL_API = `https://dragonball-api.com/api/characters/${id}`

    try {

        const datosenviando = await fetch(URL_API)

        if(!datosenviando.ok){
            throw new Error("No se concecto con el API")
            
        }

        const datosllego = await datosenviando.json()

        //Mandar para el formulario
        nombre.value = datosllego.name
        descripcion.value = datosllego.description
        imagen.src = datosllego.image

    }catch(e){
        console.log(e)
    }
    
}

