let contador = 1;

function creaCards(arr){
    let contenedor = document.getElementById('cardContainer')
    // console.log(arr.results)
    arr.results.forEach(personaje => {
        let div = document.createElement('div');
        div.innerHTML = 
        `<div class=card>
            <h2 class = "nombre">${personaje.name}</h2>
            <img src="${personaje.image}" alt="">
            <p class = "species">${personaje.species}<p>
        </div>`;

        contenedor.appendChild(div)
    })
}

function creaButtons(){

    let contenedor = document.getElementById('cardContainer');
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    let prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.innerText = 'Prev.';
    prevButton.addEventListener('click', () => 
                                            {contador -= 1;
                                                if(contador < 1){contador = 1};
                                            contenedor.innerHTML = '';
                                            urlAPI = `https://rickandmortyapi.com/api/character?page=${contador}`;
                                            getData()})



    let nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => 
                                            {contador += 1;
                                            contenedor.innerHTML = '';
                                            urlAPI = `https://rickandmortyapi.com/api/character?page=${contador}`;
                                            getData()})

    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);
    contenedor.appendChild(buttonContainer);
    
}
