let users = [];

const init = async () => {
  const loadData = async () => {
    const valasz = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await valasz.json();
  };
  await loadData();
  console.table(users);
};

document.addEventListener("DOMContentLoaded", init);
