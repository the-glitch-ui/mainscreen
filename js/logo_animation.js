gsap.registerPlugin(MotionPathPlugin);

gsap.fromTo(
  ".firefly1",
  { autoAlpha: 1, scale: 0 },
  {
    delay: 1,
    duration: 6,
    ease: "power2.inOut",
    autoAlpha: 0,
    scale: 0.7,
    transformOrigin: "center center",
    y: -100,
    fill: "#fdff8a",
    repeat: -1,
    opacity: 0,
    force3D: false,
    motionPath: {
      path: ".track1",
      align: ".track1",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
  }
);

gsap.fromTo(
  ".firefly2",
  { autoAlpha: 1, scale: 0 },
  {
    delay: 0.5,
    duration: 8,
    ease: "power4.inOut",
    scale: 0.6,
    autoAlpha: 0,
    transformOrigin: "center center",
    y: -100,
    fill: "#fdff8a",
    repeat: -1,
    force3D: false,
    motionPath: {
      path: ".track2",
      align: ".track2",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
  }
);

gsap.fromTo(
  ".firefly4",
  { autoAlpha: 1, scale: 0 },
  {
    delay: 1.5,
    duration: 7,
    ease: "power2.inOut",
    scale: 0.6,
    autoAlpha: 0,
    transformOrigin: "center center",
    y: -100,
    fill: "#fdff8a",
    repeat: -1,
    force3D: false,
    motionPath: {
      path: ".track1",
      align: ".track1",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
  }
);

gsap.fromTo(
  ".firefly3",
  { autoAlpha: 1, scale: 0 },
  {
    duration: 5,
    ease: "power4.inOut",
    scale: 0.8,
    autoAlpha: 0,
    transformOrigin: "center center",
    y: -100,
    fill: "#fdff8a",
    repeat: -1,
    force3D: false,
    motionPath: {
      path: ".track2",
      align: ".track2",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
  }
);
