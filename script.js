const crystalBall = document.getElementById("crystal-ball");
const tryAgain = document.getElementById("try-again");
const reset = document.getElementById("reset");

const result = document.getElementById("result");
const instruction = document.getElementById("instruction");

const mood = document.getElementById("mood");
const description = document.getElementById("description");
const accuracy = document.getElementById("accuracy");

// All Possible Moods
const moods = [
    {
        title: "MENTALLY ON A BEACH!",
        description: "Your body is here. Your mind is absolutely somewhere tropical.",
        accuracy: "12%",
        colour: "#6de7ff"
    },
    {
        title: "DELUSIONAL OPTIMISM",
        description: "You have no idea how this will work out. But somehow, it will.",
        accuracy: "56%",
        colour: "#ff8b38"
    },
    {
        title: "I NEED A SNACK",
        description: "The crystal ball has spoken. Go to the fridge. This is urgent.",
        accuracy: "99%",
        colour: "#d4ff5c"
    },
    {
        title: "EMOTIONALLY OUT OF OFFICE",
        description: "Your brain clocked out six hours ago and honestly? Good for them.",
        accuracy: "32%",
        colour: "#a88cff"
    },
    {
        title: "ROMANTICIZING EVERYTHING",
        description: "Even your minor inconvenience has somehow become a cinematic experience.",
        accuracy: "87%",
        colour: "#ff69b4"
    },
    {
        title: "ONE EMAIL AWAY",
        description: "You are holding it together, but one more email might end the charade.",
        accuracy: "91%",
        colour: "#ff4f4f"
    },
    {
        title: "I'M JUST VIBING",
        description: "No plans. No thoughts. Just vibes and an alarming amount of confidence.",
        accuracy: "74%",
        colour: "#7ee8fa"
    },
    {
        title: "MAIN CHARACTER ENERGY",
        description: "You genuinely believe the universe is adding background music to your life.",
        accuracy: "68%",
        colour: "#ffd447"
    },
    {
        title: "SLIGHTLY UNHINGED",
        description: "Everything is technically fine. Your behaviour suggests otherwise.",
        accuracy: "83%",
        colour: "#ff5c8a"
    },
    {
        title: "I SHOULD BE SLEEPING",
        description: "Your body wants rest. Your brain has chosen absolutely anything else.",
        accuracy: "96%",
        colour: "#756cff"
    },
    {
        title: "PRODUCTIVE DELUSION",
        description: "You made a to-do list, so naturally you feel like you've accomplished everything.",
        accuracy: "79%",
        colour: "#b8ff5c"
    },
    {
        title: "DO NOT PERCEIVE ME",
        description: "You would like to exist quietly without anyone asking you any questions.",
        accuracy: "88%",
        colour: "#c7a6ff"
    },
    {
        title: "THRIVING, APPARENTLY",
        description: "You don't know what you're doing, but somehow things keep working out.",
        accuracy: "63%",
        colour: "#ff9f43"
    },
    {
        title: "THE DELUSION IS WORKING",
        description: "Against all available evidence, you still believe everything is going to be amazing.",
        accuracy: "94%",
        colour: "#ffdf4d"
    },
    {
        title: "SOCIAL BATTERY: 3%",
        description: "You have exactly enough energy left to say 'haha yeah' and disappear.",
        accuracy: "97%",
        colour: "#8d7aff"
    },
    {
        title: "I'M FINE. PROBABLY.",
        description: "There are several unanswered questions, but we're choosing optimism today.",
        accuracy: "61%",
        colour: "#ff6b6b"
    },
    {
        title: "NEED A LITTLE DRAMA",
        description: "Your day is suspiciously peaceful. Something needs to happen immediately.",
        accuracy: "45%",
        colour: "#ff4fb3"
    },
    {
        title: "CURRENTLY IN MY ERA",
        description: "You have entered a new chapter and have absolutely no idea what the plot is.",
        accuracy: "72%",
        colour: "#9d7cff"
    },
    {
        title: "OVERTHINKING CHAMPION",
        description: "You have analysed a five-second interaction for approximately three business days.",
        accuracy: "98%",
        colour: "#ff7f50"
    },
    {
        title: "JUST ONE MORE EPISODE",
        description: "You know you should stop. You will not stop. The crystal ball accepts this.",
        accuracy: "95%",
        colour: "#65d9ff"
    },
    {
        title: "MYSTERIOUSLY MOTIVATED",
        description: "You woke up with ambition today. Nobody knows where it came from. Protect it.",
        accuracy: "76%",
        colour: "#c8ff52"
    },
    {
        title: "I WANT TO GO HOME",
        description: "You may already be home. Unfortunately, your spirit has left the building.",
        accuracy: "89%",
        colour: "#b48cff"
    },
    {
        title: "CUTE BUT CONFUSED",
        description: "You're doing your best and somehow making it look intentional.",
        accuracy: "67%",
        colour: "#ff8fbd"
    },
    {
        title: "FULLY IN MY HEAD",
        description: "Your imagination has taken over the meeting and there is no stopping it now.",
        accuracy: "84%",
        colour: "#6ee7ff"
    },
    {
        title: "I DESERVE A TREAT",
        description: "Whatever happened today, you have decided that a little reward is necessary.",
        accuracy: "93%",
        colour: "#ffb347"
    },
    {
        title: "ABSOLUTELY WINGING IT",
        description: "There is no plan. There has never been a plan. Somehow, you're still here.",
        accuracy: "86%",
        colour: "#d1ff58"
    },
    {
        title: "FEELING EXPENSIVE",
        description: "Your standards are high, your wallet disagrees, and you're ignoring it.",
        accuracy: "73%",
        colour: "#e6a4ff"
    },
    {
        title: "QUIETLY ICONIC",
        description: "You're not trying too hard today. Somehow that's making you even more powerful.",
        accuracy: "81%",
        colour: "#ff67a8"
    },
    {
        title: "CHAOTIC GOOD",
        description: "Your decisions may be questionable, but your intentions are suspiciously wholesome.",
        accuracy: "78%",
        colour: "#78e86b"
    },
    {
        title: "I'LL DEAL WITH IT LATER",
        description: "Tomorrow's problem has officially become tomorrow's problem.",
        accuracy: "100%",
        colour: "#ffcc4d"
    }
];

