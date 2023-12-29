function onWindowLoad() {
  var urlParams = new URLSearchParams(window.location.search);
  var nameParam = urlParams.get("name");

  if (nameParam) {
    var askOutText =
      "Hey " +
      nameParam +
      ", I've been really wanting to take you out for a cup of coffee. How about going on a date with me?";
    document.getElementById("displayText").innerText = askOutText;

    var buttonContainer = document.getElementById("buttonContainer");
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
    buttonContainer.style.display = "block";

    yesButton.addEventListener("click", function () {
      showConfiteeGif();
    });
    noButton.addEventListener("mouseover", function () {
      changeButtonPosition();
    });
    noButton.addEventListener("click", function () {
      changeButtonPosition();
    });
  } else {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.style.display = "block";

    var inputText =
      "Thinking of someone special for a memorable outing? Share their name here!";
    document.getElementById("displayText").innerText = inputText;
  }
}

function copyText() {
  var copyText = document.getElementsByClassName("form__field")[0];
  var crushName = copyText.value.trim();
  var matchString = /^[a-zA-Z\s]+$/.test(crushName);
  if (crushName === "" || !matchString) {
    alert("Please enter a valid name.");
    return;
  }
  var url = window.location.href + "?name=" + crushName;
  window.navigator.clipboard.writeText(url);
  prompt("Copy this link and send it to your Crush", url);
}

function showConfiteeGif() {
  var confiteeGif = document.getElementById("confiteeGif");
  var body = document.body;
  body.innerHTML = "";

  if (confiteeGif) {
    body.appendChild(confiteeGif);
    confiteeGif.style.display = "block";
  } else {
    console.error("Element with ID 'confiteeGif' not found");
  }
}

function changeButtonPosition() {
  var maxX = window.innerWidth - noButton.clientWidth;
  var maxY = window.innerHeight - noButton.clientHeight;

  var boundingRect = noButton.getBoundingClientRect();
  var buttonWidth = boundingRect.width;
  var buttonHeight = boundingRect.height;

  var randomX = Math.floor(Math.random() * (maxX - buttonWidth));
  var randomY = Math.floor(Math.random() * (maxY - buttonHeight));

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

window.onload = onWindowLoad;
