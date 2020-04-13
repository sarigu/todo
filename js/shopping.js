init();

function init() {
  getTaskDistribution();
  getTodoList();
  getReceipt();
}

//Name of user

function getTaskDistribution() {
  fetch("https://todolists-e3b5.restdb.io/rest/taskdistribution", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      getAssignedName(data);
    });
}

function getAssignedName(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].task === "dropzone-shopping") {
      document.querySelector("#name-placeholder").innerHTML = data[i].name;
    }
  }
}

//Get the collection elements
function getTodoList() {
  fetch("https://todolists-e3b5.restdb.io/rest/shopping", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      //Display collection elements
      data.forEach(showTask);
    });
}

//Get input from input field after the submit button was clicked
let form = document.querySelector("#shopping-form");
form.setAttribute("novalidate", true);
form.addEventListener("submit", e => {
  e.preventDefault();
  let newElem = form.elements.newTask.value;
  //Create an object
  const obj = {
    task: newElem
  };
  post(obj);
  //Empty input field
  form.elements.newTask.value = "";
});

// Display list
function showTask(task) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("p").textContent = task.task;
  clone.querySelector("article").dataset.id = task._id;
  //Remove an element
  clone.querySelector("#remove-btn").addEventListener("click", e => {
    e.target.parentElement.remove();
    deleteTask(task._id);
  });
  //Add data to the main
  document.querySelector("#shopping-tasks").appendChild(clone);
}

