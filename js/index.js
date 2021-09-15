var SUPERCONTRACT = 90;
var CONTRACT = 180;
var GRANT = 250;

var elForm = document.querySelector(".results-form");
var elBall = document.querySelector(".ball-input").value.trim();
var elBox = document.querySelector(".hidden-box");
var elUserName = document.querySelector(".username");
var elUserSurName = document.querySelector(".usersurname");
var elResult = document.querySelector(".result");
var elCheckbox = elForm.querySelector(".checkbox");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elBox.style.display = "block";

  var elBall = parseFloat(elForm.querySelector(".ball-input").value.trim(), 10);
  var elName = elForm.querySelector(".name").value;
  var elBall = parseFloat(elForm.querySelector(".ball-input").value.trim(), 10);
  if (elCheckbox.checked) {
    elResult.textContent = `Siz 15 sutkaga ketasiz!`;
  } else if (elBall <= SUPERCONTRACT) {
    elUserName.textContent = `${elName}`;
    elResult.textContent = `Siz ${elBall} ball bilan Super Kontrakt asosida o'qishga qabul qilindingiz`;
    document.querySelector(".result").style.color = "blue";
  } else if (elBall <= CONTRACT) {
    elUserName.textContent = `${elName}`;
    elResult.textContent = `Siz ${elBall} ball bilan Kontrakt asosida o'qishga qabul qilindingiz`;
    document.querySelector(".result").style.color = "black";
  } else if (elBall <= GRANT) {
    elUserName.textContent = `${elName}`;
    elResult.textContent = `Siz ${elBall} ball bilan Grand asosida o'qishga qabul qilindingiz🎉🎉🎉`;
    document.querySelector(".result").style.color = "green";
  }
});
