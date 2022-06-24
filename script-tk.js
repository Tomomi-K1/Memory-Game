const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
  // console.log("first", counter);

  // While there are elements in the array
  while (counter > 0) { //10
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // console.log("index",index);

    // Decrease counter by 1
    counter--;
    // console.log(counter);

    // And swap the last element with it
    let temp = array[counter]; //9
    array[counter] = array[index];
    array[index] = temp;
    // console.log(temp);
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
    console.log(shuffledColors);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
   
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

const count = [];

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  // obj[`${event.target.className}`] = event.target.className;
  // if(obj[`${event.target.className}`] === undefined) {
  //   obj[`${event.target.className}`] = 1;
  // } else {
  //   obj[`${event.target.className}`]++;
  // }
  // console.log(obj);
  
   
  // let divWhColor = Array.from(document.querySelectorAll('div[style]'));
  // console.log("divwith color", divWhColor);
    // event.target.style.backgroundColor = event.target.className;
    // divWhColor.push(event.target.className);

    // if (divWhColor.length < 2){
    //       event.target.style.backgroundColor = event.target.className;
    //       // console.log(event);
    //       // console.log(event.target);
    //       // console.log(event.target.className);
    //       divWhColor.push(event.target);
    //       console.log("1", divWhColor);
    // } else if (divWhColor.length === 2){
    //   for(let i = 0; i < 2; i++){
    //     if(divWhColor[0] !== divWhColor[1]){
    //         setTimeout(function(){
    //         document.removeAttribute('style')
    //         console.log(divWhColor);
    //       }, 1000)
    //     } else {
    //       divWhColor.slice(0, 2);
    //       console.log("when Matched", divWhColor);
    //     } 
    //   }
    // }



    // if (divWhColor.length < 2){
      
    //   // console.log(event);
    //   // console.log(event.target);
    //   // console.log(event.target.className);
    //   divWhColor.push(event.target.className);
    //   console.log("1", divWhColor, divWhColor[0], divWhColor[1], divWhColor.length);
      
            
    // } else if (divWhColor.length === 2){
      
    //   divWhColor.push(event.target.className);
    //   console.log(divWhColor, divWhColor[0], divWhColor[1]);
    //     if(divWhColor[0] !== divWhColor[1]){
    //       setTimeout(function(){
    //         for(let i = 0; i < 2; i++){
    //           divWhColor[i].removeAttribute('style')
    //         }        
             
    //       }, 1000)

    //       // divWhColor.splice(0, 2);
          
    //     }
    
      
      
      
      // for(let i = 0; i < 2; i++){
      //   if(divWhColor[0] !== divWhColor[1]){
      //       setTimeout(function(){
      //       divWhColor[i].removeAttribute('style')
      //       console.log(divWhColor);
      //     }, 1000)
      //   } else {
      //     divWhColor.pop(divWhColor[i]);
      //     console.log("when Matched", divWhColor);
      //   } 
      // }
  
























  let divWhColor = Array.from(document.querySelectorAll('div[style]'));
  console.log("divwith color", divWhColor);
  count.push(1)
    if (count.length < 2){
      event.target.style.backgroundColor = event.target.className;
      // console.log(event);
      // console.log(event.target);
      // console.log(event.target.className);
      
      console.log(count);

    } else if (count.length === 2){
      // event.target.style.backgroundColor = event.target.className;
      for(let i = 0; i < 2; i++){
        if(divWhColor[0].className !== divWhColor[1].className){
            setTimeout(function(){
            divWhColor[i].removeAttribute('style')
            console.log(divWhColor);
          }, 1000)
        } else {
          count.splice(0,2);
          
          console.log("when Matched", divWhColor);
        } 
      }
    }
  }

// when the DOM loads
createDivsForColors(shuffledColors);

/* */
//every time user clicks, keep the counter. When the counter reached to 2
//need to remove the background color.