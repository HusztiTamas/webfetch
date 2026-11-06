let users = [];

const init = async () => {
  const loadData = async () => {
    const valasz = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await valasz.json();
  };
  await loadData();
  console.table(users);
};

let tablazatGeneralas = () => {
  let tablazat = document.getElementById("userData");
  users.forEach((user) => {
    const sor = document.createElement("tr");

    const cellaUserName = document.createElement("td");
    cellaUserName.textContent = user.name;

    const cellaUserEmail = document.createElement("td");
    cellaUserEmail.textContent = user.email;

    sor.appendChild(cellaUserName);
    sor.appendChild(cellaUserEmail);
    tablazat.appendChild(sor);
  });
};

document.addEventListener("DOMContentLoaded", init);
