let questions = [
  [
     "Qu'emporterais tu sur une ile déserte",
     [0, 0, 1, 0, "Une carte"],
     [1, 0, 0, 0, "Un couteau aiguisé"],
     [0, 1, -1, 0, "Ton télephone"]
  ]
]

const e = e => document.querySelector(e); // shorthand

e("#start").addEventListener("click", e => {
  e.srcElement.remove();
  e("section").style.display = "block";
});

document.querySelectorAll()

function setQuestion(index) {
  e("#question").innerHTML = questions[index];
}