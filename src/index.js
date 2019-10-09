console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreed = document.querySelector('#dog-breeds')

let allBreeds = []

function createElementForBreed(breed){
    
    dogBreed.addEventListener('click', function(e){
        if(e.target.tagName === "LI"){
            if(e.target.style.color === "red"){
                e.target.style.color = "black"
            }
            else{
                e.target.style.color = "red"
            }
        }
    })
    const li = document.createElement('li')
    li.innerText = breed
    li.style.color = "black"
    dogBreed.append(li)
}

loadPhotos()
loadDogBreeds()
loadAlphabet()

function loadAlphabet(){
    const breedDropDown = document.querySelector('#breed-dropdown')
    // let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    breedDropDown.addEventListener('change', function(e){
        //clear out the dogBreed UL before creating elements for match
        dogBreed.innerHTML = ""
        allBreeds.forEach(breed => {
            if(breed[0] === e.target.value){
                createElementForBreed(breed)
            }
        })
    })
}

function loadPhotos(){
    const dogImageContainer = document.querySelector('#dog-image-container')
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(dog => {
            const img = document.createElement('img')
            img.style.width = "200px"
            img.style.height = "200px"
            img.src = dog
            dogImageContainer.append(img)
        })
    })
}

function loadDogBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        allBreeds = Object.keys(data.message)
        // Object.keys(data.message).forEach(breed => { 
        //     const li = document.createElement('li')
        //     li.innerText = breed
        //     dogBreed.append(li)
        // })
    })
} 