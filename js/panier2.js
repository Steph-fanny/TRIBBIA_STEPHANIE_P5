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
    // 8 : Montant total du panier     
    // 9 : le formulaire   
      // 9.1 : validation de chaque champ avec un regex
      // 9.2 : vérification que tous les champs soient remplis
      // 9.3 : mettre les valeurs dans le LS
      // 9.4 : si toutes les conditions sont remplis : envoie du formulaire au serveur

    
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
btnDeletePanier.addEventListener ("click", (event)=>{
    event.preventDefault();
    //fonction bouton vider le panier//
    viderLePanier()
})
     
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
    row.setAttribute("class", "ligne_produit_panier ml-4");
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
    localStorage.setItem("prixtotalpanier", (sommeTotale));    
  } 
}                                    
//---------------fin fonction affichage produit panier-------------------//

//------ supprimer ligne
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

function viderLePanier() {
  // removeItem pour vider 1 clef du LS
  localStorage.removeItem("panier");
  alert("le panier va être vidé");  
  // recharger la page
  window.location.href = "index.html";           
  //sauvegarde panier mis à jour
  localStorage.setItem("panier", json.stringify(panier)); 
};

//*******************************FORMULAIRE***************************************//
//********************************************************************************//
 
////////////////////////////////// LOGIQUE ///////////////////////////
// Remplissage du formulaire  :  
  // - verifier chaque champs : regex
  // - récupérer les donnees dans le LS

document.getElementById("formulaire_validation").addEventListener("input", function (e) {
  e.preventDefault();
  validateCodePostal();
  validateVille();
  validateAddress();
  validateEmail();
  validatePrenom();
  validateNom();

  // valeurs à récupérer pour les placer dans le LS
  let formulaireValues = {
    firstName: document.getElementById("prenom").value,
    lastName: document.getElementById("nom").value,
    address: document.getElementById("adresse").value,
    city: document.getElementById("ville").value,
    email: document.getElementById("email").value,    
    // codepostal: document.getElementById("code_postal").value,
  };
  console.log("Valeurs du formulaire :");
  console.log(formulaireValues);

  //Mettre l'objet "formulaireValues" dans le LS si tous les champs sont valides
  // la valeur : formulaireValues : n'est pas une chaine de caractére :
  localStorage.setItem("formulaire", JSON.stringify(formulaireValues));  
});

// mettre les valeurs du formulaire et les produits selectionnés dans un objet pour envoyer au serveur
  // let panier = JSON.parse(localStorage.getItem("panier"));
  // console.log(panier);
  let prixtotalpanier = JSON.parse(localStorage.getItem("prixtotalpanier"));
  console.log(prixtotalpanier);
  let formulaire = JSON.parse(localStorage.getItem("formulaire"));
  console.log(formulaire);
     
  
//au clic du bouton : 
  // - vérifier si tous les champs sont remplis
  // - envoyer au serveur si toutes les données sont validées : toutes les valeurs doivent etre true 
  
let btnenvoyerFormulaire = document.getElementById("confirm-command");
console.log(btnenvoyerFormulaire);

//Au clic du bouton : 
btnenvoyerFormulaire.addEventListener("click", (e) => {
  e.preventDefault();
  verifierAllFields();  
  ;  
})
  
////////////////////////// FONCTIONS /////////////////////

///-----------------validation du formulaire------------
  //- controle les champs 1 par 1 avec les expressions régulieres- rationnelle / regex

// fonction regex commun pour nom, prenom et ville 
let regExNomPrenomVille = (value) => {
  //commencer par 1 lettre en maj ou min +  3 lettres min/ max 20
  return /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/.test(value);
  // sans espace  
  //return /^[A-Za-z]{3,20}$/.test(value) 
 
};

let regExEmail = (value) => {
  return /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
  .test(value);
}
// message d'erreur pour le remplissage
let textAlert = (value) =>{    
  return `Le ${value} est incorrect\n Minimun 3 caractéres, maximum 20 !\n  Les chiffres et symboles ne sont pas autorisés!`;
}
let textAlertRemplissage = `le formulaire doit etre entierement rempli \n`;

function validateNom() {   
    let validationNom = document.getElementById("nom").value;
    if (regExNomPrenomVille(validationNom) && validationNom !== " " ) {      
      document.getElementById("nom").style.border = "2px solid green";
      console.log("true");       
      return true;
    } else {
      document.getElementById("nom").style.border = "2px solid red";
      document.getElementById("message").innerText = textAlertRemplissage + textAlert("Nom");
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
    document.getElementById("message").innerText = textAlertRemplissage + textAlert("Prénom");
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
    document.getElementById("message").innerText =
    textAlertRemplissage + textAlert("ville");      
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
    document.getElementById("message").innerText = textAlertRemplissage + " L'adresse mail est incorrecte ";
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
    document.getElementById("message").innerText = textAlertRemplissage + " Le code postal doit être composée de 5 chiffres "   
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
    document.getElementById("message").innerText = textAlertRemplissage+ 
    " l'adresse est incorrect \n Les chiffres et symboles ne sont pas autorisés "; 
    console.log("false");   
  return false;
       ;
  }
}

// vérifier si tous les champs sont remplis correctement  : toutes les valeurs sont passées à true
function verifierAllFields() { 
  if (validateNom() == true &&  validatePrenom() == true &&  validateEmail() == true &&
      validateAddress() == true && validateCodePostal() == true &&  validateVille() == true
    ) {
      // // mettre les valeurs du formulaire et les produits selectionnés dans un objet pour envoyer au serveur

      let products = [];
      for (let i = 0; i < panier.length; i++) {
        if (panier[i].quantité >= 1) {
          products.push(panier[i]._id) * panier[i].quantité;
        }
      }
      console.log(products);

      let contact = {      
      firstName: document.getElementById("prenom").value,
      lastName: document.getElementById("nom").value,
      address: document.getElementById("adresse").value,
      city: document.getElementById("ville").value,
      email: document.getElementById("email").value,  
      };

      let aEnvoyer = {
        contact,
        products,
        };
      console.log("a envoyer au serveur");
      console.log(aEnvoyer);
     
      // l'ensemble des champs est conforme: envoi du formulaire avec post
      fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aEnvoyer), // convertir objet en chaine de caractere        
      })
        .then((response) => {
          return response.json();
        })
        .then((r) => {
          // console.log(r);
          // console.log(r.contact);
          // console.log(r.orderId);
          localStorage.setItem("retourCommande",JSON.stringify(r.orderId));
          window.location.replace("confirmation.html");
        })

        .catch((err) => {
          console.log("Erreur");
        });
       

      // // document.getElementById("formulaire_validation").submit();
    }else {
    console.log("commande non envoyée");
    //sinon message d'erreur
    document.getElementById("message").innerText =     
    "Le formulaire n'est pas complet : merci de renseigner tous les élements ";
  }
}




































// ---------A finir : contenu du LS dans formualire lors du changement de page ------------------

//--------------mettre le contenu du LS dans les champs du formulaire---//
// il ne s'efface pas si changement de la page      
// let donneesLocalStorage = localStorage.getItem("formulaire");
// // convertir la chaine de caractére en JS
// let donneesLocalStorageObjet = JSON.parse(donneesLocalStorage);
// console.log("données du LS : ");
// console.log(donneesLocalStorageObjet);

// document.getElementById("prenom").setAttribute('value', donneesLocalStorageObjet.prenom)