let lastMood = null;
let reading = false;

// Reveal a random mood
function showMood() {

    if (reading == true) {
        return;
    }

    reading = true;

    result.hidden = true;

    crystalBall.classList.add("consulting");

    instruction.textContent = "CONSULTING THE UNIVERSE...";

    // Pick a random mood
    let randomNumber = Math.floor(Math.random() * moods.length);

    let selectedMood = moods[randomNumber];

    // Prevent the same mood twice in a row
    while (selectedMood == lastMood) {
        randomNumber = Math.floor(Math.random() * moods.length);
        selectedMood = moods[randomNumber];
    }

    lastMood = selectedMood;

    // Wait before revealing the answer
    setTimeout(function() {

        mood.textContent = selectedMood.title;

        description.textContent = selectedMood.description;

        accuracy.textContent = "ACCURACY: " + selectedMood.accuracy;


        // Change colours
        document.body.style.background = selectedMood.colour;

        mood.style.color = selectedMood.colour;


        // Show result
        result.hidden = false;

        instruction.textContent = "THE UNIVERSE HAS SPOKEN.";

        crystalBall.classList.remove("consulting");

        reading = false;

    }, 1000);
}

// Click crystal ball
crystalBall.addEventListener("click", showMood);

// Try again
tryAgain.addEventListener("click", showMood);

// Reset
reset.addEventListener("click", function() {

    result.hidden = true;

    instruction.textContent = "YOUR MOOD IS WAITING.";

    document.body.style.background = "#ff9fd2";

    lastMood = null;

});