function createBinaryRain() {
  let container = document.querySelector(".binary-rain");
  let screenHeight = document.body.scrollHeight; // Full scrollable height

  for (let i = 0; i < 10; i++) {
    let binary = document.createElement("div");
    binary.classList.add("binary");
    binary.innerText = Math.random() > 0.5 ? "0" : "1";

    binary.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    binary.style.top = "-50px"; // Start from the top
    binary.style.animationDuration = Math.random() * 8 + 5 + "s"; // Slower speed (5s to 13s)
    binary.style.animationTimingFunction = "linear";

    container.appendChild(binary);

    let fallDistance = screenHeight + 100 + "px"; // Fall beyond full page height
    binary.style.animation = `fall ${binary.style.animationDuration} linear infinite`;
    binary.style.setProperty("--fall-distance", fallDistance);

    setTimeout(() => {
      binary.remove();
    }, parseFloat(binary.style.animationDuration) * 1000);
  }
}

setInterval(createBinaryRain, 1000); // Slower spawn rate
