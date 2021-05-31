// console.log(document.location.href)
let url = new URL(document.location.href);
// console.log(url)
let ourson_id = url.searchParams.get("id");
// console.log(id_ourson);
let address = url.searchParams.get("address");



(async function () {    
  let productData = await getProductData(ourson_id)  /*récupération des info ours*/  
  // console.log("Données produit:")
  // console.table(productData)

} )()

  // let productData = getProductData(ourson_id) /*récupération des info ours*/ 
    

// fonction pour récupérer les données du produit, en paramétre ID du produit
  function getProductData (ourson_id){
    //  requete vers l'API du serveur
      return fetch("http://localhost:3000/api/teddies/"+ ourson_id)
        // Résultat de la requete format json
        .then(response =>response.json())               
        .then(function(product){
          const img = document.getElementById("product_img");
            img.src = product.imageUrl;                    
          document.getElementById("product_description").textContent = product.description;               
          document.getElementById("product_price").textContent = product.price + " €";
          document.getElementById("product_title").textContent = product.name;
                
          // 1. Choix des couleurs        
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
                  
// Validation du panier au click//
  bouton.onclick = () => {
  // création objet//
    teddyChoice = {
      id: ourson_id,
      nom: product_title.textContent,
      prix: product_price.textContent,
      quantité: qt.value,
      colors: product_color_select.value,
      };

  //   window.alert("Produit ajouté au panier");


//--------------------------LOCAL STORAGE (LS)-----------------------//
  // 1. stocker les caractéristiques de l'ourson dans le LS (données non perdues aprés fermeture du navigateur)
    // 1.1 : déclaration variable "panier" : key et values qui sont dans le LS
    // 1.2 : retourner la valeur associée, à ce stade, il n y a rien
      // JSON.parse : convertir donnes du LS du format json en objet JS
      // retourne la valeur associée à 1 clientInformation, à ce stade, il n y a rien
  // 2. Fenêtre pop up pour confirmer au click du bouton que le produit a été ajouter
  // 3. Ajouter le produit selectionné dans le LS
    // 3.1 : mettre dans le tableau les valeurs de teddychoice choisi par l'utilisateur


  let panier = JSON.parse(localStorage.getItem("panier"));
  console.log(panier);

  //----------- fonction fenêtre pop up------------------//
  let popupconfirmation = () => {
    if (
      window.confirm(`nom: ${product_title.textContent} colors: ${product_color_select.value}
      a bien été ajouté au panier 
      Consulter le panier Ok ou revenir à l'accueil ANNULER`)
      ){
      window.location.href ="panier.html";
      }
       else {
      window.location.href = "index.html";
      }
  };

  //------- ajouter le produit selectionné dans le LS----//
    let addProductLs = () => {
    //mettre dans le tableau les valeurs de teddychoice choisi par l'utilisateur
    panier.push(teddyChoice);
    // transforme l'objet en chaine de caractére et envoie dans la clef "panier"
    localStorage.setItem("panier", JSON.stringify(panier));
    };

  //-------vérifier s'il y a déja des produits enregistré dans le LS-------
    //si valeur = null ou '' => false)
    // la valeur (clef) dans le else a été créer => le if devient true

    if (panier) {  // s'il n'y a pas de produit déja enregistré      
                       // sinon ajout d'1 nouveau produit des que le 1 er est enregistré (else)
    addProductLs();
      //allez sur le panier ou continuer achat
      popupconfirmation();
    } else {
      panier = [];
      addProductLs();
      console.log(panier);
      popupconfirmation();
    }





    

//-----verifier s'il n'y a pas de doublon d'article----

  if (!ourson_id) { // s'il n'y a pas de doublon
      addProductLs();
      console.log("pas de doublon")
  } else {  // s'il y a des doublons    
      ajouterLesQuantites();
  }


}


function ajouterLesQuantites(){
for (i = 0; i < panier.length; i++) {
   id_selectionné === panier[i].id;
    qt.value.textContent

 

    



}


}

    
