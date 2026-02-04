let voyages = [];

const destination= document.getElementById("YellowRIver");
const titr=document.getElementById("lan");
const img=document.getElementById("river");
const cat=document.getElementById("ctg");


// const voyage = {
//   titre: document.getElementById("Titre").value,
//   destination: document.getElementById("des").value,
//   note: document.getElementById("note").value,
//   categorie: document.getElementById("cat").value,
//   image: document.getElementById("img").value
// };


console.log(titr);

const modal = document.getElementById("modal");
const formDestination = document.getElementById("Destination_page");

formDestination.addEventListener("submit", (event) => { event.preventDefault();

   

const voyage = {
  titre: document.getElementById("Titre").value,
  destination: document.getElementById("des").value,
  note: document.getElementById("note").value,
  categorie: document.getElementById("cat").value,
  image: document.getElementById("img").value
};

voyages.push(voyage);

  modal.classList.add("hidden");

  
  formDestination.reset();

  console.log(titr,destination);
  console.log("form:", formDestination);


    titr.textContent = voyage.titre;
  destination.textContent = voyage.destination;
  cat.textContent = voyage.categorie;
  img.src = voyage.image;
  img.alt = voyage.titre;

  // Fermer le modal et reset
  modal.classList.add("hidden");
  formDestination.reset();

  // 🔹 Vérification dans la console
  console.log("voyages:", voyages);



});

