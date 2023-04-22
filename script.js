let overlay = document.querySelector(".overlay")
let content = document.querySelector(".content")
let gallary = document.querySelectorAll(".gallary")
let img = document.getElementById("img")
let close = document.querySelector(".close")
gallary.forEach(e => {
    e.addEventListener("click", function(){
        overlay.classList.remove("hide")
        img.style.background = `url(img/${e.classList[1]}.jpg)`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = `no-repeat`
        img.style.backgroundSize  = `50%`
    })
})
close.addEventListener("click", function(){
    overlay.classList.add("hide")
})
img.addEventListener("click", function(){
    if( img.style.scale == "1.3"){
        img.style.scale  = "1"
    }else{
    img.style.scale = "1.3"
    }
})
