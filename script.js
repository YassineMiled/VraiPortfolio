const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
btn1.addEventListener("click", () => {
  window.location.href = "presentation.html";
  console.log("Redirection vers presentation.html");
});

btn2.addEventListener("click", () => {
  window.location.href = "bts.html";
  console.log("Redirection vers presentation.html");
});

btn3.addEventListener("click", () => {
  window.location.href = "e4.html";
  console.log("Redirection vers presentation.html");
});

btn4.addEventListener("click", () => {
  window.location.href = "e5.html";
  console.log("Redirection vers presentation.html");
});

btn5.addEventListener("click", () => {
  window.location.href = "veille.html";
  console.log("Redirection vers presentation.html");
});

btn6.addEventListener("click", () => {
  window.location.href = "projet.html";
  console.log("Redirection vers presentation.html");
});

function telechargerCV() {
  const lien = document.createElement("a");
  lien.href = "CV_Miled_Yassine.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "CV_Miled_Yassine.pdf"; // Nom du fichier lors du téléchargement
  lien.click();
}
function telechargerRapportsSio1() {
  const lien = document.createElement("a");
  lien.href = "Rapport_de_stage_MiledYassine.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "Rapport_de_stage_MiledYassine.pdf"; // Nom du fichier lors du téléchargement
  lien.click();
}
function telechargerRapportsSio2() {
  const lien = document.createElement("a");
  lien.href = "RapportDeStage2.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "RAPORT_DE_STAGE_Miled_Yassine_2emeAnnée.pdf"; // Nom du fichier lors du téléchargement
  lien.click();
}

function telechargerTableau() {
  const lien = document.createElement("a");
  lien.href = "TableauSyntheseE4YassineMiled.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "TableauSyntheseE4.xlsx "; // Nom du fichier lors du téléchargement
  lien.click();
}

function telechargerContexte() {
  const lien = document.createElement("a");
  lien.href = "01specificationsGSBRapportDeVisites_V2.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "01specificationsGSBRapportDeVisites_V2.pdf "; // Nom du fichier lors du téléchargement
  lien.click();
}
// Ajout d'un gestionnaire d'événements pour les boutons
window.onload = function() {
  const btnSISR = document.getElementById("detailsContainer");
  const btnSLAM = document.getElementById("SLAM");

  btnSISR.addEventListener("click", afficherSISR);
  btnSLAM.addEventListener("click", afficherSLAM);
};

// Fonction pour afficher les détails de SISR
function afficherSISR() {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = "<h4>Option SISR (Solutions d’Infrastructure, Systèmes et Réseaux)</h4>" +
                         "<p>Cette option forme les étudiants aux métiers de l’administration des réseaux, la gestion des infrastructures informatiques et la cybersécurité. Les compétences acquises incluent : </p>" +
                         "<ul><p>Installation et configuration des équipements réseau (switchs, routeurs, etc.).</p>" +
                         "<p>Gestion des serveurs et systèmes d’exploitation.</p>" +
                         "<p>Mise en place et maintenance des solutions de sécurité informatique.</p>" +
                         "<p>Assistance technique et gestion des pannes dans des environnements complexes.</p></ul>";
}

// Fonction pour afficher les détails de SLAM
function afficherSLAM() {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = "<h4>Option SLAM (Solutions Logicielles et Applications Métier)</h4>" +
                         "<p>Cette option prépare les étudiants à concevoir, développer et maintenir des applications logicielles adaptées aux besoins des entreprises. Les compétences acquises incluent : </p>" +
                         "<ul><p>Analyse des besoins des utilisateurs et rédaction de cahiers des charges.</p>" +
                         "<p>Développement d’applications web, mobiles et de bureau.</p>" +
                         "<p>Test, débogage et optimisation des logiciels.</p>" +
                         "<p>Gestion de bases de données et implémentation des solutions logicielles.</p></ul>";
}


// const mousemove = document.querySelector(".mousemove");

// window.addEventListener("mousemove", (e) => {
//   mousemove.style.left = e.pageX + "px";
//   mousemove.style.top = e.pageY + "px";
// });

// window.addEventListener("mousedown", () => {
//   mousemove.style.transform = "scale(2) translate(-25%, -25%)";
// });

// window.addEventListener("mouseup", () => {
//   mousemove.style.transform = "scale(1) translate(-50%, -50%)";
//   mousemove.style.border = "2px solid teal";
// });
