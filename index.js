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
        showInPreview(this.classList[0]);
    });
}

function showInPreview(clickOrButton) {
    switch(clickOrButton) {
        case "ac":
            preview.innerHTML = "";
            break;

        case "span-two":
            preview.innerHTML = preview.innerHTML.split('');
            preview[-1] = "";
            break;

        case "divide":
            preview.innerHTML += " / ";
            break;

        case "seven":
            preview.innerHTML += 7;
            break;

        case "eight":
            preview.innerHTML += 8;
            break;
            
        case "nine":
            preview.innerHTML += 9;
            break;

        case "x":
            preview.innerHTML += " * ";
            break;

        case "four":
            preview.innerHTML += 4;
            break;

        case "five":
            preview.innerHTML += 5;
            break;

        case "six":
            preview.innerHTML += 6;
            break;

        case "minus":
            preview.innerHTML += " - ";
            break;

        case "one":
            preview.innerHTML += 1;
            break;

        case "two":
            preview.innerHTML += 2;
            break;

        case "three":
            preview.innerHTML += 3;
            break;

        case "plus":
            preview.innerHTML += " + ";
            break;

        case "span-two2":
            preview.innerHTML += 0;
            break;

        case "dot":
            preview.innerHTML += ".";
            break;

        case "equal":
            break;
    }
}