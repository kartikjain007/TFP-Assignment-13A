const numberOfUsers = window.prompt("Please enter number of users...");

document.write(`<h3>Number of users: ${numberOfUsers}</h3>`);

for (let i = 0; i < numberOfUsers; i++) {
  const names = window.prompt("Please enter the name...");
  document.write(`<li>${names}</li>`, "<br>");
}
