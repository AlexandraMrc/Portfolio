//Age calculator:

function age() {
  const inputDate = document.getElementById("date").value;
  const inputMonth = document.getElementById("month").value;
  const inputYear = document.getElementById("year").value;

  let date = new Date();
  let inputDate2 = date.getDate();
  let inputMonth2 = 1 + date.getMonth();
  let inputYear2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (inputDate > inputDate2) {
    inputDate2 = inputDate2 + month[inputMonth2 - 1];
    inputMonth2 = inputMonth2 - 1;
  }

  if (inputMonth > inputMonth2) {
    inputMonth2 = inputMonth2 + 12;
    inputYear2 = inputYear2 - 1;
  }

  let d = inputDate2 - inputDate;
  let m = inputMonth2 - inputMonth;
  let y = inputYear2 - inputYear;

  document.getElementById("age").innerHTML =
    '"Aveti ' + y + " Ani " + m + " luni si " + d + ' zile. "';

  let startTestButton = document.getElementById("startTest");
  startTestButton.disabled = false;
}

// buton Incepe Testul

let startTestButton = document.getElementById("startTest");
// startTestButton.addEventListener("click", incepeTestul());

function incepeTestul() {
  const formQuestions = document.getElementById("formHidden");
  if (formQuestions.style.display === "none") {
    formQuestions.style.display = "block";
  } else {
    formQuestions.style.display = "none";
  }
}

//-------------------------------------------------------

var today = new Date();
document.getElementById("datetime").innerHTML = today;

function check_1() {
  var verifica = document.quiz.raspuns_1.value;
  if (verifica == "Liviu Rebreanu") alert("Corect!");
  if (verifica == "" || verifica == null) {
    alert("Spatiul nu poate fi lasat gol");
  } else {
    alert("Mai incearca!");
  }
}

function check_2() {
  var verifica = document.quiz.raspuns_2.value;
  if (verifica == "Enigma Otiliei") alert("Corect!");
  if (verifica == "" || verifica == null) {
    alert("Spatiul nu poate fi lasat gol!");
  } else {
    alert("Mai incearca!");
  }
}

function check_3() {
  var verifica = document.quiz.maiorescu.value;
  if (verifica === "critic literar") alert("Corect!");
  else {
    alert("Mai incearca!");
  }
}

function check_4() {
  var verifica = document.quiz.autor1.value;
  if (verifica == "value1") alert("Corect!");
  else {
    alert("Mai incearca!");
  }
}

function check_5() {
  var verifica = document.getElementById("emily");
  if (verifica.checked == true) alert("Corect!");
  else {
    alert("Mai incearca!");
  }
}

// function check_age() {
//   var verifica = document.varsta.varsta.value;
//   verifica = parseInt(verifica);
//   if (verifica >= 15) alert("Succes!");
//   else {
//     var yearsLeft = 15 - varsta;
//     alert("Mai trebuie sa studiezi pentru a putea sustine testul.");
//   }
// }

function check_6() {
  var verifica = document.quiz.daSauNu.value;
  if (verifica == "da") alert("Corect!");
  else if (verifica == "nu") {
    alert("Incorect");
  }
}
