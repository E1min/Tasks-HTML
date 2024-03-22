let billinput = document.querySelector(".bill input");
let numpeopleinput = document.querySelector(".numpeople input");
let tips = document.querySelectorAll(".tips");
let custom = document.querySelector(".tips-in input");
let displayAmount = document.querySelector(".display-amount")
let displayTotal = document.querySelector(".display-total")
let notfelem = document.querySelector(".notf");
let resetbtn = document.querySelector(".button button");
let percent = [];

tips.forEach(item => {
    item.addEventListener("click", () => {
        tips.forEach(item => item.classList.remove("active"))
        item.classList.toggle("active")
        percent.unshift(item.textContent.slice(0, -1));
        custom.value = ""
        displayAmount.textContent = `$${((billinput.value * percent[0]) / 100) / numpeopleinput.value}`
        displayTotal.textContent = `$${(+billinput.value + (billinput.value * percent[0]) / 100) / numpeopleinput.value}`
        if (displayTotal.textContent !== "$0.00") {
            resetbtn.className = "btnactive"
        }
    })


    resetbtn.addEventListener("click", () => {
        displayTotal.textContent = "$0.00"
        displayAmount.textContent = "$0.00"
        numpeopleinput.value = 1;
        resetbtn.className = ""
        billinput.value = ""
        custom.value = ""
        item.classList.remove("active")
        billinput.classList.remove("numred")

    })
    custom.addEventListener("keyup", () => {
        if (billinput.value === "") {
            billinput.classList.add("numred")
            displayAmount.textContent = "add bill!";
            displayTotal.textContent = "add bill!";
        }
        else {
            item.classList.remove("active")
            displayAmount.textContent = `$${((billinput.value * custom.value) / 100) / numpeopleinput.value}`
            displayTotal.textContent = `$${(+billinput.value + (billinput.value * custom.value) / 100) / numpeopleinput.value}`
        }

        billinput.addEventListener("keyup", () => {
            if (billinput.value > 0) {
                billinput.classList.remove("numred")
                displayTotal.textContent = "$0.00"
                displayAmount.textContent = "$0.00"
            }
        })

    })

})


numpeopleinput.addEventListener("keyup", () => {
    if (numpeopleinput.value == "" || numpeopleinput.value < 1) {
        notfelem.innerHTML = "Can't be zero"
        numpeopleinput.classList.add("numred")
    } else {
        numpeopleinput.classList.remove("numred")
        notfelem.innerHTML = ""
        displayAmount.textContent = `$${((billinput.value * percent[0]) / 100) / numpeopleinput.value}`
        displayTotal.textContent = `$${(+billinput.value + (billinput.value * percent[0]) / 100) / numpeopleinput.value}`
    }


})
