
let result = document.getElementById('result');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');
let calculation = document.getElementById('calculation');
let divide = document.getElementById('divide');
let multiple = document.getElementById('multiple');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');


function input(value){
    calculation.textContent = value;
}

clear.addEventListener('click', function(){
    calculation.textContent = "";
    result.textContent = "0";
})

equal.addEventListener('click', function(){
    result.textContent = calculation.innerHTML;
})