const buttons = document.getElementsByClassName("bouton");

console.log("buttuns: ", buttons);

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target);
  });
}

function erase() {}
