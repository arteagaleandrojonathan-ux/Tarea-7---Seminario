/*
API REST libre
    https://pokeapi.co/
    https://thesimpsonsapi.com/
    https://www.omdbapi.com/

Elaborar un ejemplo basico de buscador utilizando uno de estos recursos (o puede ser otro)

*/

const formulario = document.getElementById('formulario')
const id = document.getElementById('idPersonaje')

const nombre = document.getElementById('nombre')
const ocupacion = document.getElementById('ocupacion')
const imagen = document.getElementById('imagen')

formulario.addEventListener('submit', event => {
    event.preventDefault()

    Personaje(id.value)
});

async function Personaje(id) {
    const URL_API = `https://thesimpsonsapi.com/api/characters/${id}`

    try {
        const datosEnviando = await fetch(URL_API)

        if (!datosEnviando.ok) {
            throw new Error("No se encontro el personaje")
        }

        const datosLlegaron = await datosEnviando.json()

        // Mandar los datos al formulario
        nombre.value = datosLlegaron.name
        ocupacion.value = datosLlegaron.occupation

        // Mostrar la imagen
        imagen.src = `https://cdn.thesimpsonsapi.com/500/character/${id}.webp`

    } catch (e) {
        console.log(e);
        alert("No se encontro el personaje ")
    }
}



