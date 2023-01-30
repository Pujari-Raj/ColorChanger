//function for generating random number

function generateRandomString(text = "#") {
    let randomString  = '';
    let characters = 'ABCDEF0123456789';

    for ( let i = 0; i < 6; i++ ) {
      randomString += characters.charAt(Math.floor(Math.random()*characters.length));
   }
   return `${text}${randomString}`;
}

//// Gathering all html elements using Id
let colorBtn = document.getElementById("button");
let backgrounddiv = document.getElementById("canvas");

// adding event listenrr to button(convert) on click
colorBtn.addEventListener("click", () => {
    console.log('clicked!!!');
    backgrounddiv.style.backgroundColor = generateRandomString();
})