const apiDog = "https://random.dog/woof.json";

const characterContainer = document.getElementById("CharacterContainer");

const buttonGenerate = document.getElementById("ButtonGenerate");




const fetchData = async (api) =>{
    const res = await fetch(api);
    const data = await res.json();
    return data; 
}

function createCard(character){

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');
    characterContainer.appendChild(cardContainer)


    urlArray = character.url.split('').reverse();
    
    console.log(urlArray);

    if(urlArray[0] == "4" & urlArray[1] == "p" & urlArray[2] == "m" ){
        const imgContainer = document.createElement('video');
        imgContainer.classList.add('imgCard');
        cardContainer.appendChild(imgContainer);
        imgContainer.setAttribute('src',character.url);
    }
    
    else{
        const imgContainer = document.createElement('img');
        imgContainer.classList.add('imgCard');
        cardContainer.appendChild(imgContainer);
        imgContainer.setAttribute('src',character.url);
    }
}

const getAllCharacters = async ()=>{
    const characterData = await fetchData(apiDog);
    console.log(characterData);
    createCard(characterData);
    
}

buttonGenerate.addEventListener('click',getAllCharacters);




