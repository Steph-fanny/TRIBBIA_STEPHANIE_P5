


  
    

      //récupérer les donnnées apres avoir appeler le local storage:
    // JSON.parse: prend le string et le transforme en objet
      const recuperationPanier = JSON.parse(localStorage.getItem("teddyChoice"));
      if (recuperationPanier!=null) //si la clef existe...
          document.getElementById("article_name").textContent = recuperationPanier.nom;            

 




    // Supprimer les éléments du panier :
    button_clear.onclick= ()=>{
        localStorage.clear();
        // recharger la page aprés click bouton
        document.location.reload();
    }
