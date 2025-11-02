import gsap from "gsap";
const button = document.querySelector("button");

let floatTween;
let focusTween;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    button.classList.add("show");
    if (!floatTween) {
      floatTween = gsap.to(button, {
        y: -10,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.out",
      });
    }
  } else {
    button.classList.remove("show");
    if (floatTween) {
      floatTween.kill();
      floatTween = null;
    }
  }
});

button.addEventListener("mouseenter", () => {
  if (focusTween) focusTween.kill(); // stop any existing focus tween
  focusTween = gsap.to(button, {
    scale: 1.3,
    duration: 0.2,
    ease: "sine.out",
  });
});
button.addEventListener("mouseleave", () => {
  if (focusTween) focusTween.kill();
  focusTween = gsap.to(button, {
    scale: 1,
    duration: 0.2,
    ease: "sine.out",
  });
});

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
