init();

function init() {
  getTaskDistribution();
  getDinner();
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
    if (data[i].task === "dropzone-cooking") {
      document.querySelector("#name-placeholder").innerHTML = data[i].name;
    }
  }
}

//Lunchplan

//Get input from form field after the submit button was clicked
let form = document.querySelector("#cooking-form");
form.setAttribute("novalidate", true);
form.addEventListener("submit", e => {
  e.preventDefault();
  const obj = {
    day: form.elements.weekday.value,
    dinner: form.elements.dinner.value
  };
  post(obj);
  //Empty input field
  form.elements.dinner.value = "";
});

//Add the new element to the collection
function post(obj) {
  fetch("https://todolists-e3b5.restdb.io/rest/cooking", {
    method: "post",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  });
  getDinner();
}
//Get the collection elements
function getDinner() {
  fetch("https://todolists-e3b5.restdb.io/rest/cooking", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      showTable(data);
    });
}

// Display dinner
function showTable(dinner) {
  for (let i = 0; i < dinner.length; i++) {
    if (dinner[i].day === "monday") {
      document.querySelector("#dinner-monday").textContent = dinner[i].dinner;
    } else if (dinner[i].day === "tuesday") {
      document.querySelector("#dinner-tuesday").textContent = dinner[i].dinner;
    } else if (dinner[i].day === "wednesday") {
      document.querySelector("#dinner-wednesday").textContent =
        dinner[i].dinner;
    } else if (dinner[i].day === "thursday") {
      document.querySelector("#dinner-thursday").textContent = dinner[i].dinner;
    } else if (dinner[i].day === "friday") {
      document.querySelector("#dinner-friday").textContent = dinner[i].dinner;
    } else if (dinner[i].day === "saturday") {
      document.querySelector("#dinner-saturday").textContent = dinner[i].dinner;
    } else if (dinner[i].day === "sunday") {
      document.querySelector("#dinner-sunday").textContent = dinner[i].dinner;
    }
  }
}
