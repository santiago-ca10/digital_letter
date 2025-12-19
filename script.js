const envelope = document.getElementById("envelope");
const heart = document.getElementById("heart");

heart.addEventListener("click", () => {
  envelope.classList.add("open");
});
