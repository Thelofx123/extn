window.addEventListener("load", () => {
  window.console.debug = () => {};
  window.console.log = () => {};
  window.console.warn = () => {};
  window.console.error = () => {};

  Object.defineProperty(window, "debugger", {
    get: function () {},
  });

  let video = document.querySelector("video.dplayer-video-current");
  const fullscreenButton = document.querySelector(".dplayer-full-icon");

  if (!video) return;

  const nextBtn = document.createElement("button");

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") video.currentTime += 5;
    if (e.key === "ArrowLeft") video.currentTime -= 5;

    if (e.key.toLowerCase() === "f") {
      fullscreenButton.click();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      video = document.querySelector("video.dplayer-video-current");
      if (video) {
        video.focus();
      }
    }
  });

  setInterval(() => {
    video = document.querySelector("video.dplayer-video-current");
    if (video) {
      video.focus();
    }
  }, 2000);
});
