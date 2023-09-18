let a = document.querySelector(".mega");
let b = document.querySelector(".header .mega-menu");
let c = document.querySelector(".landing");
let d = document.querySelector(".header .mega-menu .closer");

b.style.display = "none";

a.addEventListener("click", function () {
  b.style.display = "flex";
})
c.onclick = function () {
  b.style.display = "none";
}
d.onclick = function () {
  b.style.display = "none";
}

// =================================================================================================
let skills = document.querySelector(".skills");
let progSpans = document.querySelectorAll(".prog span");
let nums = document.querySelectorAll(".stats .box .num");
let stats = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 400) {
    progSpans.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
  if (window.scrollY >= stats.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}