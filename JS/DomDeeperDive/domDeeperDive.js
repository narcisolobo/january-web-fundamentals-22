// var title = document.querySelector('#title');
var box = document.getElementById('box');
// console.log(box);
var counter = 0;
box.innerText = counter

function display(element){
  console.log(element.innerText);
}

function changeText(element){
  element.innerText = "You clicked me."
}

function changeBg(element){
  element.style.backgroundColor = "green"
}

function hoverOver(element) {
  element.style.backgroundColor = "rebeccapurple"
}

function hoverOut(element) {
  element.style.backgroundColor = "coral"
}

function increment(){
  counter++;
  box.innerText = counter;
}

function changePic(element){
  var temp = element.src
  element.src = element.getAttribute('altsrc')
  element.setAttribute('altsrc', temp)
  console.log(element);
}