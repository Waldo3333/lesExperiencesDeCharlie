function eraseSentence() {
  if (document.getElementById("phrase")) {
    document.getElementById("phrase").remove();
  }
}
function getValue() {
  if (document.getElementById("phrase")) {
    eraseSentence();
  }

  let prenom = document.getElementById("input").value;
  var welcome = document.createElement("p");
  var contenu = document.createTextNode(
    "Bonjour " +
      prenom +
      " et merci d'avoir renseigné ton nom, ça n'a absolument aucun interet si ce n'est que de l'inserer dans cette phrase ! Merci !"
  );
  welcome.appendChild(contenu);
  document.getElementById("prenom").appendChild(welcome);

  welcome.id = "phrase";
}
function eraseAffich() {
  console.log(carre.length);
  let prout = carre.length;
  for (let i = 0; i < prout; i++) {
    console.log(carre.length);
    if (document.getElementById("carre")) {
      document.getElementById("carre").remove();
    }
  }
}

function getCube() {
  if (document.getElementById("carre")) {
    eraseAffich();
  }
  let cube = document.getElementById("nombreCube").value;

  for (let i = 0; i < parseInt(cube); i++) {
    console.log("boucle");

    let affich = document.createElement("p1");
    let contenu = document.createTextNode("1");
    affich.appendChild(contenu);
    document.getElementById("lecube").appendChild(affich);

    affich.id = "carre";
  }
}

function eraseNumber() {
  if (document.getElementById("caca")) {
    document.getElementById("caca").remove();
  }
}

function getNumber() {
  if (document.getElementById("caca")) {
    eraseNumber();
  }

  let chiffreUn = document.getElementById("nombreUn").value;
  let chiffreDeux = document.getElementById("nombreDeux").value;
  let result = "Resultat : " + (parseInt(chiffreUn) + parseInt(chiffreDeux));

  let displayResult = document.createElement("p");

  displayResult.id = "caca";

  displayResult.innerText = result;

  document.getElementById("resultat").appendChild(displayResult);
  console.log(chiffreUn.value);
  console.log(result);
}
