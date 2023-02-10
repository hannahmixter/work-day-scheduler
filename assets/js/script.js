// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

//-----------------------------------

const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");

const but9Btn = document.querySelector("#hour-9");
but9Btn.addEventListener("click", saveNote);


function saveNote() {
  console.log("hello")
}


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
});


