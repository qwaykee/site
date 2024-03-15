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

const characters = [{"House": "Gryffindor", "Name": "Harry James Potter", "Courage": 9, "Ambition": 4, "Intelligence": 5, "Good": 9}, {"House": "Gryffindor", "Name": "Ronald Bilius Weasley", "Courage": 8, "Ambition": 6, "Intelligence": 5, "Good": 9}, {"House": "Gryffindor", "Name": "Hermione Jean Granger", "Courage": 9, "Ambition": 6, "Intelligence": 9, "Good": 9}, {"House": "Gryffindor", "Name": "Albus Percival Wulfric Brian Dumbledore", "Courage": 9, "Ambition": 8, "Intelligence": 9, "Good": 9}, {"House": "Gryffindor", "Name": "Rubeus Hagrid", "Courage": 8, "Ambition": 1, "Intelligence": 5, "Good": 9}, {"House": "Gryffindor", "Name": "Neville Longbottom", "Courage": 6, "Ambition": 3, "Intelligence": 5, "Good": 9}, {"House": "Gryffindor", "Name": "Fred Weasley", "Courage": 9, "Ambition": 8, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "George Weasley", "Courage": 9, "Ambition": 8, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Ginevra (Ginny) Molly Weasley", "Courage": 8, "Ambition": 2, "Intelligence": 6, "Good": 9}, {"House": "Gryffindor", "Name": "Dean Thomas", "Courage": 8, "Ambition": 2, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Seamus Finnigan", "Courage": 7, "Ambition": 4, "Intelligence": 5, "Good": 8}, {"House": "Gryffindor", "Name": "Lily J. Potter", "Courage": 9, "Ambition": 1, "Intelligence": 9, "Good": 9}, {"House": "Gryffindor", "Name": "James Potter", "Courage": 9, "Ambition": 3, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Sirius Black", "Courage": 9, "Ambition": 2, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Remus John Lupin", "Courage": 9, "Ambition": 2, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Peter Pettigrew", "Courage": 2, "Ambition": 8, "Intelligence": 5, "Good": 2}, {"House": "Gryffindor", "Name": "Percy Ignatius Weasley", "Courage": 8, "Ambition": 8, "Intelligence": 9, "Good": 8}, {"House": "Gryffindor", "Name": "(Bill) William Arthur Weasley", "Courage": 9, "Ambition": 5, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Charles Weasley", "Courage": 9, "Ambition": 3, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Lee Jordan", "Courage": 7, "Ambition": 6, "Intelligence": 6, "Good": 9}, {"House": "Gryffindor", "Name": "Oliver Wood", "Courage": 8, "Ambition": 7, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Angelina Johnson", "Courage": 8, "Ambition": 7, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Katie Bell", "Courage": 9, "Ambition": 7, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Alicia Spinnet", "Courage": 7, "Ambition": 6, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Lavender Brown", "Courage": 7, "Ambition": 7, "Intelligence": 5, "Good": 8}, {"House": "Gryffindor", "Name": "Parvati Patil", "Courage": 8, "Ambition": 5, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Romilda Vane", "Courage": 5, "Ambition": 8, "Intelligence": 5, "Good": 7}, {"House": "Gryffindor", "Name": "Colin Creevey", "Courage": 9, "Ambition": 4, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Cormac McLaggen", "Courage": 4, "Ambition": 8, "Intelligence": 4, "Good": 7}, {"House": "Gryffindor", "Name": "Minerva McGonagall", "Courage": 9, "Ambition": 4, "Intelligence": 9, "Good": 9}, {"House": "Gryffindor", "Name": "Molly Weasley", "Courage": 9, "Ambition": 1, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "Arthur Weasley", "Courage": 9, "Ambition": 5, "Intelligence": 8, "Good": 9}, {"House": "Ravenclaw", "Name": "Quirinus Quirrell", "Courage": 2, "Ambition": 9, "Intelligence": 5, "Good": 2}, {"House": "Ravenclaw", "Name": "Cho Chang", "Courage": 7, "Ambition": 3, "Intelligence": 8, "Good": 9}, {"House": "Ravenclaw", "Name": "Luna Lovegood", "Courage": 9, "Ambition": 4, "Intelligence": 8, "Good": 9}, {"House": "Ravenclaw", "Name": "Gilderoy Lockhart", "Courage": 1, "Ambition": 9, "Intelligence": 3, "Good": 7}, {"House": "Ravenclaw", "Name": "Filius Flitwick", "Courage": 8, "Ambition": 7, "Intelligence": 9, "Good": 9}, {"House": "Ravenclaw", "Name": "Sybill Patricia Trelawney", "Courage": 5, "Ambition": 8, "Intelligence": 6, "Good": 7}, {"House": "Ravenclaw", "Name": "Garrick Ollivander", "Courage": 6, "Ambition": 7, "Intelligence": 9, "Good": 7}, {"House": "Ravenclaw", "Name": "Myrtle Elizabeth Warren (Moaning Myrtle)", "Courage": 7, "Ambition": 6, "Intelligence": 8, "Good": 9}, {"House": "Ravenclaw", "Name": "Padma Patil", "Courage": 8, "Ambition": 3, "Intelligence": 8, "Good": 9}, {"House": "Ravenclaw", "Name": "Michael Corner", "Courage": 5, "Ambition": 8, "Intelligence": 8, "Good": 7}, {"House": "Ravenclaw", "Name": "Terry Boot", "Courage": 7, "Ambition": 5, "Intelligence": 8, "Good": 8}, {"House": "Slytherin", "Name": "Severus Snape", "Courage": 9, "Ambition": 8, "Intelligence": 9, "Good": 8}, {"House": "Slytherin", "Name": "Draco Malfoy", "Courage": 2, "Ambition": 9, "Intelligence": 8, "Good": 4}, {"House": "Slytherin", "Name": "Vincent Crabbe", "Courage": 2, "Ambition": 8, "Intelligence": 4, "Good": 4}, {"House": "Slytherin", "Name": "Gregory Goyle", "Courage": 2, "Ambition": 8, "Intelligence": 4, "Good": 4}, {"House": "Slytherin", "Name": "Bellatrix Lestrange", "Courage": 7, "Ambition": 9, "Intelligence": 6, "Good": 1}, {"House": "Slytherin", "Name": "Dolores Jane Umbridge", "Courage": 2, "Ambition": 9, "Intelligence": 5, "Good": 5}, {"House": "Slytherin", "Name": "Horace Eugene Flaccus Slughorn", "Courage": 7, "Ambition": 7, "Intelligence": 8, "Good": 8}, {"House": "Slytherin", "Name": "Lucius Malfoy", "Courage": 3, "Ambition": 9, "Intelligence": 5, "Good": 2}, {"House": "Slytherin", "Name": "Narcissa Malfoy", "Courage": 2, "Ambition": 7, "Intelligence": 5, "Good": 4}, {"House": "Slytherin", "Name": "Regulus Arcturus Black", "Courage": 6, "Ambition": 9, "Intelligence": 5, "Good": 4}, {"House": "Slytherin", "Name": "Pansy Parkinson", "Courage": 2, "Ambition": 8, "Intelligence": 5, "Good": 4}, {"House": "Slytherin", "Name": "Tom Marvolo Riddle", "Courage": 6, "Ambition": 9, "Intelligence": 8, "Good": 1}, {"House": "Slytherin", "Name": "Millicent Bulstrode", "Courage": 4, "Ambition": 7, "Intelligence": 3, "Good": 5}, {"House": "Slytherin", "Name": "Graham Montague", "Courage": 4, "Ambition": 7, "Intelligence": 4, "Good": 5}, {"House": "Slytherin", "Name": "Bloody Baron", "Courage": 3, "Ambition": 6, "Intelligence": 5, "Good": 6}, {"House": "Slytherin", "Name": "Marcus Flint", "Courage": 3, "Ambition": 8, "Intelligence": 2, "Good": 5}, {"House": "Ravenclaw", "Name": "Penelope Clearwater", "Courage": 7, "Ambition": 7, "Intelligence": 8, "Good": 9}, {"House": "Slytherin", "Name": "Salazar Slytherin", "Courage": 5, "Ambition": 9, "Intelligence": 7, "Good": 3}, {"House": "Gryffindor", "Name": "Godric Gryffindor", "Courage": 9, "Ambition": 6, "Intelligence": 7, "Good": 8}, {"House": "Ravenclaw", "Name": "Rowena Ravenclaw", "Courage": 7, "Ambition": 7, "Intelligence": 9, "Good": 8}, {"House": "Gryffindor", "Name": "Nicholas de Mimsy-Porpington", "Courage": 9, "Ambition": 6, "Intelligence": 8, "Good": 9}, {"House": "Hufflepuff", "Name": "Helga Hufflepuff", "Courage": 7, "Ambition": 3, "Intelligence": 7, "Good": 9}, {"House": "Ravenclaw", "Name": "Helena Ravenclaw", "Courage": 7, "Ambition": 8, "Intelligence": 9, "Good": 8}, {"House": "Hufflepuff", "Name": "Nymphadora Tonks", "Courage": 9, "Ambition": 5, "Intelligence": 8, "Good": 9}, {"House": "Hufflepuff", "Name": "Pomona Sprout", "Courage": 9, "Ambition": 5, "Intelligence": 7, "Good": 9}, {"House": "Hufflepuff", "Name": "Cedric Diggory", "Courage": 7, "Ambition": 6, "Intelligence": 8, "Good": 9}, {"House": "Hufflepuff", "Name": "Justin Finch-Fletchley", "Courage": 8, "Ambition": 3, "Intelligence": 7, "Good": 9}, {"House": "Hufflepuff", "Name": "Zacharias Smith", "Courage": 5, "Ambition": 8, "Intelligence": 6, "Good": 8}, {"House": "Hufflepuff", "Name": "Hannah Abbott", "Courage": 8, "Ambition": 2, "Intelligence": 7, "Good": 9}, {"House": "Hufflepuff", "Name": "Ernest Macmillan", "Courage": 7, "Ambition": 5, "Intelligence": 7, "Good": 8}, {"House": "Hufflepuff", "Name": "Susan Bones", "Courage": 7, "Ambition": 2, "Intelligence": 7, "Good": 9}, {"House": "Slytherin", "Name": "Walden Macnair", "Courage": 4, "Ambition": 7, "Intelligence": 3, "Good": 4}, {"House": "Slytherin", "Name": "Augustus Rookwood", "Courage": 5, "Ambition": 7, "Intelligence": 5, "Good": 3}, {"House": "Slytherin", "Name": "Antonin Dolohov", "Courage": 4, "Ambition": 8, "Intelligence": 6, "Good": 3}, {"House": "Slytherin", "Name": "Corban Yaxley", "Courage": 6, "Ambition": 9, "Intelligence": 6, "Good": 3}, {"House": "Gryffindor", "Name": "Frank Longbottom", "Courage": 9, "Ambition": 4, "Intelligence": 8, "Good": 9}, {"House": "Hufflepuff", "Name": "Edgar Bones", "Courage": 8, "Ambition": 4, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Dennis Creevey", "Courage": 8, "Ambition": 3, "Intelligence": 7, "Good": 9}, {"House": "Slytherin", "Name": "Albus Severus Potter", "Courage": 8, "Ambition": 6, "Intelligence": 6, "Good": 8}, {"House": "Slytherin", "Name": "Scorpius Hyperion Malfoy", "Courage": 7, "Ambition": 7, "Intelligence": 7, "Good": 7}, {"House": "Hufflepuff", "Name": "Edward Remus Lupin", "Courage": 9, "Ambition": 2, "Intelligence": 8, "Good": 9}, {"House": "Gryffindor", "Name": "James Sirius Potter", "Courage": 8, "Ambition": 6, "Intelligence": 7, "Good": 9}, {"House": "Gryffindor", "Name": "Rose Granger-Weasley", "Courage": 8, "Ambition": 4, "Intelligence": 9, "Good": 9}]
var K = 3

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

