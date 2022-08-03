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
    let tesxts = calculation.innerText;

    let signDected = tesxts.charAt(tesxts.length - 1);

    if (calculation.innerText == 0) {
        calculation.textContent = value;
    } else if (signDected == "%" || signDected == "/" || signDected == "*" || signDected == "-" || signDected == "+") {
        if (value == "%" || value == "/" || value == "*" || value == "-" || value == "+") {
            calculation.innerText = tesxts.replace(signDected, value);
        } else {
            calculation.textContent = calculation.innerText + getinput;
        }
    } else if (calculation.innerText == "%" || calculation.innerText == "/" || calculation.innerText == "*" || calculation.innerText == "-" || calculation.innerText == "+") {
        calculation.textContent = value;
    } else {
        calculation.textContent = calculation.innerText + getinput;
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
    } else {
        let disText = calculation.textContent;
        let calArr = disText.slice(0, -1);
        calculation.textContent = calArr;
    }
})