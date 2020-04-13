const changer = document.querySelector("#color-changer input");
const bodyTag = document.querySelector("body");

let root = document.documentElement;

changer.addEventListener("input", function() {
  bodyTag.style.backgroundColor = changer.value;

  const color = chroma(changer.value);

  if (color.luminance() < 0.3) {
    console.log("hello");
    root.style.setProperty("--main-color", "#ffffff");
    root.style.setProperty("--hover-color", "#e6e6e6");
    console.log(root);
  } else {
    root.style.setProperty("--main-color", "#000000");
    root.style.setProperty("--hover-color", "#666666");
  }
});
