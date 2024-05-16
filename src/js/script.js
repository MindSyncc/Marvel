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