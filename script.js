document.getElementById("fraudForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const amount = document.getElementById("amount").value;
    const location = document.getElementById("location").value;
    const time = document.getElementById("time").value;

    const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: amount,
            location: location,
            time: time
        })
    });

    const data = await response.json();

    const resultBox = document.getElementById("resultBox");

    if (data.fraud) {
        resultBox.innerHTML = "⚠️ Fraud Transaction Detected!";
        resultBox.style.color = "red";
    } else {
        resultBox.innerHTML = "✅ Safe Transaction";
        resultBox.style.color = "green";
    }
});