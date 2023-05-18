document.addEventListener("DOMContentLoaded",()=>{console.log("document loaded")})

function click(){
    console.log("clicked")
    document.getElementById('clicked').innerText="clicked"
}

document.getElementById("btn").addEventListener("click",click)