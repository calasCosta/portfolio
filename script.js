(function(){
    let articles = document.getElementsByName("article");

    for(let i = 0; i < articles.length; i++){
        articles[i].addEventListener("click", function(evt){
            alert(i);
        });
    }
}())

