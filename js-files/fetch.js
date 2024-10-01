// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       console.log("i am fetching hurrayyyy")

const fetcho = "https://jsonplaceholder.typicode.com/todos/1";

function fetching() {
  fetch(fetcho)
    .then((response => response.json()))
    .then((json) => console.log(json));
}
function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function loadToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res => res.json()))
    .then((data => getData(data)));

}
function getData(data){
    console.log(data);
}