//Drag and Drop
let container = document.querySelector("#dropzone-container");
let draggedName;
let taskDistributionArr = [];

function allowDrop(ev) {
  ev.preventDefault();
  console.log("allow drop");
  console.log(ev.target);
}

function drag(ev) {
  //console.log(ev.target.id);
  draggedName = ev.target.id;
}

function drop(ev) {
  //console.log(ev.target.id);
  ev.preventDefault();
  ev.target.appendChild(document.getElementById(draggedName));
  //console.log(draggedName);
  let name = document.getElementById(draggedName).innerHTML;
  //console.log(document.getElementById(draggedName).innerHTML);

  const obj = {
    task: ev.target.id,
    name: name.trim()
  };

  console.log(obj);

  postTaskDistribution(obj);
}

//Add the task distribution to the collection
function postTaskDistribution(obj) {
  //console.log("post");
  fetch("https://todolists-e3b5.restdb.io/rest/taskdistribution", {
    method: "post",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  });
}

//On page load
document.addEventListener("DOMContentLoaded", init);

function init() {
  //console.log("init");
  getTaskDistribution();
  getNotes();
}

//Get Data from database
function getTaskDistribution() {
  //console.log("get data");
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
      //console.log(data);
      taskDistributionArr.push(data);
      // console.log(taskDistributionArr);
      checkPlacement(data);
    });
}

//Check placement of names

function checkPlacement(data) {
  let name1 = document.querySelector("#name1").textContent.trim();
  let name2 = document.querySelector("#name2").textContent.trim();
  let name3 = document.querySelector("#name3").textContent.trim();
  let name4 = document.querySelector("#name4").textContent.trim();
  let name1Elem = document.querySelector("#name1");
  let name2Elem = document.querySelector("#name2");
  let name3Elem = document.querySelector("#name3");
  let name4Elem = document.querySelector("#name4");
  let dropzoneCooking = document.querySelector("#dropzone-cooking");
  let dropzoneShopping = document.querySelector("#dropzone-shopping");
  let dropzoneBath = document.querySelector("#dropzone-bath");
  let dropzoneKitchen = document.querySelector("#dropzone-kitchen");

  //console.log("check placement");
  for (let i = 0; i < data.length; i++) {
    // /console.log(data[i]);
    if (data[i].task === "dropzone-cooking") {
      if (data[i].name === name1) {
        dropzoneCooking.appendChild(name1Elem);
        name1Elem.style.left = dropzoneCooking.style.left;
        name1Elem.style.top = dropzoneCooking.style.top;
      } else if (data[i].name === name2) {
        dropzoneCooking.appendChild(name2Elem);
        name2Elem.style.left = dropzoneCooking.style.left;
        name2Elem.style.top = dropzoneCooking.style.top;
      } else if (data[i].name === name3) {
        dropzoneCooking.appendChild(name3Elem);
        name3Elem.style.left = dropzoneCooking.style.left;
        name3Elem.style.top = dropzoneCooking.style.top;
      } else if (data[i].name === name4) {
        dropzoneCooking.appendChild(name4Elem);
        name4Elem.style.left = dropzoneCooking.style.left;
        name4Elem.style.top = dropzoneCooking.style.top;
      }
    } else if (data[i].task === "dropzone-shopping") {
      if (data[i].name === name1) {
        dropzoneShopping.appendChild(name1Elem);
        name1Elem.style.left = dropzoneShopping.style.left;
        name1Elem.style.top = dropzoneShopping.style.top;
      } else if (data[i].name === name2) {
        dropzoneShopping.appendChild(name2Elem);
        name2Elem.style.left = dropzoneShopping.style.left;
        name2Elem.style.top = dropzoneShopping.style.top;
      } else if (data[i].name === name3) {
        dropzoneShopping.appendChild(name3Elem);
        name3Elem.style.left = dropzoneShopping.style.left;
        name3Elem.style.top = dropzoneShopping.style.top;
      } else if (data[i].name === name4) {
        dropzoneShopping.appendChild(name4Elem);
        name4Elem.style.left = dropzoneShopping.style.left;
        name4Elem.style.top = dropzoneShopping.style.top;
      }
    } else if (data[i].task === "dropzone-bath") {
      if (data[i].name === name1) {
        dropzoneBath.appendChild(name1Elem);
        name1Elem.style.left = dropzoneBath.style.left;
        name1Elem.style.top = dropzoneBath.style.top;
      } else if (data[i].name === name2) {
        dropzoneBath.appendChild(name2Elem);
        name2Elem.style.left = dropzoneBath.style.left;
        name2Elem.style.top = dropzoneBath.style.top;
      } else if (data[i].name === name3) {
        dropzoneBath.appendChild(name3Elem);
        name3Elem.style.left = dropzoneBath.style.left;
        name3Elem.style.top = dropzoneBath.style.top;
      } else if (data[i].name === name4) {
        dropzoneBath.appendChild(name4Elem);
        name4Elem.style.left = dropzoneBath.style.left;
        name4Elem.style.top = dropzoneBath.style.top;
      }
    } else if (data[i].task === "dropzone-kitchen") {
      if (data[i].name === name1) {
        dropzoneKitchen.appendChild(name1Elem);
        name1Elem.style.left = dropzoneKitchen.style.left;
        name1Elem.style.top = dropzoneKitchen.style.top;
      } else if (data[i].name === name2) {
        dropzoneKitchen.appendChild(name2Elem);
        name2Elem.style.left = dropzoneKitchen.style.left;
        name2Elem.style.top = dropzoneKitchen.style.top;
      } else if (data[i].name === name3) {
        dropzoneKitchen.appendChild(name3Elem);
        name3Elem.style.left = dropzoneKitchen.style.left;
        name3Elem.style.top = dropzoneKitchen.style.top;
      } else if (data[i].name === name4) {
        dropzoneKitchen.appendChild(name4Elem);
        name4Elem.style.left = dropzoneKitchen.style.left;
        name4Elem.style.top = dropzoneKitchen.style.top;
      }
    }
  }
}

