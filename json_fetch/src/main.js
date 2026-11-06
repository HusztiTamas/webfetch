import 'bootstrap/dist/css/bootstrap.min.css';

let users = [];

const init = async () => {
  const loadData = async () => {
    const valasz = await fetch("http://localhost:3000/users");
    users = await valasz.json();
  };
  await loadData();
  console.table(users);
  tablazatGeneralas();
};

let tablazatGeneralas = () => {
  let tablazat = document.getElementById("userData");
  users.forEach((user) => {
    const sor = document.createElement("tr");

    const cellaUserName = document.createElement("td");
    cellaUserName.textContent = user.nev;

    const cellaUserlass = document.createElement("td");
    cellaUserlass.textContent = user.osztaly;

    sor.appendChild(cellaUserName);
    sor.appendChild(cellaUserlass);
    tablazat.appendChild(sor);
  });
};

document.addEventListener("DOMContentLoaded", init);
