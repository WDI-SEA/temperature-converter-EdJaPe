var form = document.querySelector("form");
var div = document.getElementById("conversion");
var input = document.getElementById("input");
var farenheight = document.getElementById("farenheight");
var celcius = document.getElementById("celcius");
const clear = document.getElementById("clear");


form.addEventListener("submit", function(e) {
    // prevent form from automatic refresh on submit
    e.preventDefault();
    //get user submitted value
    var tempToChange = input.value;

    if (farenheight.checked === true) {
        var changedTempF = (tempToChange * 1.8) + 32;
        div.innerText = changedTempF;
         if (changedTempF < 33) {
             div.style.backgroundColor = 'blue';
         } else {
             div.style.backgroundColor = 'orange';
         }
    } else if (celcius.checked ===true) {
        var changedTempCelc = (tempToChange - 32) * (5/9);
        div.innerText = changedTempCelc;
        if (changedTempCelc < 0) {
            div.style.backgroundColor = 'blue';
        } else {
            div.style.backgroundColor = 'orange';
    }    
    }
})
 
clear.addEventListener("click", function(e) {
    input.value = "";
    div.innerText = "";
})
