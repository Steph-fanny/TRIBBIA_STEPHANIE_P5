

/// 2 eme methode
let btnenvoyerFormulaire = document.getElementById("confirm-command");
console.log(btnenvoyerFormulaire);

btnenvoyerFormulaire.addEventListener("click", (e) => {
e.preventDefault();
verifierAllFields()




// // vérifier si tous les champs sont remplis correctement  : toutes les valeurs sont passées à true
function verifierAllFields() { 
validateCodePostal();
validateVille();
validateAddress();
validateEmail();
validatePrenom();
validateNom();


 if ( validateNom() == true &&    validatePrenom() == true &&    validateEmail() == true &&
    validateAddress() == true &&    validateCodePostal() == true &&    validateVille() == true
  ) {
    // => l'ensemble des champs est conforme
    document.getElementById("message").innerText ="Le formulaire est correctement rempli";
    console.log("tout est ok");






    // // Récupérer les valeurs pour les placer dans le LS
    let formulaireValues = {
      nom: document.getElementById("nom").value,
      prenom: document.getElementById("prenom").value,
      Email: document.getElementById("email").value,
      adresse: document.getElementById("adresse").value,
      ville: document.getElementById("ville").value,
      codepostal: document.getElementById("code_postal").value,
    }
    console.log("Valeurs du formulaire :");
    console.log(formulaireValues);

    localStorage.setItem("formulaire", JSON.stringify(formulaireValues));

    //envoi du formulaire avec post
    // document.getElementById("formulaire").submit();

      //     } else {

       //sinon message d'erreur
      //  document.getElementById("message").innerText =
      // "Le formulaire n'est pas complet : merci de renseigner tous les élements ";
      }
  }
})


     
// //Récupérer l'orderId
//   fetch('http://localhost:3000/api/cameras/order', {
//     method: 'post',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       contact: contact,
//       products: products
//     })
//   })
//     .then(response => response.json())
//     .then(order => {
//       localStorage.setItem("orderId", order.orderId);
//       window.location.href = "order.html";
//     })

