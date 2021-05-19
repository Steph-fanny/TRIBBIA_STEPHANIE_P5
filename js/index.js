

(async function () {
    const articles = await getArticles()  /*récupération des info ours*/  

    console.log("articles:")  
    console.log(articles);

    // parcourir le tableau des articles
    for (article of articles) {  
        //lancer l'affichage de chaque article          
        displayArticle(article)  
    }
} )()

function getArticles(){   
    /*url ou l'on va chercher l'information)*/    
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
    .catch(function(error){ 
            alert(error)              /*une erreur est survenue*/
        })               
}


/*affichage de tous les articles*/
function displayArticle(article){
    // console.log("article:")  
    // console.log(article)  

    let templateElt = document.getElementById("templateArticle")
    let cloneElt = document.importNode(templateElt.content, true)
    // console.log(cloneElt);
   
    cloneElt.getElementById("card_title").textContent = article.name;   
    cloneElt.getElementById("card_price").textContent = article.price +" euros";   
    cloneElt.getElementById("card_img").src = article.imageUrl;
    cloneElt.getElementById("card_link").setAttribute("href", "ourson.html?id="+article._id);

    console.log(cloneElt);

    document.getElementById("row_articles").appendChild(cloneElt)
}

