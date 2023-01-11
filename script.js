let numbers = document.querySelectorAll(".n");
let expression =  document.getElementById("expression");
let calculate = document.getElementById("calculate");
let clear = document.getElementById("clear");
let finished = 0;

clear.addEventListener("click", limpar)
calculate.addEventListener("click", calcular);

numbers.forEach(function(element){
    element.addEventListener("click", get);
})

function get(event){
    let number = event.target.innerHTML;
    if(finished == 1 && number != "+" && number != "-" && number != "x"){
        expression.innerHTML = "";
        finished = 0;
    }
    else{
        finished = 0;
    }
    expression.innerHTML += number;
}

function calcular(){
    if(expression.innerHTML == ""){
        return;
    }
    let formated = expression.innerHTML.replaceAll("x", "*");
    try{
        eval(formated);
    }
    catch{
        expression.innerHTML = "ERROR";
        setTimeout(error, 100);
        return;
    }
    let result = eval(formated);

    expression.innerHTML = result;
    finished = 1;
}

function limpar(){
    expression.innerHTML = "";
}

function error(){
    expression.innerHTML = "";
}