// récupération de l'order iD du server//
        
document.setElementById("commandId").textContent =
  "Identification de votre commande :" + products._id;


let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);
let prixtotalpanier = JSON.parse(localStorage.getItem("prixtotalpanier"));
console.log(prixtotalpanier);
let formulaire = JSON.parse(localStorage.getItem("formulaire"));
console.log(formulaire);

// let order= json.parse(localStorage.getItem("order"))

// Récupération du prix :
document.getElementById("commandPrix").textContent = prixtotalpanier + " €";
// console.log(prixtotalpanier);

//  affichage du texte de remerciement
// valeurs à récupérer dans le LS:
let nom = formulaire.lastName;
console.log(nom);
let prenom = formulaire.firstName;
console.log(prenom);

let textRemerciement = (value1, value2) => {
  return `${value1} ${value2} , nous vous remercions pour votre commande`;
};

let remerciement = document.getElementById("remerciement_commande");
remerciement.textContent = textRemerciement(nom, prenom);

console.log(remerciement.textContent);

// texte livraison
let adresse = formulaire.address;
let ville = formulaire.city;
document.getElementById("adresse_livraison").textContent =
  "Votre commande sera livrée : " + adresse + " " + ville;
