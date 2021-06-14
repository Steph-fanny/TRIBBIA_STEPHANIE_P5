// Etapes :

    // 1 : récupérer le panier  du localstorage
    // 2 : vérification si le panier est vide
    // 3 : si le panier est vide => affichage message " panier vide"
    // 4 : sinon : affichage du panier
        // 4.1 : parcourir le panier =>for
            // 4.1.1 : pour chaque items du panier => creation d'une nouvelle ligne
            // 4.1.2 : création des colonnes pour chaque données =>integration avec la ligne
            // 4.1.3  : "append" de la ligne au tableau
            // 4.1.4 : Créer le bouton supprimer 
    // 5 : Gestion btn supprimer avec mise à  jour Ls  
    // 6 : Bouton vider le panier 
    // 7 : Gestion des quantites pour ne pas avoir de doublon     
    // 8: Montant total du panier        

    
//***************************** LOGIQUE ***********************************//  
//*************************************************************************//

// 1 : récupérer les donnnées de l'ourson choisi en appelant la clef (panier):   
let panier = JSON.parse(localStorage.getItem("panier"));

//2 : vérification si le panier est vide
if (!panier || panier == 0) {
  // si le panier est vide
  affichagePanierVide();
} else {
  // si le panier n'est pas vide
  affichagePanier(panier);
}

// 5---------------btn supprimer 1 element du panier au click -----------//
let btn_supprimer = document.querySelectorAll("button.btn.btn-secondary")
  console.log(btn_supprimer)    

for (let i = 0; i <btn_supprimer.length; i++) {
  btn_supprimer[i].addEventListener ("click", (event)=>{
    event.preventDefault();
    //fonction//
    supprimerUneLigneOurson;

  //on supprime l'article du localStorage
  panier.splice(i, 1);
  // console.log("panier aprés suppression");
  // console.log(panier);

  // on enregistre le nouveau LS avec la clef"panier"
  localStorage.setItem("panier", JSON.stringify(panier));
  JSON.parse(localStorage.getItem("panier"));

  // alert pour avertir que le produit a été supprimer et rechargement de la page
  alert("Ce produit va être supprimé du panier");
  window.location.href = "panier.html"; // on revient sur le panier
  })        
}             
// -----------fin btn supprimer une ligne-----------------------------------------//

//6 :----------supprimer tout le panier: -----------------------------------------//
let btnDeletePanier = document.getElementById("btn_delete_panier");   
  // suprimer la clef produit "panier" du Ls pour vider entiérement le panier    
  btnDeletePanier.onclick = function viderLePanier() {
    // removeItem pour vider 1 clef du LS
    localStorage.removeItem("panier");
    alert("le panier va être vidé");  
    // recharger la page
    window.location.href = "panier.html";           
    //sauvegarde panier mis à jour
    localStorage.setItem("panier", json.stringify(panier));
    window.location.href = "panier.html"; // on revient à la page d'acceuil
  };    
   

//************************************* FONCTIONS ********************************//
//*******************************************************************************//

//------- affichage message "panier vide"
function affichagePanierVide() {
  window.alert("Votre panier est vide");
}  

