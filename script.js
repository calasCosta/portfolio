
window.onload = function() {


    (function(){
        let copyright = document.getElementById("copyright");
        let date = new Date(Date.now()).getFullYear();
    
        copyright.innerText = date;
    }())
    
    
    (function(){
        let skills = document.getElementsByClassName("skills");
    
        for(let i = 0; i < skills.length; i++){
            skills[i].style.position = "relative";
            skills[i].addEventListener("mouseover", function(evt){
                
               let p =  document.createElement("div");
               p.innerText = "empty yet";
               p.style.fontSize = "0.6em";
               p.style.color = "#E60965";
               p.style.opacity = "0.6";
               p.style.position = "absolute";
               p.style.width = "100%";
               p.style.right = "0";
               p.style.bottom = "0";
               skills[i].appendChild(p)
            });

            skills[i].addEventListener("mouseout", function(evt){
                let child = skills[i].lastElementChild
                while(child){
                    skills[i].removeChild(child)
                    child = skills[i].lastElementChild
                }
                 
            });
        }
    }())

}



