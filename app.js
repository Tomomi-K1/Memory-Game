const gameContainer = document.getElementById("game");
const resetButton = document.getElementById('reset');

// const COLORS = [
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple"
// ];

const imgs =[
  "img/apple.jpg",
  "img/cute-hamster.jpg",
  "img/green-leaf.jpg",
  "img/nuts.jpg",
  "img/on-wheal.jpg",
  "img/apple.jpg",
  "img/cute-hamster.jpg",
  "img/green-leaf.jpg",
  "img/nuts.jpg",
  "img/on-wheal.jpg"
];



let counter =[];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(imgs);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(imgArray) {
  for (let img of imgArray) {
    // create a new div
    const card = document.createElement("div");
    const newDiv = document.createElement("div");
    const newFrontDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    card.classList.add('card');
    newDiv.classList.add(img);
    // newDiv.classList.add('back');
    newFrontDiv.classList.add('front');
    newFrontDiv.style.backgroundImage = 'url("img/card-pattern.jpg")'
    newFrontDiv.setAttribute('alt', 'Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/s/photos/floral-pattern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' ) 

    // call a function handleCardClick when a div is clicked on
    newFrontDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(card);
    card.append(newFrontDiv);
    card.append(newDiv);
  }
}

// TODO: Implement this function!

// Users should only be able to change at most two cards at a time.
// Clicking on two matching cards should be a “match” — those cards should stay face up. ==>create array and every time clicked. push the target's className. When array becomes length of 2, check if those items are the same. Use splace() to clear array and start over.
// When clicking two cards that are not a match, they should stay turned over for at least 1 second before they hide the color again. You should make sure to use a setTimeout so that you can execute code after one second.


function handleCardClick(event) {
 // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  // Clicking a card should change the background color to be the color of the class it has.
  const backcard =event.target.nextElementSibling
  counter.push(backcard); 
  console.log(counter);
  console.log('backcard-classname', backcard.className);
  
  
  if (counter.length <2 ){
    backcard.parentElement.style.backgroundImage = `url("${backcard.className}"`;
    // backcard.parentElement.style.backgroundColor = backcard.className;
    event.target.parentElement.classList.toggle('flipCard')
    return;
  }
  if (counter.length ===2) {
    // backcard.parentElement.style.backgroundColor = backcard.className;
    backcard.parentElement.style.backgroundImage = `url("${backcard.className}"`;
    event.target.parentElement.classList.toggle('flipCard')
    
    if (counter[0].className===counter[1].className){
      console.log('it matches');
      counter = [];
      return;
    }

    if(counter[0].className!==counter[1].className){
      // backcard.parentElement.style.backgroundColor = backcard.className;
      backcard.parentElement.style.backgroundImage = `url("${backcard.className}"`;
      // event.target.parentElement.classList.toggle('flipCard')
      console.log('it does not match')
      setTimeout(function(){
        for(let i = 0; i < counter.length; i++){
        console.log("counter:", counter[i])
        // counter[i].style.backgroundColor= 'transparent';
        counter[i].parentElement.classList.remove('flipCard')
        }
        counter = [];
      }, 1000)
    
    }
  
  }
}

resetButton.addEventListener('click', function(){
   const allDivs = document.querySelectorAll('.card');
   console.log(allDivs);
   for(let div of allDivs){
    div.remove();
   }
   shuffle(imgs)
   createDivsForColors(shuffledColors);
   
})


// when the DOM loads
createDivsForColors(shuffledColors);

/* */