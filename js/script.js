window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {

    if (window.screen.width >= 768) {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("topnav").classList.add("topnav--scroll");
        document.getElementById("tabs").classList.add("links--override");
        document.getElementById("navlogo").classList.add("navlogo--small");
      } else {
        document.getElementById("topnav").classList.remove("topnav--scroll");
        document.getElementById("tabs").classList.remove("links--override");
        document.getElementById("navlogo").classList.remove("navlogo--small");
      }
    } else {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("nav-mobile").classList.add("topnav--mobile");
      } else {
        document.getElementById("nav-mobile").classList.remove("topnav--mobile");
      }

    }
  }

  var links = document.getElementById("tabs");
  var nav = document.getElementById("topnav");
  var burguer = document.getElementById("open");

  var animationEndsBool = false;

  burguer.addEventListener('transitionend', animationEnds);

  function animationEnds() {
    if (animationEndsBool == true) {
      nav.style.height = "";
      animationEndsBool = false;
    }
  }


  function mobileMenuFunction() {
    if (links.style.opacity === "0" || links.style.opacity === "") {
      nav.style.height = "auto";
      links.style.opacity = "1";
      links.style.transitionDelay = ".6s";
      burguer.style.padding = '0 0 200vw 200vw';
    } else if (links.style.opacity === "1") {
      links.style.opacity = "0";
      burguer.style.padding = '';
      links.style.transition = ".3s";
      animationEndsBool = true;
    }
  }