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
                document.getElementById("product_price").textContent ="Prix : "+ product.price +" euros";
                document.getElementById("product_title").textContent = product.name;
                
                // 1. Choix des couleurs               
                const firstColor = document.getElementById("first_color");
                firstColor.innerText = product.colors[0]

                const secondColor = document.getElementById("second_color");
                secondColor.innerText = product.colors[1]
                    
                const thirdColor = document.getElementById("third_color");
                thirdColor.innerText = product.colors[2]

                const fourthColor = document.getElementById("fourth_color");
                fourthColor.innerText = product.colors[3]
            
               

                // 2 eme essais couleurs
                // document.getElementById("product_color").innerText = product.colors
                // console.log(product_color)
            
                // 3 eme essai colours            
                    // let colorsElt = document.getElementById("productcolors");

                    //afficher toutes les couleurs
                    // product.colors.forEach((colors) =>  {                    
                    // let templateElt = document.getElementById('productColor')
                    // let cloneElt = document.importNode(templateElt.content, true) 
            })                                        
                                                         
            .catch(function(error){ 
                alert(error)              
            })   

        }
      
        // Validation du panier au click//
            bouton.onclick = () => {
                // création objet//
                const teddyChoice = {
                    nom: product_title.textContent,                   
                    prix: product_price.textContent ,
                    quantité: qt.value,
                    colors : product_color_choice.value,                    
                }
                
                // transforme objet en string et enregiste dans le cache
                localStorage.setItem ("choice",JSON.stringify(teddyChoice));
                document.location.reload();              
            }         

       