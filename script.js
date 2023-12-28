let timmer = 60;
let score = 0;
let r_n = 0;
let username = "";

document.querySelector("#mainbubble").innerHTML = `
    <h1 style="color:gray;">Welcome Shooter,</h1>
`;

function schorefun() {
    score += 10;
    document.querySelector("#scorevar").textContent = score;
}

function hit() {
    r_n = Math.floor(Math.random() * 10);
    document.querySelector("#presshit").textContent = r_n;
}

function make_bubble() {
    let count = "";
    for (let i = 1; i <= 168; i++) {
        const random_number = Math.floor(Math.random() * 10);
        count += `<div class="bubble">${random_number}</div>`;
    }
    document.querySelector("#mainbubble").innerHTML = count;
}

function time() {
    const settime = setInterval(function () {
        if (timmer > 0) {
            timmer--;
            document.querySelector("#times").innerHTML = timmer;
        } else {
            document.querySelector("#mainbubble").innerHTML = `<h1> Your score is ${score} </h1>`;
            clearInterval(settime);
        }
    }, 1000);
}

document.querySelector("#mainbubble").addEventListener("click", function (Priyanshu) {
    const store = Number(Priyanshu.target.textContent);
    if (store === r_n) {
        schorefun();
        make_bubble();
        hit();
    }
});

function togglePopup() {
    document.getElementById("userInputPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function startGame() {
  togglePopup();
}

function submitUsername() {
    username = document.getElementById("usernameInput").value;
    document.getElementById("usernameDisplay").innerText = `Welcome: ${username} 😎`;
    document.getElementById("userInputPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    time();
    make_bubble();
    hit();
}

function resetGame() {
    timmer = 60;
    score = 0;
    r_n = 0;
    username = "";
    document.querySelector("#times").innerHTML = timmer;
    document.querySelector("#scorevar").innerHTML = score;
    document.querySelector("#usernameDisplay").innerHTML = "";
    make_bubble();
    hit();
}
