let result = document.getElementById('result');
let deleteOne = document.getElementById('deleteOne');
let clear = document.getElementById('clear');
let squareRoot = document.getElementById('squareRoot');
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

    if (calText == 0 || calText == "%" || calText == "/" || calText == "*" || calText == "+" || calText == "^" || calText == ")") {
        calculation.innerText = value;
    } else if (signDected == "%" || signDected == "/" || signDected == "*" || signDected == "-" || signDected == "+" || signDected == "^" || signDected == "(") {
        if (getinput == "%" || getinput == "/" || getinput == "*" || getinput == "-" || getinput == "+" || getinput == "^" || getinput == "(" || getinput == ")") {
            calculation.innerText = calText.slice(0, -1) + getinput;
        } else {
            calculation.innerText = calText + getinput;
        }
    } else {
        calculation.textContent = calText + getinput;
    }

    // if(calText.length >= 15){
    //     calculation.classList.add("text_left");
    // }else{
    //     calculation.classList.remove("text_left");
    // }
}


// squareRoot.addEventListener('click', function(){

//     Math.sqrt(calculation.innerText.slice(1));
//     alert("√");
//     alert("√");

// });

clear.addEventListener('click', function () {
    calculation.textContent = "0";
    result.textContent = "";
})

// equal.addEventListener('click', function () {
//     if (calculation.textContent.indexOf("√") == 0) {
//         let math = Math.sqrt(calculation.innerText.slice(1));
//         myMath(math);
//     } else {
//         let math = eval(calculation.innerHTML);
//         myMath(math);
//     }

//     function myMath(math) {
//         if (math.toString().length > 5) {
//             result.textContent = Number.parseFloat(math).toFixed(4);
//         } else {
//             result.textContent = math;
//         }
//     }
// })

deleteOne.addEventListener('click', function () {

    let calText = calculation.innerText;

    if (calText.length == 1) {
        calculation.textContent = "0";
        result.textContent = "";
    } else {
        let disText = calculation.textContent;
        let calArr = disText.slice(0, -1);
        calculation.textContent = calArr;
    }

    // if(calText.length >= 15){
    //     calculation.classList.add("text_left");
    // }else{
    //     calculation.classList.remove("text_left");
    // }
})

let bgColor = document.getElementById('bgColor');
let mainBody = document.getElementById('mainBody');

bgColor.addEventListener('click', function () {

    let icon = document.querySelector('#bgColor i');
    var testClass = icon.className;
    var bodyClass = mainBody.className;
    if (testClass == "fa-solid fa-sun") {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    if (bodyClass == "body_dark") {
        mainBody.classList.remove('body_dark');
        mainBody.classList.add('body_light');
    } else {
        mainBody.classList.remove('body_light');
        mainBody.classList.add('body_dark');
    }

});

setInterval(function () {
    let signName = ["+", "-", "*", "/"];
    for (i = 0; i < signName.length; i++) {
        if (calculation.textContent != 0 && calculation.textContent.indexOf(signName[i]) !== 0 && calculation.textContent.indexOf(signName[i] - 1) !== 0) {

            if (calculation.textContent.indexOf("√") == 0) {
                let math = Math.sqrt(calculation.innerText.slice(1));
                myMath(math);
            } else {
                let math = eval(calculation.innerHTML);
                myMath(math);
            }

            function myMath(math) {
                if (math.toString().length > 5) {
                    result.textContent = Number.parseFloat(math).toFixed(4);
                } else {
                    result.textContent = math;
                }
            }

        }
    }

})