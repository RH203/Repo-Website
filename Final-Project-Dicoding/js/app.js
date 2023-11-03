// Declare variables
const title = document.getElementById("inputBookTitle");
const author = document.getElementById("inputBookAuthor");
const year = document.getElementById("inputBookYear");
const isComplete = document.getElementById("inputBookIsComplete").checked;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const buttonBookSubmit = document.getElementById('bookSubmit'); // Book Submit
const buttonSearchSubmit = document.getElementById('searchSubmit'); // Search submit button
// Declare variables

let time = setInterval(updateTime, 1000); // Time
function updateTime() {
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    dayNow = date.getDay();
  document.getElementById("clock").innerText = `${days[dayNow]} ${hours}:${minutes}:${seconds}`;
}

function init () {
  if (sessionStorage.getItem(title) === null) {
    sessionStorage.setItem(title, "");
  }
  if (sessionStorage.getItem(author) === null) {
    sessionStorage.setItem("author", "");
  }
  if (sessionStorage.getItem(year) === null) {
    sessionStorage.setItem("year", 0);
  }
  if (sessionStorage.getItem(isComplete) === null) {
    sessionStorage.setItem("isComplete", false);
  }
}

window.addEventListener("load", function () { // Initialization session storage
  if (typeof Storage !== "undefined") {
    init();
  } else {
    alert("Browser does not support session storage.");
  }
}); // End function

// Event
buttonBookSubmit.addEventListener('click', function () {
  const titleBook = title.value,
  authorBook = author.value,
  yearBook = year.value,
  isCompleteCheck = isComplete;
  if (titleBook !== null && authorBook !== null && yearBook !== null && isCompleteCheck !== null) {
    sessionStorage.setItem("key", +new Date());
    sessionStorage.setItem("title", titleBook);
    sessionStorage.setItem("author", authorBook);
    sessionStorage.setItem("year",yearBook);
    if (isCompleteCheck === true) {
      sessionStorage.setItem("isComplete", isCompleteCheck);
    } else {
      sessionStorage.setItem("isComplete", isCompleteCheck);
    }
  }
}) // Event