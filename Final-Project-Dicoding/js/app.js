// Declare variables
const buttonBookSubmit = document.getElementById("bookSubmit");
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
  const date = new Date();
  const hours = date.getHours(),
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
function addValue () {
  let title = document.getElementById("inputBookTitle").value;
  let author = document.getElementById("inputBookAuthor").value;
  let year = document.getElementById("inputBookYear").value;
  let isComplete = document.getElementById("inputBookIsComplete").checked;
  let key = +new Date();

  sessionStorage.setItem("key", key); 
  sessionStorage.setItem("title", title);
  sessionStorage.setItem("author", author); 
  sessionStorage.setItem("year", year); 
  sessionStorage.setItem("isComplete", isComplete);
}

// Function incomplete read
function inCompleteRead () {
  let inCompleteTitle = document.querySelector("titleIncompleteList");
  let inCompleteAuthor = document.querySelector("authorIncompleteList");
  let inCompleteYear = document.querySelector("yearIncompleteList");
  inCompleteTitle.innerText = sessionStorage.getItem("title");
  inCompleteAuthor.innerText = `Author: ${sessionStorage.getItem("author")}`;
  inCompleteYear.innerText = `Year: ${sessionStorage.getItem("year")}`;    
}

// Function complete read
function completeRead () {
  let completeTitle = document.querySelector("titleCompleteList");
  let completeAuthor = document.querySelector("authorCompleteList");
  let completeYear = document.querySelector("yearCompleteList");
  completeTitle.innerText = sessionStorage.getItem("title");
  completeAuthor.innerText = `Author: ${sessionStorage.getItem("author")}`;
  completeYear.innerText = `Year: ${sessionStorage.getItem("year")}`;     
}

// Initialize 
window.addEventListener('load', function () {
  typeof(Storage) !== "undefined" ? init() : console.log(`Browser tidak support`);
})

// Button submit
buttonBookSubmit.addEventListener('click', function () {
  addValue();
  sessionStorage.getItem("isComplete") == false ? 
  (document.querySelector("inCompleteHidden").removeAttribute("hidden"), inCompleteRead()):
  (document.querySelector("completeHidden").removeAttribute("hidden"), completeRead());
})