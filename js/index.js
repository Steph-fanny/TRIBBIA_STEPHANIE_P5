

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
    return fetch("http://localhost:3000/api/teddies") /*url ou l'on va chercher l'information)*/
    .then(function(res){         /*executer quand il aura récupéré les données)*/
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


/*affiche de tous les articles*/
function displayArticle(article){
    // console.log("article:")  
    // console.log(article)  

    let templateElt = document.getElementsById("templateArticle")
    let cloneElt = document.importNode(templateElt.content, true)
    // console.log(cloneElt);
   
    cloneElt.getElementsClassName("card_title").textContent = article.name;   
    cloneElt.getElementsByClassName("card_price").textContent = article.price;   
    cloneElt.getElementsByClassName("card_img").innerHTLM = article.img;
    cloneElt.getElementsByClassName("card_link").setAttribute("href", "ourson.html?id="+article._id);

    console.log(cloneElt);

    document.getElementsByClassName("main").appendChild(cloneElt)

}