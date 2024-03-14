let questions = {
  [
    "Qu'emporterais tu sur une ile déserte",
    [0, 0, 1, 0, "Une carte"],
    [1, 0, 0, 0, "Un couteau aiguisé"],
    [0, 1, -1, 0, "Ton télephone"]
  ]
}

const e = e => document.querySelector(e); // shorthand

e("#start").addEventListener("click", e => {
  e.srcElement.remove();
  e("#question").innerText = questions[]
});

document.querySelectorAll()

// create and place button into div#questionnaire
function newButton(question, values) {
  button = document.createElement("button");
  button.innerText = question;
  
  attributes = ["courage", "ambition", "intelligence", "good"];
  
  values.forEach((v, i) => button.setAttribute(attributes[i], v));
  
  button.classList.add("option-button");
  
  button.onclick = e => question(questionIndex);
  
  document.querySelector("#questionnaire").append(button);
}

function setQuestion(index) {
  e("#question").innerHTML = questions[index];
}