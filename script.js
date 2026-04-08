const text = "Hey ❤️, Suraj wants to ask you something...";
const element = document.getElementById("text");
let i = 0;

// Typing Effect
function typing() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  } else {
    setTimeout(showQuestion, 1000);
  }
}

function showQuestion() {
  element.innerHTML = "Will you be Suraj's Valentine? 💖";
}

typing();

// Buttons
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.onclick = () => {
  document.body.innerHTML = `
    <h1 style="color:white;text-align:center;margin-top:20%">
      💖 Yay! You made Suraj the happiest person 😍 💖
    </h1>`;
};

// Moving No button
noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
};

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
