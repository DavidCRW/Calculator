/* Data module */

let valueUI = document.querySelector(".firstUI");
let secondUI = document.querySelector(".secondUI");
let number1 = "";
let number2 = "";
let operator;


/* Functions */

document.querySelector(".numbers").addEventListener("click", (event) =>{
    if(operator === "/" || operator === "*" || operator === "+" || operator === "-"){
        number2 += event.target.id;
        valueUI.innerHTML = number2;
    }else{
        number1 += event.target.id;
        valueUI.innerHTML = number1;
    }
})

document.querySelector(".equal").addEventListener("click", () =>{
    switch(operator){
        case "/":
            valueUI.innerHTML = Number(number1) / Number(number2);
        break;

        case "*":
            valueUI.innerHTML = Number(number1) * Number(number2);
        break;

        case "+":
            valueUI.innerHTML = Number(number1) + Number(number2);
        break;

        case "-":
            valueUI.innerHTML = Number(number1) - Number(number2);
        break;
    };
    number2 = ""
    number1 = valueUI.innerHTML;
    secondUI.innerHTML = number1;
    list()
})

document.querySelector(".clear").addEventListener("click", () =>{
    number1 = "";
    number2 = "";
    operator = "";
    valueUI.innerHTML = 0;
    document.querySelector(".lists").innerHTML = "";
})

document.querySelector(".operators").addEventListener("click", (event) =>{
    operator = event.target.id;
    valueUI.innerHTML = operator;
})

function list(){
    document.querySelector(".lists").insertAdjacentHTML("afterbegin", `${valueUI.innerHTML} <br>`)
}
