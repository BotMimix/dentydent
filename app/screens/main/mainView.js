document.addEventListener("DOMContentLoaded", function () {
  window.bridge.updateMessage(updateMessage);
});

function updateMessage(event, message) {
  console.log("message logged in view");
  let elemE = document.getElementById("message");
  elemE.innerHTML = message;
}

function toggleTheme() {
  const themeStylesheet = document.getElementById('theme-style');

  if (themeStylesheet.getAttribute('href') === 'mainLight.css') {
    themeStylesheet.setAttribute('href', 'mainDark.css');
  } else {
    themeStylesheet.setAttribute('href', 'mainLight.css');
  }
}