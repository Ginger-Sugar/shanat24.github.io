var firstNumberError = document.getElementById("firstError");
var secondNumberError = document.getElementById("secondError");
var stepErrors = document.getElementById("stepError");
var userinput1;
var userinput2;
var userinput3;

function displayEvens() {


  userinput1 = Number(document.getElementById("First Number: Lower").value);
  userinput2 = Number(document.getElementById("Second Number: Higher").value);
  userinput3 = Number(document.getElementById("Step").value);

  if (userinput1 == "" || userinput1 < 0) {
    firstNumberError.style.display = "block";
    return;
  }
  if (userinput2 == "" || userinput2 < 0) {
    secondNumberError.style.display = "block";
    return;
  }
  if (userinput3 == "" || userinput3 < 0) {
    stepError.style.display = "block";
    return;
  }

  let answer = "";
  for (var i = userinput1; i <= userinput2; i += userinput3) {
    if (i % 2 === 0) {
      answer = answer + "<br>" + i;
      console.log("Lol, you're done");
    }
  }

  document.getElementById("showResult").innerHTML =
    "Here are the even numbers between " + userinput1 + " and " + userinput2 + " by " + userinput3 + " 's:";
    document.getElementById("answers").innerHTML = answer;

  return false;


  // if (userinput1 == "" || userinput1 < 0) {
  //   firstNumberError.style.display = "block";
  // }
  // if (userinput2 == "" || userinput2 < 0) {
  //   secondNumberError.style.display = "block";
  // }
  // if (userinput3 == "" || userinput3 < 0) {
  //   stepError.style.display = "block";
  // }
}
