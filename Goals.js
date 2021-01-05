  var badgeIndex = 0;
  showBadge();
  function showBadge() {
    var i;
    var badge__slides = document.getElementsByClassName("myBadges");
    var badge__dots = document.getElementsByClassName("badge__dot");
      for (i = 0; i < badge__slides.length; i++) {
        badge__slides[i].style.display = "none";
      }
      badgeIndex++;
      if (badgeIndex > badge__slides.length) {badgeIndex = 1}
      for (i = 0; i < badge__dots.length; i++) {
        badge__dots[i].className = badge__dots[i].className.replace(" active", "");
      }
      badge__slides[badgeIndex-1].style.display = "block";
      badge__dots[badgeIndex-1].className += " active";
      setTimeout(showBadge, 2000);

  }