//--------- affichage des produits d'un panier
function affichagePanier(panier){
  for (i = 0; i < panier.length; i++) {
    console.log("ligne de produit:");
    console.log(panier[i]);

    let row = document.createElement("tr");
    row.textContent = panier[i].nom;
    row.setAttribute("class", "ligne_produit_panier");
    document.getElementById("liste_produit_panier").appendChild(row);

    //affichage colonne prix
    let column_price = document.createElement("th");
    column_price.setAttribute("id", "prix");
    column_price.innerText = panier[i].prix;
    row.appendChild(column_price);
    // console.log(panier[i].prix);

    // affichage prix sans "euros" pour calcul total ligne
    let price = parseFloat(column_price.innerText.replace("euros", ""));
    // console.log(price);

    //affichage colonne quantité
    let column_qt = document.createElement("th");
    column_qt.setAttribute("id", "quantite");
    column_qt.innerText = panier[i].quantité;
    row.appendChild(column_qt);
    // console.log(panier[i].quantité);

    // affichage colonne couleur
    let column_colors = document.createElement("th");
    column_colors.textContent = panier[i].colors;
    row.appendChild(column_colors);
    // console.log("couleurs choisies:")
    // console.log(panier[i].colors);

    // affichage total ligne
    let columnTotalPrice = document.createElement("th");
    columnTotalPrice.innerText = price * panier[i].quantité + " €";
    columnTotalPrice.setAttribute("id", "prix_total_ligne");
    row.appendChild(columnTotalPrice);
    // console.log("prix total par ligne:");
    // console.log(columnTotalPrice.innerText);

    // création bouton supprimer
    let btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "supprimer";
    btnSupprimer.setAttribute("class", "btn btn-secondary");
    row.appendChild(btnSupprimer);

    //calcul du total Panier 
    let sommeTotale = 0;
    let prixLignePanier = parseInt(panier[i].quantité) * parseInt(panier[i].prix);
    console.log(prixLignePanier);

    panier.forEach((panier) => {
      sommeTotale += parseInt(panier.quantité) * parseInt(panier.prix);
    });
    console.log(sommeTotale);

    // affichage du prix total   
    let total_panier = document.getElementsByClassName("totalPanier");
    total_panier.value = sommeTotale  + " €";     
    console.log(total_panier);
  
    document.getElementById("total_prix_panier").textContent =
    "Total du panier : " + total_panier.value ;
  
    //enregistrement dans le LS
    localStorage.setItem("prixtotalpanier", (total_panier.value));    
  } 
}                                    
//---------------fin fonction affichage produit panier-------------------//

//------ btn supprimer ligne
  function supprimerUneLigneOurson() {
    let parentTbody = document.getElementsByTagName("tbody");
    // console.log(parentTbody);
    // selectionner la ligne a supprimer
    let ligneASupprimer = document.getElementsByTagName("tr");
    // console.log(ligneASupprimer);
    // boucle tant que le noeud parent (tbody) a 1 er enfant  : le supprimer
    while (parentTbody.firstChild){parentTbody.removeChild(parentTbody.firstChild);
    }
  }
//-----fin fonction btn supprimer ligne 




//*******************************FORMULAIRE***************************************//
//********************************************************************************//
  // 1. Vérifier si tous les champs sont remplis
  // 2. Valider chaque champs 



////////////////////////////////// LOGIQUE ///////////////////////////
 
let btnenvoyerFormulaire = document.getElementById("confirm-command");
console.log(btnenvoyerFormulaire);

//Au clic du bouton : valider les champs un par un 
btnenvoyerFormulaire.addEventListener("click", (e) => {
e.preventDefault();
validateCodePostal();
validateVille();
validateAddress();
validateEmail();
validatePrenom();
validateNom();


// verifierAllFields();

 
    
// valeurs à récupérer pour les placer dans le LS
let formulaireValues = {
  nom: document.getElementById("nom").value,
  prenom: document.getElementById("prenom").value,
  Email: document.getElementById("email").value,
  adresse: document.getElementById("adresse").value,
  ville: document.getElementById("ville").value,
  codepostal: document.getElementById("code_postal").value,
};
console.log("Valeurs du formulaire :");
console.log(formulaireValues);


//Mettre l'objet "formulaireValues" dans le LS si tous les champs sont valides
// la valeur : formulaireValues : n'est pas une chaine de caractére :
  localStorage.setItem("formulaire", JSON.stringify(formulaireValues));




  // mettre les valeurs du formulaire et les produits selectionnés dans un objet pour envoyer au serveur
  let aEnvoyer = {
  panier,
  formulaireValues,
  }
  console.log("données à envoyer au serveur:")
  console.log(aEnvoyer);
 });









   
    
