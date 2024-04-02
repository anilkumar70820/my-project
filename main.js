import './style.css'

var sidebar = document.getElementById("sidebar");
      var side_links = document.getElementById("side_links");
      var closesidebar = document.getElementById("close");
      var sideoverlay = document.getElementById("overlay");
      sidebar.addEventListener("click", function () {
        side_links.classList.add("!right-0");
        sideoverlay.classList.add("opacity-100");
        sideoverlay.classList.remove("pointer-events-none");
        document.body.classList.add("overflow-hidden");
      });
      closesidebar.addEventListener("click", function () {
        side_links.classList.remove("!right-0");
        sideoverlay.classList.remove("opacity-100");
        sideoverlay.classList.add("pointer-events-none");
        document.body.classList.remove("overflow-hidden");
      });
      sideoverlay.addEventListener("click", function () {
        side_links.classList.remove("!right-0");
        sideoverlay.classList.remove("opacity-100");
        sideoverlay.classList.add("pointer-events-none");
        document.body.classList.remove("overflow-hidden");
      });
      function RemoveSidebar() {
        side_links.classList.remove("!right-0");
        sideoverlay.classList.remove("opacity-100");
        sideoverlay.classList.add("pointer-events-none");
        document.body.classList.remove("overflow-hidden");
      }