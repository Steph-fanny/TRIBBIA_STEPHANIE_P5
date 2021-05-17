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
                document.getElementById("product_price").textContent ="Prix : "+ product.price +" euros"
                document.getElementById("product_title").textContent = product.name
                
                // Choix des couleurs
                const firstColor = document.getElementById("first_color");
                firstColor.innerText =  product.colors[0]

                const secondColor = document.getElementById("second_color");
                secondColor.innerText =  product.colors[1]
               
                const thirdColor = document.getElementById("third_color");
                thirdColor.innerText =  product.colors[2]

                const fourthColor = document.getElementById("fourth_color");
                fourthColor.innerText =  product.colors[3]

                // 2 eme essais couleurs
                // document.getElementById("product_color").innerText = product.colors
                // console.log(product_color)
                                              
            })   
               
            

            .catch(function(error){ 
                alert(error)     
                console.log('erreur: '+ err);        
             }) 
                     
        }     