//Delete an element by its id
function deleteTask(id) {
  //console.log(id);
  //Backslash at the end of url is important!!!! otherwise id doesn't work
  fetch("https://todolists-e3b5.restdb.io/rest/shopping/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  });
}

//Add the new element to the collection
function post(obj) {
  fetch("https://todolists-e3b5.restdb.io/rest/shopping", {
    method: "post",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      //Show updated collection
      showTask(data);
    });
}

//     Calculator

//Buttons for operations
let addBtn = document.querySelector("#add-button");
let substractBtn = document.querySelector("#substract-button");
let multiplyBtn = document.querySelector("#multiply-button");
let divideBtn = document.querySelector("#divide-button");
let equalBtn = document.querySelector("#equal-button");

//Button for numbers
let nmb0 = document.querySelector("#number0");
let nmb1 = document.querySelector("#number1");
let nmb2 = document.querySelector("#number2");
let nmb3 = document.querySelector("#number3");
let nmb4 = document.querySelector("#number4");
let nmb5 = document.querySelector("#number5");
let nmb6 = document.querySelector("#number6");
let nmb7 = document.querySelector("#number7");
let nmb8 = document.querySelector("#number8");
let nmb9 = document.querySelector("#number9 ");

//Textfield
let display = document.querySelector("#display");
let displayNo1 = document.querySelector("#display-number1");
let displayNo2 = document.querySelector("#display-number2");
let displayOperationSign = document.querySelector("#display-operationsign");

//Others
let result;
let divisionClicked = false;
let additionClicked = false;
let substractionClicked = false;
let multiplicationClicked = false;
let firstNumber = "";
let secondNumber = "";
let first = true;
let second = false;

//Methods

function add() {
  first = false;
  second = true;
  additionClicked = true;
  displayOperationSign.textContent = "+";
}

function substract() {
  first = false;
  second = true;
  substractionClicked = true;
  displayOperationSign.textContent = "-";
}

function multiply() {
  first = false;
  second = true;
  multiplicationClicked = true;
  displayOperationSign.textContent = "*";
}

function divide() {
  first = false;
  second = true;
  divisionClicked = true;
  displayOperationSign.textContent = "/";
}

function displayResult() {
  if (additionClicked == true) {
    result = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (substractionClicked == true) {
    result = parseInt(firstNumber) - parseInt(secondNumber);
  } else if (divisionClicked == true) {
    result = parseInt(firstNumber) / parseInt(secondNumber);
  } else if (multiplicationClicked == true) {
    result = parseInt(firstNumber) * parseInt(secondNumber);
  }
  displayNo1.textContent = result;
  displayNo2.textContent = "";
  displayOperationSign.textContent = "";
  reset();
}

function reset() {
  console.log("reset");
  firstNumber = "";
  secondNumber = "";
  first = true;
  second = false;
  additionClicked = false;
  substractionClicked = false;
  multiplicationClicked = false;
  divisionClicked = false;
}

function add0() {
  if (first == true) {
    firstNumber += "0";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "0";
    displayNo2.textContent = secondNumber;
  }
}

function add1() {
  if (first == true) {
    firstNumber += "1";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "1";
    displayNo2.textContent = secondNumber;
  }
}

function add2() {
  if (first == true) {
    firstNumber += "2";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "2";
    displayNo2.textContent = secondNumber;
  }
}

function add3() {
  if (first == true) {
    firstNumber += "3";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "3";
    displayNo2.textContent = secondNumber;
  }
}

function add4() {
  if (first == true) {
    firstNumber += "4";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "4";
    displayNo2.textContent = secondNumber;
  }
}

function add5() {
  if (first == true) {
    firstNumber += "5";
    display.textContent = firstNumber;
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "5";
    display.textContent = secondNumber;
  }
}

function add6() {
  if (first == true) {
    firstNumber += "6";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "6";
    displayNo2.textContent = secondNumber;
  }
}

function add7() {
  if (first == true) {
    firstNumber += "7";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "7";
    displayNo2.textContent = secondNumber;
  }
}

function add8() {
  if (first == true) {
    firstNumber += "8";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "8";
    displayNo2.textContent = secondNumber;
  }
}

function add9() {
  if (first == true) {
    firstNumber += "9";
    displayNo1.textContent = firstNumber;
  } else {
    secondNumber += "9";
    displayNo2.textContent = secondNumber;
  }
}

//Budget

let addedElem = true;

//Get input from form field after the submit button was clicked
let receipt = document.querySelector("#receipt");
receipt.setAttribute("novalidate", true);
receipt.addEventListener("submit", e => {
  e.preventDefault();
  //Create an object
  const receiptItem = {
    item: receipt.item.value,
    price: receipt.price.value
  };
  //Add the new object to the collection
  postReceipt(receiptItem);
  //Empty both input field
  receipt.item.value = "";
  receipt.price.value = "";
});

function postReceipt(receiptItem) {
  fetch("https://todolists-e3b5.restdb.io/rest/budget", {
    method: "post",
    body: JSON.stringify(receiptItem),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      //Show updated collection
      displayReceipt(data);
    });
}

function displayReceipt(elem) {
  //Assign object (task) data to template elements
  const receiptTemplate = document.querySelector("#receipt-template").content;
  const receiptClone = receiptTemplate.cloneNode(true);
  receiptClone.querySelector("#receipt-item").textContent = elem.item;
  receiptClone.querySelector("#receipt-price").textContent =
    elem.price + " DKK";
  receiptClone.querySelector("#receipt-element").dataset.id = elem._id;
  //Remove an element
  receiptClone.querySelector("#remove-btn").addEventListener("click", e => {
    e.target.parentElement.remove();
    deleteReceipt(elem._id);
    addedElem = false;
    displayTotal(elem.price, addedElem);
  });
  //Add article to list, so it can be displayed
  document.querySelector("#receipt-list").appendChild(receiptClone);
  //Call another function
  addedElem = true;
  displayTotal(elem.price, addedElem);
}

function getReceipt() {
  fetch("https://todolists-e3b5.restdb.io/rest/budget", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      //Display collection elements
      data.forEach(displayReceipt);
    });
}

//Delete an element by its id
function deleteReceipt(id) {
  fetch("https://todolists-e3b5.restdb.io/rest/budget/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  });
}

let sum = 0;
function displayTotal(price, addedElem) {
  if (addedElem == true) {
    sum += parseInt(price);
    document.querySelector("#sum").textContent = sum + " DKK";
  } else {
    sum -= parseInt(price);
    document.querySelector("#sum").textContent = sum + " DKK";
  }
}

function checkItems(ev) {
  console.log("check");
  console.log(ev.target.tagName);
  if (ev.target.tagName === "P" || ev.target.tagName === "ARTICLE") {
    ev.target.classList.toggle("checked");
  }
}
