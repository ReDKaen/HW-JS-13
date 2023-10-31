let currentIndex = 0;
let images = document.querySelectorAll(".image-to-show");
let intervalId;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("hidden");
  }
  images[index].classList.remove("hidden");
}

function startShow() {
  showImage(currentIndex);

  intervalId = setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);

  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  document.getElementById("resumeButton").classList.add("hidden");
}

function stopShow() {
  clearInterval(intervalId);

  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.add("hidden");
  document.getElementById("resumeButton").classList.remove("hidden");
}

function resumeShow() {
  startShow();
}
