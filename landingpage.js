// 1. Stop flicker
setTimeout(() => {
  document.getElementById("intro").classList.remove("flicker");
}, 3000);

// 2. Stop blink + grow
setTimeout(() => {
  document.querySelectorAll(".logo").forEach(el => {
    el.classList.add("stop-blink");
  });

  document.querySelector(".logos").classList.add("expand");
}, 3100);

// 3. Slide intro up
setTimeout(() => {
  document.getElementById("intro").classList.add("slide-up");
}, 3700);

// 4. Drop overlay image from top
setTimeout(() => {
  document.getElementById("overlay").classList.add("slide-down");
}, 3800);

// 5. Fade overlay into background
setTimeout(() => {
  document.getElementById("overlay").classList.add("fade-bg");
}, 5000);
