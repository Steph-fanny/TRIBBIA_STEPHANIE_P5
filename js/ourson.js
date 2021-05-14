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
                document.getElementById("product_description").textContent = product.description                
                document.getElementById("product_price").textContent = product.price +" euros"
                document.getElementById("product_title").textContent = product.name
                // document.getElementById("product_color").textContent = "choisissez votre couleur: "+ product.colors
                // document.getElementById("inlineFormCustomSelectPref").textContent = product.colors
               
                
            })   
                      
            .catch(function(error){ 
                alert(error)     
                console.log('erreur: '+ err);        
             }) 
                     
        }     
              
        
        
   

        
                 
 

     






