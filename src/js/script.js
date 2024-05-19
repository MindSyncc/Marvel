//ROLAR SLIDES AUTOMATICAMENTE
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){nextImage();    
}, 5000)
function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

document.addEventListener("DOMContentLoaded", function(){
     
    const email=document.querySelector(".email");
    const mensagem =document.querySelector(".mensagem");

     
    mensagem.classList.add("hidden");

    email.addEventListener("keyup", function(e){
        if(e.keyCode === 13){
            e.preventDefault() 
            mensagem.classList.remove("hidden") 
            email.style.display="none"; 
            email.value =""; 
        }

    })
})