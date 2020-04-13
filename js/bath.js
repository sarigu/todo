init();

function init() {
  getTaskDistribution();
  getTodoList();
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
    if (data[i].task === "dropzone-bath") {
      document.querySelector("#name-placeholder").innerHTML = data[i].name;
    }
  }
}

//Bath

//Get the collection elements
function getTodoList() {
  fetch("https://todolists-e3b5.restdb.io/rest/bathroom", {
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
let form = document.querySelector("#bath-form");
form.setAttribute("novalidate", true);
form.addEventListener("submit", e => {
  e.preventDefault();
  let newElem = form.elements.newTask.value;
  //Create an object
  const obj = {
    task: newElem
  };
  //Add the new element to the collection
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
  document.querySelector("#bath-tasks").appendChild(clone);
}

//Delete an element by its id
function deleteTask(id) {
  //console.log(id);
  //Backslash at the end of url is important!!!! otherwise id doesn't work
  fetch("https://todolists-e3b5.restdb.io/rest/bathroom/" + id, {
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
  fetch("https://todolists-e3b5.restdb.io/rest/bathroom", {
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

function checkItems(ev) {
  console.log("check");
  console.log(ev.target.tagName);
  if (ev.target.tagName === "P" || ev.target.tagName === "ARTICLE") {
    ev.target.classList.toggle("checked");
  }
}
