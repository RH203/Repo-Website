// Declare variables
const title = document.getElementById("inputBookTitle");
const author = document.getElementById("inputBookAuthor");
const year = document.getElementById("inputBookYear");
const isComplete = document.getElementById("inputBookIsComplete");
// Declare variables

let time = setInterval(updateTime, 1000); // Time
function updateTime() {
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

function init () {
  if (sessionStorage.getItem(title) === null) {
    sessionStorage.setItem(title, "");
  }
  if (sessionStorage.getItem(author) === null) {
    sessionStorage.setItem(author, "");
  }
  if (sessionStorage.getItem(year) === null) {
    sessionStorage.setItem(year, 0);
  }
  if (sessionStorage.getItem(isComplete) === null) {
    sessionStorage.setItem(isComplete, false);
  }
}



window.addEventListener("load", function () { // Initialization session storage
  if (typeof Storage !== "undefined") {
    init();
  } else {
    alert("Browser does not support session storage.");
  }
}); // End function
