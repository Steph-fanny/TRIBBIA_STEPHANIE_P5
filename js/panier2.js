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

    
//******************************Logique ***************************//  

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


// 5---------------btn supprimer 1 element du panier au click -----------
let btn_supprimer = document.querySelectorAll("button.btn.btn-secondary")
  console.log(btn_supprimer)    

for (let i = 0; i <btn_supprimer.length; i++) {
  btn_supprimer[i].addEventListener ("click", (event)=>{
    event.preventDefault();
    //fonction//
    supprimerUneLigneOurson;

  //on supprime l'article du localStorage
  panier.splice(i, 1);
  console.log("panier aprés suppression");
  console.log(panier);
  // on enregistre le nouveau LS avec la clef"panier"
  localStorage.setItem("panier", JSON.stringify(panier));
  JSON.parse(localStorage.getItem("panier"));

  // alert pour avertir que le produit a été supprimer et rechargement de la page
  alert("Ce produit va être supprimé du panier");
  window.location.href = "panier.html"; // on revient à la page d'acceuil
  })        
}             
// -----------fin btn supprimer une ligne----------//


//6 :----------supprimer tout le panier: ---------------

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
   
//**************************************functions*******************************//

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

    //calcul du total Panier ------ a finir ---------
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
    "Total du panier : " +  total_panier.value ;
  

  //enregistrement dans le LS
localStorage.setItem("prixtotalpanier", (total_panier.value));
    
  } 
}                                    
//----------fin fonction affichage produit panier-----------//


//------ btn supprimer ligne
  function supprimerUneLigneOurson() {
    let parentTbody = document.getElementsByTagName("tbody");
    // console.log(parentTbody);
    // selectionner la ligne a supprimer
    let ligneASupprimer = document.getElementsByTagName("tr");
    // console.log(ligneASupprimer);
    // boucle tant que le noeud parent (tbody) a 1 er enfant  : le supprimer
    while (parentTbody.firstChild) {
      parentTbody.removeChild(parentTbody.firstChild);
    }
  }
//-----fin fonction btn supprimer ligne 






   
    //---------------------formulaire---------------



    let btnenvoyerFormulaire = document.getElementById("confirm-command");

    console.log(btnenvoyerFormulaire);
    btnenvoyerFormulaire.addEventListener("click", (e)=> {
      e.preventDefault();

      //recuperation des valeurs du formulaire
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



    })
  ///-----------------validation du formulaire------------
      //controle avec les expressions régulieres- rationnelle / regex


      //***********fonction********** */
  function validateNomPrenomVille(value) {
     //commencer par 1 lettre en maj ou min
    // controle lettre et min 3/ max 20 caracteres
    return /^[A-Za-z]{3,20}$/.test(value);
  }

    // Critere de validité de l'adresse mail
  function validateEmail(value) {
    if ( /^ [A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/
    .test(value)) {
      return true;
      }
      return false;
      }

      //Critere de  validité du code postal
      function validateCodePostal(value) {
        return /^[0-9]{1,2} ?[0-9]{3}$/.test(value);
      }

      // Critere de validite de l'adresse
      function validateAddress(value) {
        return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value);
      }

      //******fin fonction ***** */



      // controle de la validite du prenom 
      let validationPrenom = formulaireValues.prenom
    validationPrenom.addEventListener("keyup", function (event) {
      e.preventDefault();
      if (validationPrenom.validity.typeMismatch) {
        validationPrenom.setCustomValidity ("merci de renseigner une adresse mail")
      } else {
        alert(
          "Les chiffres et symboles ne sont pas autorisés\n min 3 caractéres, ne pas dépasser 20 caractéres"
        );
      }
    });







      //---------------------------------------Fin validation formulaire

     ///*******envoyer la requete********/ 

      //Mettre l'objet "formulaireValues" dans le LS si tous les champs sont valides

      // la valeur : formulaireValues : n'est pas une chaine de caractére :
      localStorage.setItem("formulaire", JSON.stringify(formulaireValues));

      // mettre les valeurs du formulaire et les produits selectionnés dans un objet pour envoyer au serveur
      let aEnvoyer = {
        panier,
        formulaireValues,
      };
      console.log("données à envoyer au serveur:");
      console.log(aEnvoyer);
  



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






