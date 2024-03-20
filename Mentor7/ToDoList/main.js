let inputelem = document.querySelector("input")
let btn = document.querySelector("button")
let ulelem = document.querySelector("ul")
let clearbtn=document.querySelector("button:last-child")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputelem.value.trim() ==="") {
        let lielem=document.createElement("li")
        lielem.textContent="Empty List!!!"
        lielem.style.color="red"
        lielem.style.fontSize="36px"
        ulelem.appendChild(lielem)
        let deletebtn=document.createElement("button")
        deletebtn.textContent="X";
        lielem.appendChild(deletebtn)
        deletebtn.addEventListener("click",()=>{
            lielem.remove();
        })

}
else{
    let lielem=document.createElement("li")
    lielem.textContent=inputelem.value
    ulelem.appendChild(lielem)
    let deletebtn=document.createElement("button")
    deletebtn.textContent="X";
    lielem.appendChild(deletebtn)
    deletebtn.addEventListener("click",()=>{
        lielem.remove();
    })
   clearbtn.addEventListener("click",()=>{
        lielem.remove();
    })

    inputelem.value = ""
    console.log(inputelem.value);

}
})