//Delete Task Distribution to make a new one
function deleteTaskDistribution() {
  //console.log("delete");
  for (let i = 0; i < taskDistributionArr.length; i++) {
    //console.log(taskDistributionArr[i]._id);
    let id = taskDistributionArr[i]._id;
    fetch("https://todolists-e3b5.restdb.io/rest/taskdistribution/" + id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5cb4884b814cf93287673239",
        "cache-control": "no-cache"
      }
    });
    location.reload();
  }
}

//Notes

function makeNote() {
  console.log("note");
  let note = document.querySelector("#note-txt").value;
  //console.log(note);
  const noteObj = {
    text: note,
    color: "transparent"
  };
  post(noteObj);
  //Empty input field
  note = "";
}

//Add a new note to the notes collection
function post(note) {
  //console.log("post");
  fetch("https://todolists-e3b5.restdb.io/rest/notes", {
    method: "post",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      displayNote(data);
    });
}

function displayNote(note) {
  console.log("display");
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("p").textContent = note.text;
  clone.querySelector("div").dataset.id = note._id;
  clone.querySelector("div").style.backgroundColor = "transparent";

  //Remove a note
  clone.querySelector("i").addEventListener("click", e => {
    e.target.parentElement.remove();
    deleteNote(note._id);
  });

  //Add a note to the main
  document.querySelector("#notes-container").appendChild(clone);
}

//Get the note collection's data
function getNotes() {
  fetch("https://todolists-e3b5.restdb.io/rest/notes", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      data.forEach(displayNote);
    });
}

//Delete notes by its id
function deleteNote(id) {
  //console.log(id);
  fetch("https://todolists-e3b5.restdb.io/rest/notes/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cb4884b814cf93287673239",
      "cache-control": "no-cache"
    }
  });
}
