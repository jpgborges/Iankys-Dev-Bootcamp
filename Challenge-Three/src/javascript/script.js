const options = ["rock", "paper", "scissors"];
const form = document.getElementById("game-form");
const resultMessage = document.getElementById("result-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nickname = formData.get("nickname").trim() || "Player";
    const playerChoice = formData.get("game-option");
    const yujiroChoice = options[Math.floor(Math.random() * options.length)];

    let outcome;
    
    if (playerChoice === yujiroChoice) {
        outcome = "It's a TIE!";
    } else if (
        (playerChoice === "rock" && yujiroChoice === "scissors") ||
        (playerChoice === "paper" && yujiroChoice === "rock") ||
        (playerChoice === "scissors" && yujiroChoice === "paper")
    ) {
        outcome = `${nickname} WINS!`;
    } else {
        outcome = "Yujiro WINS";
    }

    resultMessage.textContent =
        `${nickname} chose ${playerChoice}, Yujiro chose ${yujiroChoice}. ${outcome}`;
});
