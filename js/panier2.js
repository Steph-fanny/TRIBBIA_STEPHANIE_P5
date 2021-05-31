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
    // 7: Montant total du panier        

    
// -------------------------------Logique -----------------------------//  

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

   
//-----------------------------------functions-------------------------------//

    // affichage message "panier vide"
    function affichagePanierVide() {
        window.alert("Votre panier est vide");
    }  

    // affichage des produits d'un panier
    function affichagePanier(panier){
      for (i = 0; i < panier.length; i++) {
        console.log("ligne de produit:");
        console.log(panier[i]);

        let row = document.createElement("tr");
        row.textContent = panier[i].nom;
        row.setAttribute("class", "center");
        document.getElementById("liste_produit_panier").appendChild(row);

        //affichage colonne prix
        let column_price = document.createElement("th");
        column_price.innerText = panier[i].prix;
        row.appendChild(column_price);
        // console.log(panier[i].prix);

        // affichage prix sans "euros" pour calcul total ligne
        let price = parseFloat(column_price.innerText.replace("euros", ""));
        // console.log(price);

        //affichage colonne quantité
        let column_qt = document.createElement("th");
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
        row.appendChild(columnTotalPrice);
        //   console.log("prix total par ligne:");
        //   console.log(columnTotalPrice.innerText);

        //   création bouton supprimer
        let btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "supprimer";
        btnSupprimer.setAttribute("class", "btn btn-secondary btn_supprimer");
        row.appendChild(btnSupprimer);
        // btnSupprimer.addEventListener("click ",(event)=>{
        //     this.annulerRow(i);

        // })

       
      }
    }
    //----------fin fonction affichage produit panier-----------//


    // btn supprimer 1 element du panier au click => supprime Id
    let btn_supprimer = document.querySelectorAll(".btn_supprimer")
    console.log(btn_supprimer)    

    for (let i = 0; i<btn_supprimer.length; i++){
        btn_supprimer[i].addEventListener ("click" , (event) => {
          event.preventDefault(); // eviter que lors du click=> rechargement de la page

          //selectionner Id du produit supprimer
          let id_selectionner_suppression = panier[i].id;
          console.log("id ourson à supprimer:");
          console.log(id_selectionner_suppression);
          console.log(event);

          // methode filter : selectionner les éléments à garder et supprimer element ou le btn
          //supprimer a été cliqué :  avec filter : retourne 1 nouveau tableau avec callback
          panier = panier.filter((el) => el.id !== id_selectionner_suppression);
          // true si l'element doit etre conserver et false : supprimer
          console.log(panier);

          //on envoie la variable panier dans le ls avec la clef"panier"
          localStorage.setItem("panier", JSON.stringify(panier));

          //alert pour avertir que le produit a été supprimer et rechargement de la page
          alert("Ce produit va être supprimé du panier");
          window.location.href = "panier.html"; // on revient à la page d'acceuil
        })                   
    }
    // -----------fin btn supprimer une ligne----------//





    // // supprimer tout le panier: ne fonctionne pas

    let btnDeletePanier = document.getElementsByClassName("btn_delete_panier");
    console.log(btnDeletePanier);
    // // suprimer la clef produit "panier" du Ls pour vider entiérement le panier
    function addEventListener() {
     btnDeletePanier.onclick = (e) => {
       e.preventDefault;
       //removeItem pour vider le local storage
       localStorage.removeItem("panier");
       alert("le panier a été vidé");
       // //     // recharger la page
        window.location.href = "panier.html";
     };
    }











// -------- Montant total du panier------
//         // declaration variable pour y mettre prix présents dans le panier
//         let PrixTotalCalcul = [];
//         //aller chercher les prix dans le panier 
//         for(let i=0; i<panier; i++){
//            let prixTotalLigneProduit 
        // }
        // let prixTotalLigneProduit = price * panier[i].quantité;
        // console.log(prixTotalLigneProduit);
        // mettre les prix dans la variable "prixTotalCalcul"
        // PrixTotalCalcul.push(prixTotalLigneProduit);
        // console.log(PrixTotalCalcul);

        // //additionner les prix qu'il y a dans le tableau "prixtotalcalcul" av methode reducer
        // let reducer = (accumulateur, currentValue) =>
        //   accumulateur + currentValue;
        // let prixTotal = PrixTotalCalcul.reduce(reducer, 0);
        // console.log("prix total: ");
        // console.log(prixTotal);

        //   totalPanier = totalPanier +
        //   console.log(totalPanier)
        //   document.getElementById("total_panier")[0].innerText = totalPanier;
        //  console.log(totalPanier);


// // //calcul du total
//         //calcul du total panier
//         let totalPricePanier = document.getElementById("total_panier");
//         totalPricePanier = columnTotalPrice[i];
//         document.getElementsByClassName("container_panier").appendChild(totalPricePanier);
//         console.log(totalPricePanier);

//         let prixTotal = 0
//         function CalculPrixTotal(columnTotalPrice){
//             for (i = 0; i < columnTotalPrice.length; i++) {
//             prixTotal = prixTotal +  columnTotalPrice[i]  
//             console.log(prixTotal) 

//         localStorage.setItem("prixtotalpanier", prixTotal);
//         }









//-------ne fonctionne pas
        // // let id = e.target.getAttribute("btn_supprimer")  
        // for (let x = 0; x != panier.length; x = x + 1) {        
        //     if (panier[x].id === id_selectionner_suppression) {
        //         panier.splice(x, 1);
        //         break;
        //     }
        //  }
        //     //   //sauvegarde panier mis à jour
        //     //     localStorage.setItem("panier",json.stringify(panier));
        //     //     window.location.href="panier.html"; // on revient à la page d'acceuil
        

          
             
          //     btnSupprimer.addEventListener("click" , function(e) {
          //             // event.preventDefault(); // eviter que lors du click=> rechargement de la page
          //             // console.log(btnSupprimer)
          //     let id = e.target.getAttribute("data-id");

          //     for (let x = 0, x != panier.length; x = x + 1) {
          //         if (panier[x].id === id) {
          //             panier.splice(x, 1);
          //         break;
          //         }
          //     }
          // // localStorage.setItem("panier",json.stringify(panier));
          // // window.location.href="panier.html";

    //     })
    // }




        // //calcul du total
        // let totalPricePanier = document.getElementById("total_panier");
        // totalPricePanier.textContent = columnTotalPrice[i]

        // let prixTotal = 0
        // function CalculPrixTotal(columnTotalPrice){
        //     for (i = 0; i < columnTotalPrice.length; i++) {
        //     prixTotal = prixTotal +  columnTotalPrice[i]  
        //     console.log(prixTotal) 

        // localStorage.setItem("prixtotalpanier", prixTotal);
        // }


 //     localStorage.clear();
    //     // recharger la page aprés click bouton
    //     document.location.reload();
    // }


       