///-----------------validation du formulaire------------
  

    //***********fonctions********** */
    //controle avec les expressions régulieres- rationnelle / regex

// fonction regex commun pour nom, prenom et ville 
let regExNomPrenomVille = (value) => {
  //commencer par 1 lettre en maj ou min +  3 lettres min/ max 20  
  return /^[A-Za-z]{3,20}$/.test(value);
};

let regExEmail = (value) => {
  return /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
  .test(value);
}

let textAlert = (value) =>{    
  return `Le ${value} est incorrect\n Minimun 3 caractéres, maximum 20 !\n  Les chiffres et symboles ne sont pas autorisés!`;
}

function validateNom() {    
  let validationNom = document.getElementById("nom").value;
    if (regExNomPrenomVille(validationNom)) {
      document.getElementById("nom").style.border = "2px solid green";
      console.log("true");
      return true;
    } else {
      document.getElementById("nom").style.border = "2px solid red";
      document.getElementById("message").innerText = textAlert("Nom");
      console.log("false");
      return false;    
    }
}
  
function validatePrenom() { 
  let validationPrenom = document.getElementById("prenom").value;
  if (regExNomPrenomVille (validationPrenom)) {
    document.getElementById("prenom").style.border = "2px solid green"; 
    console.log("true");  
    return true;
  } else {
    document.getElementById("prenom").style.border = "2px solid red";
    document.getElementById("message").innerText = textAlert("Prénom");
    console.log("false");
    return false;       
  }
}

function validateVille() {  
  let validationVille = document.getElementById("ville").value;
  if (regExNomPrenomVille(validationVille)) {
    document.getElementById("ville").style.border = "2px solid green";    
    console.log("true")
    return true    
  } else {
    document.getElementById("ville").style.border = "2px solid red";
    document.getElementById("message").innerText = textAlert("ville");      
     console.log("false")
    return false;    
  }
}

function validateEmail() {
  let validationEmail = document.getElementById("email").value;
  if (regExEmail(validationEmail)) {
    document.getElementById("email").style.border = "2px solid green"; 
    console.log("true");     
    return true;
  } else {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("message").innerText = " L'adresse mail est incorrecte ";
    console.log("false");
    return false;      
  }
}
    
function validateCodePostal() {
  let validationCodePostal = document.getElementById("code_postal").value;
  if(/^[0-9]{5}$/.test(validationCodePostal )){
    document.getElementById("code_postal").style.border = "2px solid green";   
    console.log("true");   
  return true;
  } else {
    document.getElementById("code_postal").style.border = "2px solid red";
    document.getElementById("message").innerText = " Le code postal est incorrect "   
    console.log("false"); 
    return false;      
  }
}
      
function validateAddress() {
  let validationAdresse = document.getElementById("adresse").value;
  if(/^[A-Z-a-z-0-9\s]{5,80}$/.test(validationAdresse)){
    document.getElementById("adresse").style.border = "2px solid green";  
    console.log("true");   
  return true;
  } else {
    document.getElementById("adresse").style.border = "2px solid red";
    document.getElementById("message").innerText =
    " l'adresse est incorrect \n Les chiffres et symboles ne sont pas autorisés "; 
    console.log("false");   
  return false;
       ;
  }
}

