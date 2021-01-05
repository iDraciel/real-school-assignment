var cardIndex = 0;
var x = window.matchMedia("(max-width: 600px)")
showcardSlider(x)
x.addListener(showcardSlider)
showcardSlider();
function showcardSlider(x) {
  var i;
  var card__slides = document.getElementsByClassName("card");
  var card__dots = document.getElementsByClassName("card_dot");
if(x.matches){
    for (i = 0; i < card__slides.length; i++) {
      card__slides[i].style.display = "none";
    }
    cardIndex++;
    if (cardIndex > card__slides.length) {cardIndex = 1}
    for (i = 0; i < card__dots.length; i++) {
      card__dots[i].className = card__dots[i].className.replace(" active", "");
    }
    card__slides[cardIndex-1].style.display = "block";
    card__dots[cardIndex-1].className += " active";
    setTimeout(showcardSlider, 2000); // Change image every 2 seconds
  }

}
