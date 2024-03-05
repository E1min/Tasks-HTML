window.addEventListener("scroll", function () {
    let header = document.querySelector("header")
    header.classList.toggle("sticky", scrollY >0)
})

var firstindex=0

function autoslide() {
    setTimeout(autoslide, 2000);
    let pics;
    let div=document.querySelectorAll(".sliders div")
    console.log(div);
    for (let pics = 0; pics < div.length; pics++) {
        div[pics].className="passive"
    }
    firstindex++;
    if (firstindex >div.length) {
        firstindex=1
    }

div[firstindex-1].className="active"

}
autoslide()