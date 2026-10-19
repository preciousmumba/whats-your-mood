
const crystalBall = document.getElementById("crystal-ball");
const mood = document.getElementById("mood");
const description = document.getElementById("description");
const accuracy = document.getElementById("accuracy");
const tryAgain = document.getElementById("try-again");

// Our list of possible moods
const moods = [
    {
        title: "Mentally on a beach!",
        description: "Your body is here. Your mind is on vacation.",
        accuracy: "12%"
    },
    {
        title: "Delusional Optimism",
        description: "Everything will work out. Probably.",
        accuracy: "56%"
    },
    {
        title: "I need a snack",
        description: "The crystal ball says visit the fridge.",
        accuracy: "99%"
    },
    {
        title: "Emotionally out of office",
        description: "Your brain clocked out hours ago.",
        accuracy: "32%"
    }
];

// Picks and displays a random mood
function showMood() {
    const randomNumber = Math.floor(Math.random() * moods.length);
    const selectedMood = moods[randomNumber];

    mood.textContent = selectedMood.title;
    description.textContent = selectedMood.description;
    accuracy.textContent = "Accuracy: " + selectedMood.accuracy;

    tryAgain.hidden = false;
}

// Runs when the crystal ball is clicked
crystalBall.addEventListener("click", showMood);

// Runs when Try Again is clicked
tryAgain.addEventListener("click", showMood);