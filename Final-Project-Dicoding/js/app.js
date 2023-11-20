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
const title = document.getElementById("inputBookTitle").value;
const author = document.getElementById("inputBookAuthor").value;
const year = document.getElementById("inputBookYear").value;
const isComplete = document.getElementById("inputBookIsComplete").checked;

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
    sessionStorage.setItem("isComplete", "false");
  }
}

// Function to check whether the book has been read or not
function checkBook () {
  if (sessionStorage.getItem('isCompleted') === "true") {
    incompleteBookshelfList.removeAttribute('hidden');
    let incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    let titleIncompleteList = document.querySelector('titleIncompleteList');
    let authorIncompleteList = document.querySelector('authorIncompleteList');
    let yearIncompleteList = document.querySelector('yearIncompleteList');
    titleIncompleteList.innerText = sessionStorage.getItem('title');
    authorIncompleteList.innerText = "Penulis:" + sessionStorage.getItem('author');
    yearIncompleteList.innerText = "Tahun: " + sessionStorage.getItem('year');
  }
  if (sessionStorage.getItem('isCompleted') === "false") {

  }
}



// Function unfinished read
// Function edit book
function editIncomplteBookShelfList () {
  let editIncomplete = document.getElementById('editIncompleteBookshelfList');
  let incompleteBookshelfList = document.getElementById('incompleteBookshelfList')

  editButtonIncomplete.addEventListener('click', function () {
    if (editIncomplete.hasAttribute('hidden')) {
      editIncomplete.removeAttribute('hidden');
      incompleteBookshelfList.setAttribute('hidden', 'true');
    }
  })
} // End function

// Initialization session storage
window.addEventListener("load", function () {
  if (typeof Storage !== "undefined") {
    init(title, author, year, isComplete);
  } else {
    alert("Browser does not support session storage.");
  }
}); // End function

// Event button submit
buttonBookSubmit.addEventListener("click", function () {
  let key = +new Date().getTime();
  if(sessionStorage.getItem(key) ===  )
    // sessionStorage.setItem("key", key);
    // sessionStorage.setItem("title", title);
    // sessionStorage.setItem("author", author);
    // sessionStorage.setItem("year", year);
    //   if (isComplete === true) {
    //     sessionStorage.setItem("isCompleted", "true");
    //   } else {
    //     sessionStorage.setItem("isCompleted", "false");
    //   }
}); // Event submit button end

// Event button edit incomplete
editButtonIncomplete.addEventListener('click', function () {
  editIncomplteBookShelfList();
})
