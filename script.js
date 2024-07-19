const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.querySelector('#name').value;
	greeting.textContent = `Hello, ${name}!`;
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://3lpo4ifnz36w2pwvbfnjlmn2da0vpzjq.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();

document.addEventListener("DOMContentLoaded", function() {
    // Get the counter element
    var counterElement = document.getElementById("counter");

    // Retrieve the current count from local storage or set it to 0 if not found
    var count = localStorage.getItem("pageViews");
    count = count ? parseInt(count) : 0;

    // Increment the count by 1
    count++;

    // Update the content of the counter element with the new count value
    counterElement.textContent = count;

    // Store the updated count in local storage
    localStorage.setItem("pageViews", count.toString());
});

