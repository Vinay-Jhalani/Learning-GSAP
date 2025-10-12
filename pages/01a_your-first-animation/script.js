gsap.to(".card", {
  duration: 5,
  opacity: 1,
  scale: 1.2,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
