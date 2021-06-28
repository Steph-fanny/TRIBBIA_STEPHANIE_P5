///// ETAPES: 

    // 1 : Récupérer les infos ourson du serveur grace à une fonction
    // 2 : Afficher tous les articles: fonction
    // 3 : Cloner et afficher l'article qui sera en template

//Fonction principal contenant le code de base qui s'exécute dés le chargement de la page
(async function () {
    // recupération des articles avec la fonction getArticles
    //await : attendre que la promesse soit résolu : mais uniquement dans fonction asynchrone: async
    const articles = await getArticles()  
    console.log("articles:")  
    console.log(articles);

    // parcourir le tableau des articles : boucle of : chaque article de la liste article
    // article = article[i]
    for (article of articles) {  
        //Affichage de chaque article          
        displayArticle(article)  
    }
})()

// **** 1: fonction qui récupére les infos du serveur
function getArticles(){   
    /*url ou l'on va chercher l'information)*/  
    // faire un return de tout le fetch  
    return fetch("http://localhost:3000/api/teddies") 
    /*executer quand il aura récupéré les données)*/
        .then(function(res){         
            if(res.ok) {        
            return res.json();
            }  
        })       
        .then(function(articles) {            
            return articles              
        })     
        //si le fetch ne marche pas   
        .catch(function (error) {
            // affichage de l'erreur à l'utilisateur
          alert(error); 
        });               
}

//****** 2: fonction qui affiche tous les articles
function displayArticle(article){
    // console.log("article:")  
    // console.log(article)  

    let templateElt = document.getElementById("templateArticle")
    // clone element template
    let cloneElt = document.importNode(templateElt.content, true)
    // console.log(cloneElt);
   
    cloneElt.getElementById("card_title").textContent = article.name;   
    cloneElt.getElementById("card_price").textContent = article.price +" euros";   
    cloneElt.getElementById("card_img").src = article.imageUrl;
    cloneElt.getElementById("card_link").setAttribute("href", "ourson.html?id="+article._id);

    console.log(cloneElt);
    document.getElementById("row_articles").appendChild(cloneElt)
}

