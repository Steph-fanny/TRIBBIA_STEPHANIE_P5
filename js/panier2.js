// Etape :


    // 1 : récupérer le panier  du localstorage
    // 2 : vérification si le panier est vide
    // 3 : si le panier est vide => affichage message " panier vide"
    // 4 : sinon : affichage du panier
        // 4.1 : parcourir le panier =>for
            // 4.1.1 : pour chaque items du panier => creation d'une nouvelle ligne
            // 4.1.2 : création des colonnes pour chaque données =>integration avec la ligne
            // 4.1.3  : "append" de la ligne au tableau
    
// -------------------------------Logique -----------------------------//  

// 1 : récupérer les donnnées de l'ourson choisi en appelant la clef (panier):   
let panier = JSON.parse(localStorage.getItem("panier"));

//2 : vérification si le panier est vide
if (!panier) { // si le panier est vide
    affichagePanierVide();
} else {  // si le panier n'est pas vide    
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
            document.getElementById("liste_produit_panier").appendChild(row);

            //affichage colonne prix
            let column_price = document.createElement("th");
            column_price.textContent = panier[i].prix;
            row.appendChild(column_price);
            // console.log(panier[i].prix);

            //affichage colonne quantité
            let column_qt = document.createElement("th");
            column_qt.textContent = panier[i].quantité;
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
             function sumcolumnTotalPrice(column_qt ,column_price){
                 return column_qt.textContent*column_price.textContent
             } 
            row.appendChild(columnTotalPrice); 
            console.log(sumcolumnTotalPrice);





            //   création bouton supprimer : fonctionne
            let btnSupprimer = document.createElement("button");
            btnSupprimer.textContent = "supprimer";            
            row.appendChild(btnSupprimer);
           



          


       }
}




        // //supprimer une ligne
        // function deleteRow() {
        //     btnSupprimer.addEventListener("click" , (event) => {  
        //     event.preventDefault(); // eviter que lors du click=> rechargement de la page
        //     // console.log(btnSupprimer)
                

        // })


        // //calcul du total
          // let totalPricePanier = document.getElementById("totalPrice");
          // totalPricePanier.innerHTML= "Total : " + totalPrice + "euros"
 