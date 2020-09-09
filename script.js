let box = document.querySelector(".box")
let submit = document.querySelector("#submit");
let surround = document.querySelector("#surround")
submit.addEventListener("click", runIt);

let random = function () {
    return res = Math.round(Math.random() * 2000)
}

function runIt(e) {
    e.preventDefault();
    surround.style.display = "flex";
    box.style.display = "block";
    setTimeout(() => {
        box.style.display = "none";
        surround.style.display = "none";
    }, random());
}