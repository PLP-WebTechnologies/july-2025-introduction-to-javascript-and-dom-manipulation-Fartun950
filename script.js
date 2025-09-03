// Part 1: Variables + conditionals
let username = "Student";
let age = 18;

if (age >= 18) {
  document.getElementById("extra").textContent = username + " is an adult.";
} else {
  document.getElementById("extra").textContent = username + " is a minor.";
}

// Part 2: Functions
function greetUser(name) {
  return "Hello, " + name + "!";
}

function squareNumber(num) {
  return num * num;
}

// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];
let list = document.getElementById("numberList");

for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = numbers[i] + " squared = " + squareNumber(numbers[i]);
  list.appendChild(li);
}

// Part 4: DOM interactions
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = greetUser(username);
});

// Change background color
document.body.style.backgroundColor = "#f4f4f9";
