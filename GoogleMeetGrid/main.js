let container = document.querySelector("div.container")
let allcontainer = document.querySelectorAll("div.container")
let gridbox = document.querySelector("div.gridbox")
let allgridbox = document.querySelectorAll("div.gridbox")
let btn = document.querySelector("button")

function add() {
    btn.addEventListener("click",todo = () => {
        setTimeout(todo, 1000);
        container.innerHTML += `<div class="gridbox">
        <img src="./image/istockphoto-1196172395-612x612.jpg" alt="">
        <h6>Ad Soyad</h6>
    </div>`

    })
}

add()

