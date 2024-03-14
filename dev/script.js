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
function distance(self, character) {
  return ((self["Courage"] - character["Courage"]) ** 2 
  +(self["Ambition"] - character["Ambition"]) ** 2
  +(self["Intelligence"] - charcater["Intelligence"])
  +(self["Good"] - character["Good"]) ** 2)  ** 0.5;
}

function add_distances(tab, unknown) {
  for (player in tab){
    
  }
}
