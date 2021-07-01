// Etapes :

// 1 : Récupération des données enregistrés dans le local storage
// 2 : Affichage du numéro de commande
// 3 : Affichage du texte de remerciement 
// 4 : sinon : affichage du panier


//récupération des données du LS
let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);
let prixtotalpanier = JSON.parse(localStorage.getItem("prixtotalpanier"));
console.log(prixtotalpanier);
let formulaire = JSON.parse(localStorage.getItem("formulaire"));
console.log(formulaire);
let order = JSON.parse(localStorage.getItem("retourCommande"));


// let order= json.parse(localStorage.getItem("order"))

// récupération de l'order iD du server//
document.getElementById("commandId").textContent = order;


// ****affichage du texte de remerciement (3)
// valeurs à récupérer dans le LS:
let nom = formulaire.lastName;
console.log(nom);
let prenom = formulaire.firstName;
console.log(prenom);
// texte de remerciement avec nom et prenom 
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

// Récupération du prix :
document.getElementById("commandPrix").textContent = prixtotalpanier + " €";
// console.log(prixtotalpanier);



// lors du clic du retour à l 'acceuil = '
// lorsque la commande est validée : clear du ls: 
// localStorage.clear()



