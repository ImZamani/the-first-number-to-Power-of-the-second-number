let $ = document
let FirstNumber = $.querySelector(".FirstNumber")
let SecondNumber = $.querySelector(".SecondNumber")
let btn = $.querySelector(".btn")
let showResult = $.querySelector(".showResult")


btn.addEventListener("click" , ()=> {
    let result = FirstNumber.value ** SecondNumber.value
    showResult.innerHTML = result
})