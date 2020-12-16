let ac = document.querySelector(".ac");
let del = document.querySelector(".span-two");
let divide = document.querySelector(".divide");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let x = document.querySelector(".x");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let plus = document.querySelector(".plus");
let zero = document.querySelector(".span-two2");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let preview = document.querySelector(".preview");
let output = document.querySelector(".output");


for (var i = 0; i < 18; i++) {
    var btn = document.querySelectorAll(".btn")[i];
    btn.addEventListener("click", function() {
        showInPreview(this.innerHTML);
    });
}

function clear() {
    preview.innerHTML = "";
    output.innerHTML = "";
}
function showInPreview(clickOrButton) {
    switch(clickOrButton) {
        case "AC":
            clear();
            break;

        case "DEL":
            preview.innerHTML = preview.innerHTML.slice(0, -1);
            break;

        case "Backspace":
            preview.innerHTML = preview.innerHTML.slice(0, -1);
            break;
            
        case "/":
            preview.innerHTML += "/";
            break;

        case "7":
            preview.innerHTML += 7;
            break;

        case "8":
            preview.innerHTML += 8;
            break;
            
        case "9":
            preview.innerHTML += 9;
            break;

        case "x":
            preview.innerHTML += "*";
            break;

        case "4":
            preview.innerHTML += 4;
            break;

        case "5":
            preview.innerHTML += 5;
            break;

        case "6":
            preview.innerHTML += 6;
            break;

        case "-":
            preview.innerHTML += "-";
            break;

        case "1":
            preview.innerHTML += 1;
            break;

        case "2":
            preview.innerHTML += 2;
            break;

        case "3":
            preview.innerHTML += 3;
            break;

        case "+":
            preview.innerHTML += "+";
            break;

        case "0":
            preview.innerHTML += 0;
            break;

        case ".":
            preview.innerHTML += ".";
            break;

        case "=":
            calculate();
            break;

        case "Enter":
            calculate();
            break;
    }
}


document.addEventListener("keypress", function(event) {
    showInPreview(event.key);
});


function calculate() {
    output.innerHTML = eval(preview.innerHTML);
}