
const btn = document.getElementsByClassName("butt");

function display(value){
    const answer = document.getElementById("answer");
    answer.value += value;
    return value;
}

function result1(){
    const currentValue = document.getElementById("answer").value
    const updateValue = eval(currentValue);
    document.getElementById("answer").value = updateValue
    return updateValue;
}

function allClear(){
    const ans = document.getElementById("answer");
    ans.value = "";
    
}