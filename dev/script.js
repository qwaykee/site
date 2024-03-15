const questions = [
  [
     "Qu'emporterais tu sur une ile déserte",
     [0, 0, 1, 0, "Une carte"],
     [1, 0, 0, 0, "Un couteau aiguisé"],
     [0, 1, -1, 0, "Ton télephone"]
  ],
  [
     "2e",
     [0, 0, 1, 0, "Une carte"],
     [1, 0, 0, 0, "Un couteau aiguisé"],
     [0, 1, -1, 0, "Ton télephone"]
  ],
  [
     "3e",
     [0, 0, 1, 0, "Une carte"],
     [1, 0, 0, 0, "Un couteau aiguisé"],
     [0, 1, -1, 0, "Ton télephone"]
  ],
  [
     "4e",
     [0, 0, 1, 0, "Une carte"],
     [1, 0, 0, 0, "Un couteau aiguisé"],
     [0, 1, -1, 0, "Ton télephone"]
  ],
];

var selectedAnswers = [];
var currentQuestionIndex = currentQuestionIndex;

const characters = [{"House": "Gryffindor", "Name": "Harry James Potter", "Courage": 9, "Ambition": 4, "Intelligence": 5, "Good": 9}, {"House": "Gryffindor", "Name": "Ronald Bilius Weasley", "Courage": 8, "Ambition": 6, "Intelligence": 5, "Good": 9}]
const K = 3

const q = e => document.querySelector(e); // shorthand

var themeIsDark = localStorage.themeIsDark === undefined ? window.matchMedia("(prefers-color-scheme: dark)").matches : localStorage.themeIsDark === "true";

function updateTheme() {
  document.documentElement.setAttribute("theme", themeIsDark ? "dark" : "light");
  q("#theme").innerHTML = themeIsDark ? "Theme clair" : "Theme sombre";
  localStorage.setItem("themeIsDark", themeIsDark);
}

updateTheme();
q("#theme").onclick = () => {themeIsDark = !themeIsDark; updateTheme();}

const distance = (c1, c2) => {
  return (
    (c1["Courage"] - c2["Courage"]) ** 2 +
    (c1["Ambition"] - c2["Ambition"]) ** 2 +
    (c1["Intelligence"] - c2["Intelligence"]) ** 2 +
    (c1["Good"] - c2["Good"]) ** 2
  ) * 0.5;
};

function addDistances(tab, unknown) {
   tab.forEach(character => { character["Distance"] = distance(unknown, character); });
   return tab;
}

const bestHouse = tab => {
  const houseCount = new Map();
  
  tab.forEach(neighbour => houseCount.set(neighbour.House, (houseCount.get(neighbour.House) || 0) + 1));

  let maxCount = 0;
  let topHouse;

  houseCount.forEach((count, house) => {
    if (count > maxCount) {
      maxCount = count;
      topHouse = house;
    }
  });

  return topHouse;
}

const getUserValues = () => {
  var [courage, ambition, intelligence, good] = [0, 0, 0, 0];
  
  selectedAnswers.forEach(answer => {
    values = answer.split(",");
    courage += parseInt(values[0]);
    ambition += parseInt(values[1]);
    intelligence += parseInt(values[2]);
    good += parseInt(values[3]);
  })
  
  console.log(selectedAnswers)
  
  let user = {
    "Courage": courage == 0 ? 0 : courage / selectedAnswers.length,
    "Ambition": ambition == 0 ? 0 : ambition / selectedAnswers.length,
    "Intelligence": intelligence == 0 ? 0 : intelligence / selectedAnswers.length,
    "Good": good == 0 ? 0 : good / selectedAnswers.length
  };
  
  return user;
}

function showResults() {
  user = getUserValues();

  let characters_distance = addDistances(characters, user);
  const closest_neighbours = characters_distance.sort((a, b) => a.Distance - b.Distance).slice(0, K);
  
  document.querySelectorAll("#survey > button").forEach(e => e.remove());
  
  q("#question").innerText = "Le choixpeau a decide que votre maison sera " + bestHouse(closest_neighbours) + " !";
}

function loadNextQuestion(e) {
  selectedAnswers.push(e.srcElement.dataset.attributes);
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex == questions.length) {
    showResults();
    return;
  }
  
  q("#survey").setAttribute("data-current-question", currentQuestionIndex);
  loadQuestion(currentQuestionIndex);
  updateProgressBar(currentQuestionIndex);
  updateResults();
}

function loadQuestion(index) {
  let question = questions[index][0];
  let answers = questions[index].slice(1);
  
  document.querySelectorAll("#survey > button").forEach(e => e.remove());
  
  q("#question").innerHTML = question;
  
  answers.forEach(e => {
    let text = e[4];
    let attributes = e.slice(0, 4).toString();
    
    btn = document.createElement("button");
    btn.setAttribute("data-attributes", attributes);
    btn.innerText = text;
    btn.addEventListener("click", loadNextQuestion);
    
    q("#survey").append(btn)
  });
}

function updateProgressBar(index) {
  let percentage = parseInt((index + 1) / questions.length * 100) + "%";
  let progressText = (index + 1) + "/" + questions.length;
  
  q("#progressBar").style.width = percentage;
  q("#percentage").innerText = percentage;
  q("#progressText").innerText = progressText;
}

var resultsShowing = false;

function updateResults() {
  let emptyUser = {"Courage": "*", "Ambition": "*", "Intelligence": "*", "Good": "*"};
  let user = resultsShowing ? Object.fromEntries(Object.entries(getUserValues()).map(([key, value]) => [key, Math.round(value)])) : emptyUser;
  
  q("#display").innerText = Object.entries(user).map(([key, value]) => `${key}: ${value}`).join(' ');
  
  q("#toggleResultsDisplay svg").remove();
  
  i = document.createElement("i");
  i.classList.add("fa-regular", resultsShowing ? "fa-eye-slash" : "fa-eye");
  
  q("#toggleResultsDisplay").append(i);
}

function startSurvey() {
  selectedAnswers = [];
  currentQuestionIndex = 0;
  
  updateResults();
  updateProgressBar(0);
  loadQuestion(0);
}
  
q("#toggleResultsDisplay").addEventListener("click", e => {
  resultsShowing = !resultsShowing;
  updateResults();
});

q("#start").addEventListener("click", e => {
  e.srcElement.remove();
  document.querySelectorAll("section").forEach(e => e.style.display = "inline-block");
  
  startSurvey();
});

q("#replay").addEventListener("click", startSurvey);