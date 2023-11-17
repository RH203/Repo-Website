// Declare variables
const buttonBookSubmit = document.getElementById("bookSubmit");
const buttonSearchSubmit = document.getElementById("searchSubmit");
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
  document.getElementById(
    "clock"
  ).innerText = `${days[dayNow]} ${hours}:${minutes}:${seconds}`;
}

// Function initialization session storage
function init (title, author, year, isComplete) {
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

// Function finish read
function finishRead () {
  
}



// Function unfinished read
// Function edit book

// Initialization session storage
window.addEventListener("load", function () {
  if (typeof Storage !== "undefined") {
    init();
  } else {
    alert("Browser does not support session storage.");
  }
}); // End function

// Event button submit
buttonBookSubmit.addEventListener("click", function () {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;
  
  if (title === "" && author === "" && year === 0 || isComplete === false) {
    init(title, author, year, isComplete)
  } else {
    sessionStorage.setItem("key", +new Date());
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("year", year);
      if (isComplete === true) {
        sessionStorage.setItem("isCompleted", true);
      } else {
        sessionStorage.setItem("isCompleted", false);
      }
  }
}); // Event submit button end


