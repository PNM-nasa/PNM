const table = document.getElementById('table');
const alert_text = document.getElementById('text');
const alert_button = document.getElementById('play');
const a = document.getElementById('alert');
const score_win = document.getElementById('win');
const score_draw = document.getElementById('draw');
const score_lost = document.getElementById('lost')

var score = {
  win: 0,
  draw: 0,
  lost: 0,
};
var win = false;
var player = true;
var i = 1;
var ans = 0;

alert_text.textContent = "Ban demo thu nhat";
alert_button.textContent = "play";
alert_button.addEventListener("click", (event) => {
  a.classList.add("hide");
});
var reset = function() {
  for (const child of children) {
    child.textContent = "+";
    child.classList.remove("O");
    child.classList.remove("X");
  }
}
while (i <= 9) {
  let p = document.createElement("p");
  p.setAttribute('id', i.toString());
  p.textContent = "+";
  table.appendChild(p);
  i += 1;
}
var children = [].slice.call(table.getElementsByTagName('*'), 0);
var idsAndClasses = children.map(function(child) {
  return JSON.stringify({
    id: child.id, classes: child.classList
  });
});

for (const child of children) {
  child.addEventListener("click", (event) => {
    if (child.textContent == "+") {
      if (player) {
        child.textContent = "O";
        child.classList.add("O");
      } else {
        child.classList.add("X");
        child.textContent = "X";
      }
      for (let i = 0; i < 3; i++) {
        if (children[i].textContent == children[i + 3].textContent &&
          children[i + 3].textContent == children[i + 6].textContent &&
          children[i].textContent != '+') {
          win = true;
        }
      }
      for (let i = 0; i < 9; i += 3) {
        if (children[i].textContent == children[i + 1].textContent &&
          children[i + 1].textContent == children[i + 2].textContent &&
          children[i].textContent != '+'
        )
          win = true;
      }
      if (children[0].textContent == children[4].textContent &&
        children[4].textContent == children[8].textContent &&
        children[0].textContent != '+'
      )
        win = true;
      if (children[2].textContent == children[4].textContent &&
        children[4].textContent == children[6].textContent &&
        children[2].textContent != '+'
      )
        win = true;
      console.log(win)
      ans++;
      if (win) {
        win = false;
        reset();
        alert_text.textContent = ((player) ? "O" : "X") + " win";
        alert_button.textContent = "play again";
        a.classList.remove("hide");
        ans = 0;
        score_win.textContent = ++score.win;
      }
      if (ans == 9) {
        reset();
        alert_text.textContent = "draw";
        alert_button.textContent = "play again";
        a.classList.remove("hide");
        ans = 0;
        score_draw.textContent = ++score.draw;
      }
      player = !player;
    }
  })
}
