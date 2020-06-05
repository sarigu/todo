const changer = document.querySelector("#color-changer input");
const bodyTag = document.querySelector("body");

document.addEventListener("DOMContentLoaded", init);

function init() {
  //console.log("init");

  if (sessionStorage.backgroundColor) {
    bodyTag.style.backgroundColor = sessionStorage.backgroundColor;
    let color = chroma(sessionStorage.backgroundColor);
    if (color.luminance() < 0.3) {
      //console.log("hello");
      root.style.setProperty("--main-color", "#ffffff");
      root.style.setProperty("--hover-color", "#e6e6e6");
      //console.log(root);
    } else {
      root.style.setProperty("--main-color", "#000000");
      root.style.setProperty("--hover-color", "#666666");
    }
  } else {
    bodyTag.style.backgroundColor = "#ebebf7";
  }
}

let root = document.documentElement;

changer.addEventListener("input", function() {
  bodyTag.style.backgroundColor = changer.value;

  console.log(changer.value);
  console.log("click");

  let color = chroma(changer.value);

  sessionStorage.backgroundColor = changer.value;

  if (color.luminance() < 0.3) {
    //console.log("hello");
    root.style.setProperty("--main-color", "#ffffff");
    root.style.setProperty("--hover-color", "#e6e6e6");
    //console.log(root);
  } else {
    root.style.setProperty("--main-color", "#000000");
    root.style.setProperty("--hover-color", "#666666");
  }
});
