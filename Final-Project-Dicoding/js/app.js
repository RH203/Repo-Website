// Declare variables
const buttonBookSubmit = document.getElementById("inputBook");
const buttonSearchSubmit = document.getElementById("searchSubmit");
const editButtonIncomplete = document.getElementById('editButtonIncomplete');
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // days

// Function Time
let time = setInterval(updateTime, 1000);
function updateTime() {
  let date = new Date();
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    dayNow = date.getDay();
  document.getElementById("clock").innerText = `${days[dayNow]} ${hours}:${minutes}:${seconds}`;
}

// Function initialize 
function init () {
  if(sessionStorage.getItem("key") === null ) { sessionStorage.setItem("key", 0); }
  if(sessionStorage.getItem("title") === null ) { sessionStorage.setItem("title", ""); }
  if(sessionStorage.getItem("author") === null ) { sessionStorage.setItem("author", ""); }
  if(sessionStorage.getItem("year") === null ) { sessionStorage.setItem("year", 0); }
  if(sessionStorage.getItem("isComplete") === null ) { sessionStorage.setItem("isComplete", false); }
}

// function setItem
// function addValue () {
//   let title = document.getElementById("inputBookTitle").value;
//   let author = document.getElementById("inputBookAuthor").value;
//   let year = document.getElementById("inputBookYear").value;
//   let isComplete = document.getElementById("inputBookIsComplete").checked;
//   let key = +new Date();

//   sessionStorage.setItem("key", JSON.stringify(key)); 
//   sessionStorage.setItem("title", JSON.stringify(title));
//   sessionStorage.setItem("author", JSON.stringify(author)); 
//   sessionStorage.setItem("year", JSON.stringify(year)); 
//   sessionStorage.setItem("isComplete", JSON.stringify(isComplete));
// }
let addValue = () => {
  
}
document.getElementById("inputBookTitle").sessionStorage.setItem("key", JSON.stringify(key));

// Function incomplete read
function inCompleteRead () {
  document.querySelector(".inCompleteHidden").style.display = "block";
  document.getElementsByClassName("inCompleteTitle").innerHTML = `${}`;
  document.getElementsByClassName("inCompleteAuthor").innerText = `Author: ${sessionStorage.getItem("author")}`;
  document.getElementsByClassName("inCompleteYear").innerText = `Year: ${sessionStorage.getItem("year")}`;
}

// Function complete read
function completeRead () {
  document.querySelector(".completeHidden").style.display = "block";
  document.getElementsByClassName("completeTitle").innerText = `${sessionStorage.getItem("title")}`;
  document.getElementsByClassName("completeAuthor").innerText = `Author: ${sessionStorage.getItem("author")}`;
  document.getElementsByClassName("completeYear").innerText = `Year: ${sessionStorage.getItem("year")}`;    
}

// Initialize 
window.addEventListener('load', function (event) {
  typeof(Storage) !== "undefined" ? init() : console.log(`Browser tidak support`);
  document.querySelector(".inCompleteHidden").style.display = "none";
  document.querySelector(".completeHidden").style.display = "none";
  document.querySelector("#editIncompleteBookshelfList").style.display = "none";
  document.querySelector("#editCompleteBookshelfList").style.display = "none";
})

// Button submit
buttonBookSubmit.addEventListener('submit', function (event) {
  event.preventDefault(); 
  addValue();
  sessionStorage.getItem("isComplete") == false ? inCompleteRead() : completeRead();
})