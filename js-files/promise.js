const loader = () => {
  // returning a promise and inside promise two call back function
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(0.5);
    } else {
      reject(0.8);
    }
  });
};
loader();
// steps to make a promise :-
// 1. make a variable and declare a arrow function
// 2.inside the function return the Promise method as a function.
// 3. inside Promise function declare a arrow function then set the parameter of the to two callback function :- resolve and reject .
// then gave the conditions inside the arrow function and call the call back functions.
// 4. don't ever forgot to call the first created function.optional

// promise with random loader
const randomLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success < 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
// randomLoader();

// Promise with error catching:-
const catchPromise = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success < 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
catchPromise()
  .then((data) => console.log("resolve data ", data))
  .catch((err) => console.log("Rejected promise", err));
