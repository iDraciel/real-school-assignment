function myFunction() {
  var k = document.getElementById("myTopnav");
  if (k.className === "topnav") {
    k.className += " responsive";
  } else {
    k.className = "topnav";
  }
}
