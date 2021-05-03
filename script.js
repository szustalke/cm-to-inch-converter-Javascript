// functions to calculate values of inch and cm conversions
function calcCm() {
  x = document.getElementById("inch").value;
  y = document.getElementById("cm").value;
  document.getElementById("cm").value = x * 2.54;
}
function calcInch() {
  x = document.getElementById("inch").value;
  y = document.getElementById("cm").value;
  document.getElementById("inch").value = y / 2.54;
}

// REVERESE button functionality
document.querySelector(".btn-reverse").addEventListener("click", function () {
  if (document.querySelector("#cm").style.order === "3") {
    // changes title
    document.querySelector(".cm").textContent = "Cm";
    document.querySelector(".inch").textContent = "inch";
    // changes position of cm and inch input
    document.querySelector("#cm").style.order = "1";
    document.querySelector("#label-cm").style.order = "1";
    document.querySelector("#inch").style.order = "3";
    document.querySelector("#label-inch").style.order = "3";
  } else {
    //changes title
    document.querySelector(".cm").textContent = "Inch";
    document.querySelector(".inch").textContent = "cm";
    // changes position of cm and inch input
    document.querySelector("#cm").style.order = "3";
    document.querySelector("#label-cm").style.order = "3";
    document.querySelector("#inch").style.order = "1";
    document.querySelector("#label-inch").style.order = "1";
  }
});
