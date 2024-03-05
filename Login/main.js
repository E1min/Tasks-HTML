
let user = {
    name: "",
    email: "",
    password: ""
}

let inputname = document.querySelector("input")
let inputemail = document.querySelector("input:nth-child(2)")
let inputpassword = document.querySelector("input:nth-child(3)")
let btninput=document.querySelector("button")
let allinput=document.querySelectorAll("input")
let area=document.querySelector("div.free")


function click() {
   
    btninput.addEventListener("click",function (e) {
        e.preventDefault()
        user.name=inputname.value
        user.email=inputemail.value
        user.password=inputpassword.value
        // console.log(user);
        allinput.forEach(item=>{
            item.style.display="none"
        })
        btninput.style.display="none"
        area.innerHTML =`<p">WELCOME</br>Adiniz:${user.name}</br>Emailiniz:${user.email}</br>Sifreniz:${user.password}</p>`

    })
}

click()