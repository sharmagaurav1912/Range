
let value = document.getElementById("most")
var currentWidth = value.offsetWidth;

function plus() {
    var plusvalue = value.style.width = currentWidth + 100 + 'px'; 
    currentWidth = currentWidth + 100;
};

function minus() {
    var minusvalue = value.style.width = currentWidth - 100 + 'px';
    currentWidth = currentWidth - 100;
};

