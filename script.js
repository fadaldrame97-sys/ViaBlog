let voyages = [];

const destination= document.getElementById("YellowRIver");
const titr=document.getElementById("lan");
const img=document.getElementById("river");
const cat=document.getElementById("ctg");

const voyage = {
  titre: document.getElementById("Titre").value,
  destination: document.getElementById("des").value,
  note: document.getElementById("note").value,
  categorie: document.getElementById("cat").value,
  image: document.getElementById("img").value
};

voyages.push(voyage);


const modal = document.getElementById("modal");
const formDestination = document.getElementById("Destination_page");
