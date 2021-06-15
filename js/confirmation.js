// let commandId = newURL(location.href).searchParams.get("commandId");
// document.getElementById('commandId').textContent = orderId



let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);
let prixtotalpanier = JSON.parse(localStorage.getItem("prixtotalpanier"));
console.log(prixtotalpanier)
let formulaire = JSON.parse(localStorage.getItem("formulaire"))
console.log(formulaire);

    
// Récupération du prix : 
document.getElementById("commandPrix").textContent = prixtotalpanier + " €"; 
// console.log(prixtotalpanier);


//  affichage du texte de remerciement
// valeurs à récupérer dans le LS: 
let nom = formulaire.nom;
let prenom = formulaire.prenom;

let textRemerciement = (value1 , value2) =>{   
    return `${value1, value2} , nous vous remercions pour votre commande`}

 let remerciement = document.getElementById("remerciement_commande"); 
 remerciement.textContent = textRemerciement (nom, prenom);
    
console.log(remerciement.textContent);





    

   