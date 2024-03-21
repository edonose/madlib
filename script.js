// mad lib with JS

// Event listener
document.getElementById("btn").addEventListener("click", buildmadlib);

function buildmadlib() {
  var plural = document.getElementById("pn").value;
  var adj = document.getElementById("a").value;
  var verb = document.getElementById("v").value;
  var noun = document.getElementById("n").value;

  // process
  let result = `"There are too many ${plural} on this ${adj} airplane!", I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem."`;

  // output
  document.getElementById("yellowBorder").innerHTML = result;
  document.getElementById("html").style.background =
    "url(images/plane.jpg) no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("yellowBorder").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("yellowBorder").style.border = "solid orange 2px";
}

document.getElementById("btn2").addEventListener("click", buildmadlib2);

function buildmadlib2() {
  var plural = document.getElementById("pn").value;
  var adj = document.getElementById("a").value;
  var verb = document.getElementById("v").value;
  var noun = document.getElementById("n").value;

  // process
  let result = `"Did you know that ${plural} have ${adj} ability to ${verb} whenever a ${noun} scares them?", I screamed. "Somebody has to  on the  to solve this problem."`;

  // output
  document.getElementById("yellowBorder").innerHTML = result;
  document.getElementById("html").style.background =
    "url(images/questionmark.jpg) no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("yellowBorder").style.fontFamily = '"Ewert"';
  document.getElementById("yellowBorder").style.border = "solid green 2px";
}
