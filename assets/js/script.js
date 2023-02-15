//the code below gets the current day and adds it to the page
const dayJsObject = dayjs();
const todaysDate = dayJsObject.format("dddd, MMMM D");
document.getElementById('currentDay').innerHTML = todaysDate;


//the code below gets the hour and changes the class of each hour block according to the hour
const currentHour = dayJsObject.format("H");

function updateClass(x,y) {
  if (currentHour < x) {
    document.getElementById(y).className = "future row time-block";
  } else if (currentHour == x) {
    document.getElementById(y).className = "present row time-block";
  } else if (currentHour > x) {
    document.getElementById(y).className = "past row time-block";
  }
}
updateClass(9,'hour-9')
updateClass(10,'hour-10')
updateClass(11,'hour-11')
updateClass(12,'hour-12')
updateClass(13,'hour-1')
updateClass(14,'hour-2')
updateClass(15,'hour-3')
updateClass(16,'hour-4')
updateClass(17,'hour-5')


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//creates variables for the text areas
const nineAm = document.getElementById("9");
const tenAm = document.getElementById("10");
const elevenAm = document.getElementById("11");
const twelvePm = document.getElementById("12");
const onePm = document.getElementById("1");
const twoPm = document.getElementById("2");
const threePm = document.getElementById("3");
const fourPm = document.getElementById("4");
const fivePm = document.getElementById("5");

//code for the buttons which execute the saveNote functions when clicked
const but9Btn = document.querySelector("#hour-9");
but9Btn.addEventListener("click", saveNote9);
const but10Btn = document.querySelector("#hour-10");
but10Btn.addEventListener("click", saveNote10);
const but11Btn = document.querySelector("#hour-11");
but11Btn.addEventListener("click", saveNote11);
const but12Btn = document.querySelector("#hour-12");
but12Btn.addEventListener("click", saveNote12);
const but1Btn = document.querySelector("#hour-1");
but1Btn.addEventListener("click", saveNote1);
const but2Btn = document.querySelector("#hour-2");
but2Btn.addEventListener("click", saveNote2);
const but3Btn = document.querySelector("#hour-3");
but3Btn.addEventListener("click", saveNote3);
const but4Btn = document.querySelector("#hour-4");
but4Btn.addEventListener("click", saveNote4);
const but5Btn = document.querySelector("#hour-5");
but5Btn.addEventListener("click", saveNote5);

//functions which save the inputs from the text areas to local storage
function saveNote9() {
  if (event.target.tagName == "I") {
    localStorage.setItem("9am", nineAm.value);
  }
}
function saveNote10() {
  if (event.target.tagName == "I") {
    localStorage.setItem("10am", tenAm.value);
  }
}
function saveNote11() {
  if (event.target.tagName == "I") {
    localStorage.setItem("11am", elevenAm.value);
  }
}
function saveNote12() {
  if (event.target.tagName == "I") {
    localStorage.setItem("12pm", twelvePm.value);
  }
}
function saveNote1() {
  if (event.target.tagName == "I") {
    localStorage.setItem("1pm", onePm.value);
  }
}
function saveNote2() {
  if (event.target.tagName == "I") {
    localStorage.setItem("2pm", twoPm.value);
  }
}
function saveNote3() {
  if (event.target.tagName == "I") {
    localStorage.setItem("3pm", threePm.value);
  }
}
function saveNote4() {
  if (event.target.tagName == "I") {
    localStorage.setItem("4pm", fourPm.value);
  }
}
function saveNote5() {
  if (event.target.tagName == "I") {
    localStorage.setItem("5pm", fivePm.value);
  }
} 

//gets the inputs from local storage and saves them to the text areas
nineAm.innerHTML = localStorage.getItem("9am");
tenAm.innerHTML = localStorage.getItem("10am");
elevenAm.innerHTML = localStorage.getItem("11am");
twelvePm.innerHTML = localStorage.getItem("12pm");
onePm.innerHTML = localStorage.getItem("1pm");
twoPm.innerHTML = localStorage.getItem("2pm");
threePm.innerHTML = localStorage.getItem("3pm");
fourPm.innerHTML = localStorage.getItem("4pm");
fivePm.innerHTML = localStorage.getItem("5pm");

