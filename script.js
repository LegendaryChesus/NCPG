const konamiCode = [
    "Up", "Up",
    "Down", "Down",
    "Left", "Right",
    "Left", "Right",
    "B", "A"
];

let enteredCode = [];
let displayArea = document.getElementById("displayArea");

document.addEventListener("keydown", function (event) {
    const key = getKeyLabel(event.key);
    enteredCode.push(key);

    updateDisplay();

    if (enteredCode.length === konamiCode.length) {
        checkCode();
    }
});

function getKeyLabel(key) {
    // Map key codes to labels
    switch (key) {
        case "ArrowUp":
            return "Up";
        case "ArrowDown":
            return "Down";
        case "ArrowLeft":
            return "Left";
        case "ArrowRight":
            return "Right";
        case "b":
            return "B";
        case "a":
            return "A";
        default:
            return key;
    }
}

function updateDisplay() {
    const keyLabels = enteredCode.map(getKeyLabel);
    displayArea.textContent = keyLabels.join(" ");
}

function checkCode() {
    if (JSON.stringify(enteredCode) === JSON.stringify(konamiCode)) {
        unlockWebsite();
    } else {
        enteredCode = [];
        updateDisplay();
    }
}

function unlockWebsite() {
    const passwordPrompt = document.getElementById("passwordPrompt");
    const content = document.getElementById("content");

    passwordPrompt.style.display = "none";
    content.style.display = "block";


    // Move the redirection outside the timeout
    setTimeout(function () {
        window.location.href = "home.html";
    }, 2000);
}
