const request = new Request("/questions");

let questionIndex = 0
let questions = {}

document.querySelector("#start").addEventListener("click", e => {
  fetch(request)
    .then(response => response.json())
    .then(json => questions.append(json))
    .catch(error => alert(error));
});

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

function question(index) {
  document.querySelector("#questionnaire").innerHTML = "";
}