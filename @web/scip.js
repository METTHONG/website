function changeMessage() {
  const messages = [
    "You make my life brighter every day. ❤️",
    "You are the love of my life, forever and always.",
    "I’m so grateful to have you by my side.",
    "Every moment with you feels like magic.",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("extraMessage").innerHTML = randomMessage;
}