const tabWithDistances = (unknown, tab) => {
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
  
  let user = {
    "Courage": courage == 0 ? 0 : courage / selectedAnswers.length,
    "Ambition": ambition == 0 ? 0 : ambition / selectedAnswers.length,
    "Intelligence": intelligence == 0 ? 0 : intelligence / selectedAnswers.length,
    "Good": good == 0 ? 0 : good / selectedAnswers.length
  };
  
  return user;
}

const getClosestNeighbours = user => tabWithDistances(user, characters).sort((a, b) => a.Distance - b.Distance).slice(0, K);

function showResults() {
  user = getUserValues();
  closestNeighbours = getClosestNeighbours(user);
  
  document.querySelectorAll("#survey > button").forEach(e => e.remove());
  
  q("#question").innerText = `Le choixpeau a decide que votre maison sera ${bestHouse(closestNeighbours)} !
  Les personnages les plus proches de votre personnalite sont ${closestNeighbours[0]["Name"]}, ${closestNeighbours[1]["Name"]} et ${closestNeighbours[2]["Name"]}`;
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

q("#startSurvey").addEventListener("click", e => {
  document.querySelector("section#progress").style.display = "inline-block";
  document.querySelector("section#survey").style.display = "inline-block";
  document.querySelector("section#results").style.display = "inline-block";
  document.querySelector("section#custom").style.display = "none";
  
  startSurvey();
});

q("#startCustom").addEventListener("click", e => {
  document.querySelector("section#progress").style.display = "none";
  document.querySelector("section#survey").style.display = "none";
  document.querySelector("section#results").style.display = "none";
  document.querySelector("section#custom").style.display = "inline-block";
})

q("#replay").addEventListener("click", startSurvey);

q("#k").addEventListener("input", e => {
  K = e.srcElement.value;
})

document.querySelectorAll("#custom").forEach(e => {
  e.addEventListener("input", e => {
    let user = {
      "Courage": q("input[name='courage']").value || 0,
      "Ambition": q("input[name='ambition']").value || 0,
      "Intelligence": q("input[name='intelligence']").value || 0,
      "Good": q("input[name='good']").value || 0
    }
    
    closestNeighbours = getClosestNeighbours(user);
    
    q("#result").innerText = `Le choixpeau a decide que votre maison sera ${bestHouse(closestNeighbours)} !
  Les personnages les plus proches de votre personnalite sont ${closestNeighbours[0]["Name"]}, ${closestNeighbours[1]["Name"]} et ${closestNeighbours[2]["Name"]}`
  })
})