function myclick7() {
  var inputelement = document.getElementById("input");
  inputelement.style.display = "block";
  var inputelement1 = document.getElementById("sendbutton");
  inputelement1.style.display = "block";

  var element = document.createElement("div");
  var node = document.createTextNode("harish");
  element.appendChild(node);
  var parent = document.getElementById("name");
  parent.appendChild(element);
  parent.style.display = "block";
  var txt = "";
  var arun = ["hi da","pubg podalama"];
  arun.forEach(myfunction);

  document.getElementById("demo").innerHTML = txt;
  function myfunction(value) {
    txt += value + "<br>" + "<br>";
  }
}
function myFunction1() {
  var x = document.forms["form"];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>" + "<br>";
  }
  document.getElementById("display").innerHTML += text;
}
