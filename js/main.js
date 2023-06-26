var table = document.getElementById('table');
var win = false;
var win = 0;
var draw = 0;
var lost = 0;
var player = true;
var i = 1;
var ans = 0;
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
      player = !player;
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
        for (const child1 of children) {
          win = false;
          child1.textContent = "+";
          child1.classList.remove("O");
          child1.classList.remove("X");
        }
        ans = 0;
      }
      if (ans == 9) {
        for (const child1 of children) {

          child1.textContent = "+";
          child1.classList.remove("O");
          child1.classList.remove("X")
        }
        ans = 0
      }
      document.getElementById("win").textContent = ans.toString();
    }
  })
}
