let count = 0
let callcount = document.getElementById("count")

function increment(){
    console.log("a pathar was thrown")
    count=count+1
    callcount.innerText = count
    console.log(count)
}
function decrement(){
    if(count == 0)
    {
     count=0;
    }
    else{
    console.log("a pathar was picked up back")
    count -= 1
    console.log(count)
    callcount.innerText = count
}
}
let t1 = document.getElementById("text1")
function save() {
    countstr = count + " || "
    t1.textContent += countstr
}
function reset(){
    count=0
    t1.innerText = "previous entries:"
    callcount.innerText = 0

}
   
// copied js
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
let firstcard = 2
let secondcard =1
let sum = firstcard + secondcard
let message = ""
let isalive = true
let havebbc = false
let messageel = document.getElementById("messageel")
let cardsel = document.querySelector("#cardsel")
let sumel = document.querySelector("#sumel")
function startgame() {
  if(sum<21){
    message = "want to draw another?"
  }
  else if (sum === 21){
    message= "you got a blackdick"
    havebbc= true

  }
  else{
    message="u finished"
    isalive = false
  }
console.log(message)
messageel.textContent= message
sumel.textContent = "sum: " + sum
cardsel.textContent= "cards: " + firstcard +  " " + secondcard

}