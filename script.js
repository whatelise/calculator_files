"usestrict";
let sum;

window.addEventListener("DOMContentLoaded", clickCalculate);
function clickCalculate() {
  console.log("calculating");
  document.querySelector("#calculate").addEventListener("click", () => {
    let firstnumber = document.getElementById("firstnumber").value;
    let secondnumber = document.getElementById("secondnumber").value;
    let operator = document.getElementById("operator").value;
    console.log(firstnumber, operator, secondnumber);
    if (operator === "sub") {
      sum = parseInt(firstnumber) - parseInt(secondnumber);
    } else if (operator === "add") {
      sum = parseInt(firstnumber) + parseInt(secondnumber);
    } else if (operator === "div") {
      sum = parseInt(firstnumber) / parseInt(secondnumber);
    } else if (operator === "mul") {
      sum = parseInt(firstnumber) * parseInt(secondnumber);
    }
    console.log(sum);
    roundNumber();
  });
}
function roundNumber() {
  const checked = document.getElementById("doround").checked;
  if (checked === true) {
    console.log("roundnumber");
    const decimal = document.getElementById("decimals").value;
    result = sum.toFixed(decimal);
    showResults();
  } else {
    result = sum;
    console.log("not rounded " + result);
    showResults();
  }
}
function showResults() {
  console.log("showresults");
  //   document.getElementById("results").innerHTML = result;
  let x = document.createElement("li");
  let t = document.createTextNode(result);
  x.appendChild(t);
  document.getElementById("results").appendChild(x);
  results.scrollTop = results.scrollHeight;
  firstnumber.value = result;

  document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("results").innerHTML = "";
  });
}
