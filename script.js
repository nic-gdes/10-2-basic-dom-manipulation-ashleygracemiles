// DOM Manipulation Practice - Lighten up, T. Rex, geez.

// 1. Link your javascript in the HTML above the closing </body> tag.

// 2. Use querySelector to create a variable that contains the page's h1 title, and change the title using textContent into something a bit nicer.

const pageTitle = document.querySelector('#page-title');
pageTitle.textContent = "The Friendliest Dinosaur in the World"

// 3. Use querySelector to create a variable that contains the dinosaur image, and change the src to "./images/cute-dino.jpeg" so he doesn't look so mean. You can change an item's src by just calling the src method (item.src = "new_src";)

const dinoImage = document.querySelector('#dino-img');
dinoImage.src = "./images/cute-dino.jpeg";

// 4. Use querySelector to create a variable for the document body, and change the background color to something less harsh and intense.

const bodyColor = document.querySelector('body');
bodyColor.style.backgroundColor = "#BEEDAA";

// 5. Modify the following array to add at least 3 facts about the T. Rex that aren't so frightening. They don't need to be real facts.

let dinoFacts = [
    "The T-Rex is known for hosting fabulous holiday parties and everyone is welcome.",
    "The T-Rex is an excellent dancer and holds the world title for #1 ballroom dancer.",
    "The T-Rex was born on June 14, 400 B.C."
]

// 6. Replace the facts on the page with our new array of facts:

// 6.1 First, use querySelector to create a variable for the list.

const factsList = document.querySelector('#facts');

// 6.2 Then, remove all of the current content by setting your list variable's innerHTML to a blank string (variable.innerHTML = "")

factsList.innerHTML = "";

// 6.3 Then loop through the dinoFacts array, and appendChild each fact to the list variable. Remember you can loop through an array by using array.length to get the total number of items in the array to end the loop;

for (let i = 0; i < dinoFacts.length; i++) {
    let currentFact = dinoFacts[i];
    const newItem = document.createElement('li');
    newItem.classList.add('fact-item');
    newItem.textContent = currentFact;
    factsList.appendChild(newItem);
}