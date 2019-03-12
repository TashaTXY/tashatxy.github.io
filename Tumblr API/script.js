
const buttons = document.getElementById('buttons');
const grid = document.querySelector('.grid')
const tagNames = ['flowers', 'design', 'animals','shiba','landscape', 'food', 'mugs', 'city'];

//create buttons based on tags
for (let i = 0; i < tagNames.length; i++) {
    let newButton = document.createElement('button');
    newButton.innerHTML = tagNames[i];
    newButton.classList.add('btn');
    newButton.classList.add('btn-outline-dark');
    newButton.classList.add('m-3');
    newButton.classList.add('font-size');
    buttons.appendChild(newButton);
}

//randomises the images shown
let randomIndex = Math.floor(Math.random() * tagNames.length);
let tag = tagNames[randomIndex];

fetch ('https://api.tumblr.com/v2/tagged?tag='+ tag +'&api_key=kOBU5tFQaOu1uxeAvIBECFwHUyx6DUZA1KXM5UOTFJ4WEq8mNm')
.then(function(response) {
    return response.json();
})
.then(function(result){
    let items = result.response;

    for (let i = 0; i < 20; i++) {
        if (items[i].photos != undefined) {
            const imgSrc= items[i].photos[0].original_size.url;
            const img = document.createElement('img');
            img.src = imgSrc;

            grid.appendChild(img);
        }
    }
})
.catch(function(err){
    window.alert("ERROR! Please reload the page :(")
})

// what happens after user clicks on button
buttons.onclick = function(event) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == tag) {
        alert('Yay!');
        location.reload();
    } else {
        alert('Wrong!');
        location.reload();
    }
}

window.onscroll = function scrollFunction() {
    const guessTheTag = document.querySelector(".text-center");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        guessTheTag.style.fontSize = "20";
    } else {
        guessTheTag.style.fontSize = "40";
    }
}
