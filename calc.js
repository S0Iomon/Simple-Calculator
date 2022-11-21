let items = document.querySelectorAll(".items")
let answer = document.querySelector("#answer")
let equals = document.querySelector('#equal')
let operations = document.querySelectorAll(".operation")
let startAgain = document.querySelector('.del')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')

for (let i = 0; i < items.length; i++){
    items[i].addEventListener('click', event => {
        if (answer.textContent == 0){
            answer.textContent = items[i].textContent
        }
        else if (answer.textContent != 0){
            answer.textContent +=  items[i].textContent
        }
    })
}

for (let i = 0; i < operations.length; i++){
    operations[i].addEventListener("click", event => { 
    if (answer.textContent[answer.textContent.length-1] != operations[i].textContent){
        answer.textContent = answer.textContent + operations[i].textContent
    } else if (answer.textContent[answer.textContent.length-1] == operations[i].textContent){
        answer.textContent = answer.textContent
    }
})   
}

let final;
equals.addEventListener('click', event => {
    if (answer.textContent.includes('×')){
        final = answer.textContent.split('×')
        final = `${final[0]}*${final[final.length-1]}`  
    } else if (answer.textContent.includes('÷')){
        final = answer.textContent.split('÷')
        final = `${final[0]}/${final[final.length-1]}`  
    } else {
        final = eval(answer.textContent)
    }

    answer.textContent = eval(final)
})

startAgain.addEventListener('click', event => {
    answer.textContent = 0;
})
