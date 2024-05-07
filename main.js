import "./style.css";
var navlinksdata = document.getElementById("navlinksdata");
navlinksdata.style.paddingBottom="20px"
const navLinksArr = [
  {
    link: "select",
    href: "/select",
  },
  {
    link: "counter",
    href: "/counter",
  },
  {
    link: "save value",
    href: "/savevalue",
  },
  {
    link: "simple calculator",
    href: "/calculator",
  },
  {
    link: "advanced calculator",
    href: "/advancedcalculator",
  },
  {
    link: "accordian",
    href: "/accordian",
  },
  {
    link: "tabs",
    href: "/tabs",
  },
  {
    link: "text editer",
    href: "/textediter",
  },
  {
    link: "task app",
    href: "/taskapp",
  },
  {
    link: "gradient border",
    href: "/gradientborder",
  },
  {
    link: "quiz app",
    href: "/quizapp",
  },
  {
    link: "apidatafetch",
    href: "/apidatafetch",
  },
  {
    link: "localstorage",
    href: "/localstorage",
  },
  {
    link: "gradientborder2",
    href: "/gradientborder2",
  },
];

var sidebar = document.getElementById("sidebar");
var side_links = document.getElementById("side_links");
var closesidebar = document.getElementById("close");
var sideoverlay = document.getElementById("overlay");
navlinksdata.innerHTML = navLinksArr.map((obj,i) => {
  return`<a key="${i}"
  onclick="RemoveSidebar()"
  class="text-decoration-none hover:bg-white hover:text-black px-4 py-2 transition-all duration-300 rounded-lg text-xl font-mono font-medium uppercase text-white"
  href="${obj.href}"
  >${obj.link}</a>`;
}).join("");
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
