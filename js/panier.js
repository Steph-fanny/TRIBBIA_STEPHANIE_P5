// aide pour ne pas supprimer le nvo produit ajout
// ProductFromSgorage = JSON.parse(localstorage.getItem(‘le nom de l’objet produits’)
// ProductFromStorage.push(‘nouveau produit’);
// localstorage.setItem(‘le non des produits’, productsFromStorage);
// Prochaine étape vérifies si le produit existe pour incrémenter son nombre.
// Pour supprimer un produit on fait pareil




// Etapes :
// 1.création tableau panier

  // Création d'une ligne du tableau et attache à l'élement parent
  // let newTableLine = document.createElement("tr")
  // document.getElementById("productList").appendChild(newTableLine)
  //   // création des colonnes:
  // let newTablecolumn = document.createElement("th")
  // document.getElementsById("tr").appendChild(newTablecolumn)

  //   // création boutton supprimer pour chaque article
  // let btn = document.createElement("button");
  // btn.innertext= "supprimer"

     



    // récupération donnée API
    fetch("http://localhost:3000/api/teddies/")
      // Résultat de la requete format json
      .then(function (response){
        if (response.ok){ 
          return response.json();
        }
      })

      .then (function addTeddiesInfo () {
        //récupérer les donnnées en appelant la clef (panier):
        // JSON.parse: prend le string et le transforme en objet
        let recuperationPanier = JSON.parse(localStorage.getItem("panier"));       
          // si le panier est vide => affichage message info
          if (recuperationPanier.lenght === 0) {
            window.alert("votre panier est vide");
          }
        
          else{recuperationPanier.push;
            

            }






        //   //ajouter au tableau en vérifiant que le tableau n'est pas vide
        //   if (TeddieAdd!==""){
        //     panier.push(TeddieAdd);

        
        //     }else{
        //       let totalPrice = 0;
      })

  // })
    // panier[panier.lenght]= "another product"; //OU
// panier.push("another product")



    // // Supprimer les éléments du panier :
    // button_clear.onclick= ()=>{
    //     localStorage.clear();
    //     // recharger la page aprés click bouton
    //     document.location.reload();
    // }
