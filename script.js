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
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  var url = window.location.href + "?name=" + copyText.value;
  navigator.clipboard.writeText(url);
  alert("URL Copied");
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

window.onload = function () {
  onWindowLoad();
};
