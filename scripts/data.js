

let urlAPI = "https://rickandmortyapi.com/api/character";

// fetch(urlAPI)
//     .then(response => response.json())
//         .then(data => {
//             // throw new Error('😮 Explotó todo 😮')
//             // console.log(data.results)
//             let personajes = data.results;
//             console.log(personajes)
//         })
//     // Capturo los errores
//     .catch(error => console.log(error));


// // console.log(personajes);



// ============= === fx Asincronica  === ==================

async function getData(){
    try{
        // throw new Error()
        let respuesta = await fetch(urlAPI);
        //console.log(respuesta);
        let datos = await respuesta.json();
        //console.log(datos.results)
        creaCards(datos);
        creaButtons();
    } catch {
        console.log('Ocurrio un error con la API 😫')
    }
}

getData();



