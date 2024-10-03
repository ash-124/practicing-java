// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       console.log("i am fetching hurrayyyy")

const fetcho = "https://jsonplaceholder.typicode.com/todos/1";

function fetching() {
  fetch(fetcho)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
// load 10 users data
function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => userData(data));
}
function userData(data) {
  const ul = document.getElementById("userName");

  for (const users of data) {
    const names = users.name;
    const li = document.createElement("li");
    li.innerText = names;
    ul.appendChild(li);
  }
}
// load data of todo list
function loadToDo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => getData(data));
}
function getData(data) {
  console.log(data);
}

// let's write this fetch into a function

 async function loader (){
  
  const res = await fetch('');
  const data = await res.json() ;
  console.log(data);
}