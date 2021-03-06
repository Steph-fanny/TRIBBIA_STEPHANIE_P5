// ETAPES/
  // 1: Récupération des informations de l'ourson selectionné : par son id
  // 2: Affichage des options de l'article selectioné : couleurs
  // 3: Validation de l'article au click du bouton
  // 4: Local storage : différentes étapes

//***************************** LOGIQUE ***********************************//  
//*************************************************************************//

// console.log(document.location.href)
let url = new URL(document.location.href);
// console.log(url)
let ourson_id = url.searchParams.get("id");
// console.log(id_ourson);
let address = url.searchParams.get("address");

//***************************** FONCTIONS ***********************************//  
//*************************************************************************//

//****Fonction principale qui execute la fonction getProductData  
(async function () {    
  let productData = await getProductData(ourson_id)  
  // console.log("Données produit:")
  // console.table(productData)
} )()
     
//**** Fonction pour récupérer les données du produit, en paramétre ID du produit (1)
function getProductData (ourson_id){
  // requete vers l'API du serveur
    return fetch("http://localhost:3000/api/teddies/"+ ourson_id)
      // Résultat de la requete format json
      .then(response =>response.json())               
      .then(function(product){
        const img = document.getElementById("product_img");
        img.src = product.imageUrl;                    
        document.getElementById("product_description").textContent = product.description;               
        document.getElementById("product_price").textContent = product.price + " €";
        document.getElementById("product_title").textContent = product.name;
                
        // Choix des couleurs (2)       
        let colors = product.colors
        // console.log(colors) //=>affiche bien le choix de couleur
        for (let i = 0; i < colors.length; i++) {
        // parcourir le tableau des couleurs
        let option_elt = document.createElement("option"); // création d'1 element option
            option_elt.textContent = product.colors[i]; // ajout du contenu dans l'element 'option'
            // attache de l'option au "parent"= select
            document.getElementById("product_color_select").appendChild(option_elt);
          }       
      })                                                           
      .catch(function(error){ 
        alert(error)              
      })   
    }
                  
// Validation de l'article :au click//
bouton.onclick = () => {
  // création objet//
  teddyChoice = {
    _id: ourson_id,
    nom: product_title.textContent,
    prix: product_price.textContent,
    quantité: qt.value,
    colors: product_color_select.value,
  };

  //***************************** LOCAL STORAGE (LS) *************************/
  //*************************************************************************//
  // 1. stocker les caractéristiques de l'ourson dans le LS (données non perdues aprés fermeture du navigateur)
  // 1.1 : déclaration variable "panier" : key et values qui sont dans le LS
  // 1.2 : retourner la valeur associée, à ce stade, il n y a rien
  // JSON.parse : convertir donnes du LS du format json en objet JS
  // retourne la valeur associée à 1 clientInformation, à ce stade, il n y a rien
  // 2. Fenêtre pop up pour confirmer au click du bouton que le produit a été ajouter
  // 3. Ajouter le produit selectionné dans le LS
  // 3.1 : mettre dans le tableau les valeurs de teddychoice choisi par l'utilisateur

  //Enregistrer les données dans le LS avec la variable panier
  let panier = JSON.parse(localStorage.getItem("panier"));
  console.log(panier);

  alert(`L'ourson ${product_title.textContent}, Couleur : ${product_color_select.value}
       a bien été ajouté au panier! `);

  // //----------- fonction fenêtre pop up------------------// a revoir car ne fonctionne pas 
  // let popupconfirmation = () => {
  //   if (window.confirm(
  //       //nom
  //     `L'ourson ${product_title.textContent}
  //     Couleur : ${product_color_select.value}
  //     a bien été ajouté au panier
  //     Souhaitez vous consulter votre panier?`)
  //   ) {
  //     // window.location.href = "panier.html";
  //     console.log("ok");
  //   } else {
  //     // window.location.href = "index.html";
  //     console.log("non");
  //   }
  // };

  //********************************** FONCTIONS ****************************//
  //*************************************************************************//

  // ajouter le produit selectionné dans le LS----//
  let addProductLs = () => {
    //mettre dans le tableau les valeurs de teddychoice choisi par l'utilisateur
    panier.push(teddyChoice);
    // transforme l'objet en chaine de caractére et envoie dans la clef "panier"
    localStorage.setItem("panier", JSON.stringify(panier));
  };

  function gestionDoublons(panier, teddyChoice) {
    console.log("gestionDoublons()");
    let doublonExiste = false;
    //on parcourt le panier
    for (let i = 0; i < panier.length; i++) {
      // si l'on trouve le meme id et la même couleur : on rajoute les quantites de teddychoice à l'ourson déja présent
      if (
        teddyChoice._id == panier[i]._id &&
        teddyChoice.colors == panier[i].colors
      ) {
        doublonExiste = true;
        console.log("doublon trouvé :");
        // console.log(teddyChoice.id);
        // console.log(teddyChoice.colors);

        // on modifie la qté du nouvel ourson:
        // variable avec le calcul de la nouvelle quantité de l'ourson
        let nouvelleQuantite =
          parseInt(panier[i].quantité) + parseInt(teddyChoice.quantité);
        console.log(nouvelleQuantite);
        // mettre la nouvelle quantité dans la variable panier
        panier[i].quantité = nouvelleQuantite;
      } else {
        console.log("doublon non trouvé :");
        console.log(teddyChoice.id);
        console.log(teddyChoice.colors);
      }
    }
    //s'il n'y a pas de doublon : push addproductLS
    if (doublonExiste == false) {
      addProductLs();
    } else {
      //  enregistrer la variable panier dans le LS
      localStorage.setItem("panier", JSON.stringify(panier));
    }
  }

  //*************************************LOGIQUE ******************************//
  //----------vérifier s'il y a déja des produits enregistré dans le LS
  //si valeur = null ou '' => false)
  // la valeur (clef) dans le else a été créer => le if devient true

  if (panier) {
    // s'il n'y a pas de produit déja enregistré
    // sinon ajout d'1 nouveau produit des que le 1 er est enregistré (else)
    gestionDoublons(panier, teddyChoice);
    //allez sur le panier ou continuer achat
  } else {
    panier = [];
    addProductLs();
    console.log(panier);
  }
}
  


    
