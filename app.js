let result = document.getElementById('result');
let deleteOne = document.getElementById('deleteOne');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');
let calculation = document.getElementById('calculation');
let divide = document.getElementById('divide');
let multiple = document.getElementById('multiple');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

function input(value) {

    let getinput = value;
    let calText = calculation.innerText;
    let signDected = calText.charAt(calText.length - 1);

    if (calText == 0 || calText == "%" || calText == "/" || calText == "*" || calText == "+") {
        calculation.textContent = value;
    } else if (signDected == "%" || signDected == "/" || signDected == "*" || signDected == "-" || signDected == "+") {
        if (value == "%" || value == "/" || value == "*" || value == "-" || value == "+") {
            calText = calText.replace(signDected, value);
        } else {
            calculation.textContent = calText + getinput;
        }
    }else if (calText == "%" || calText == "/" || calText == "*" || calText == "-" || calText == "+") {
        calculation.textContent = value;
    } else {
        calculation.textContent = calText + getinput;
    }
}

clear.addEventListener('click', function () {
    calculation.textContent = "0";
    result.textContent = "";
})

equal.addEventListener('click', function () {
    result.textContent = eval(calculation.innerHTML);
})

deleteOne.addEventListener('click', function () {

    if (calculation.innerText.length == 1) {
        calculation.textContent = "0";
        result.textContent = "";
    } else {
        let disText = calculation.textContent;
        let calArr = disText.slice(0, -1);
        calculation.textContent = calArr;
    }
})