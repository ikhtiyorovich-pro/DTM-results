var SUPERCONTRACT = 90;
var CONTRACT = 180;
var GRANT = 250;

var elForm = document.querySelector('.results-form'); 
var elBall = document.querySelector('.ball-input').value.trim();
var elBox = document.querySelector('.hidden-box');
var elUserName = document.querySelector('.username');
var elResult = document.querySelector('.result');

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    elBox.style.display = 'block'

    var elBall = parseFloat(elForm.querySelector(".ball-input").value.trim(), 10);
    var elName = elForm.querySelector(".name").value;
    var elSurname = elForm.querySelector(".surname")
    var elBall = parseFloat(elForm.querySelector(".ball-input").value.trim(), 10);

    if (elBall <= SUPERCONTRACT) {
        elUserName.textContent = `${elName}`; 
        elResult.textContent = `Siz ${elBall} ball bilan Super Kontrakt asosida o'qishga qabul qilindingiz`;
        document.querySelector('.result').style.color = 'green';
    }
    else if (elBall <= CONTRACT) {
        elUserName.textContent = `${elName}`;
        elResult.textContent = `Siz ${elBall} ball bilan Kontrakt asosida o'qishga qabul qilindingiz`;
        document.querySelector('.result').style.color = 'green';
    }
    else if (elBall <= GRANT) {
        elUserName.textContent = `${elName}`;
        elResult.textContent = `Siz ${elBall} ball bilan Grant asosida o'qishga qabul qilindingiz`;
        document.querySelector('.result').style.color = 'green';
    } 

})
