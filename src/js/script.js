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


const track = document.getElementById("image-track");



window.onmousedown = e => track.dataset.mouseDownAt = e.clientX;

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}
window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -60);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, 0%)`;

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