// vérifier si tous les champs sont remplis correctement 
//  function verifierAllFields() {
   ////----------------1. verifier si toutes les valeurs sont remplies------
   // declarer une variable pour chaque champs : initial = false car pas rempli
   // lors click bouton : soumettre le formulaire si toutes les donnees sont passées true  = rempli et format correct
   // si 1 non conforme  : pas envoie formulaire
  //  let nom = false;
  //  let prenom = false;
  //  let email = false;
  //  let adresse = false;
  //  let code_postal = false;
  //  let ville = false;

  // //  vérifier si toutes les valeurs ont basculées à true
  //  if ( nom == true &&  prenom == true &&  email == true && adresse == true &&  code_postal == true &&
  //    ville == true ) {
  //    //=> l'ensemble des champs est conforme et le formulaire peut être envoyé
  //    document.getElementById("message").innerText = "Le formulaire est correctement rempli";
  //   //  localStorage.setItem("formulaire", JSON.stringify(formulaireValues));

  //    // !!!!!!!!//envoi du formulaire avec post
  //    // document.getElementById("formulaire").submit();
  //  } else {
  //    //sinon message d'erreur
  //    document.getElementById("message").innerText =
  //      "Le formulaire n'est pas complet : merci de renseigner tous les élements ";
  //  }
 
  // }




      


   


  
   








  
  



   //******fin fonction ***** */






   

   // a conserver

//   //  ---------------Si le formulaire est validé :evoye donnée
// let btnenvoyerFormulaire = document.getElementById("confirm-command");
//  console.log(btnenvoyerFormulaire);

// btnenvoyerFormulaire.addEventListener("click", (e) => {
//     e.preventDefault();
//    //recuperation des valeurs du formulaire
//    let formulaireValues = {
//      nom: document.getElementById("nom").value,
//      prenom: document.getElementById("prenom").value,
//      Email: document.getElementById("email").value,
//      adresse: document.getElementById("adresse").value,
//      ville: document.getElementById("ville").value,
//      codepostal: document.getElementById("code_postal").value,
//    };
//    console.log("Valeurs du formulaire :");
//    console.log(formulaireValues);
//    ///*******envoyer la requete********/

//    //Mettre l'objet "formulaireValues" dans le LS si tous les champs sont valides

//    // la valeur : formulaireValues : n'est pas une chaine de caractére :
//    localStorage.setItem("formulaire", JSON.stringify(formulaireValues));

//    // mettre les valeurs du formulaire et les produits selectionnés dans un objet pour envoyer au serveur
//    let aEnvoyer = {
//      panier,
//      formulaireValues,
//    };
//    console.log("données à envoyer au serveur:");
//    console.log(aEnvoyer);
//  });







// ---------A finir : contenu du LS dans formualire lors du changement de page ------------------

//--------------mettre le contenu du LS dans les champs du formulaire---//
// il ne s'efface pas si changement de la page      
// let donneesLocalStorage = localStorage.getItem("formulaire");
// // convertir la chaine de caractére en JS
// let donneesLocalStorageObjet = JSON.parse(donneesLocalStorage);
// console.log("données du LS : ");
// console.log(donneesLocalStorageObjet);

// document.getElementById("prenom").setAttribute('value', donneesLocalStorageObjet.prenom)










// btnenvoyerFormulaire.addEventListener("click", (e) =>{
//   e.preventDefault();
//   //colection d'objet à valider : 5 champs
//   let fields = document.querySelectorAll("input[required]");
//   // variable deviendra false si au moins 1 des 5 champs à valider n'est pas valide
//   let valid = true;
//   // inspecter les champs 1 par 1 avec 1 boucle avec variable field
//   // foreach execute 1 fonction pour chacun des éléments stocker dans fields: parametre entree : le
//   // champ sur lequel on boucle : field

//   //acces 1 par 1 aux champs à valider
//   fields.forEach((field) => {   
//     // fonction pour valider le champ
//     if (!validateField(field)) {
//       valid = false; // executer quand champ n'est pas valide
//     }
//   });
//   // si  func validatefield retourne true si le champ est valide =>l243= true donc l235 reste true
//   //car l244 non executé
// if (valid){ //vérifier si valid est toujours = true 
// e.target.click
// }

// }, false);


// // fonction valider les champs
// function validateField (field) {
//   // retourne soit true  si champ valide (attribut required html) ou false si non valide : va se servir des attriburs required de html
//   if (field.checkValidity()) {    
//     return true; // renvoie true à la ligne 240
//   } else {
//     return false; // si non valide=> renvoie 1 false à ligne 240
//   }
// }






