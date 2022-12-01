// console.log(b1);
// console.log(a1);

// let a1 = 5;

// console.log(a1);

// var b1 = 15;

// console.log(b1);

// //ABHAYA SHANKAR

// // let a = 100; //redeclaration of let variable
// // will give a SYNTAX_ERROR.

// //ABHAYA SHANKAR

// let d1;

// d1 = 20;

// console.log(d1);

// const e1 = 200;
// e1 = 100; // Here redeclaring a const variable gives a typeError
// console.log(e1);

//ABHAYA SHANKAR

//Code script will die before error is handled by try...catch;
/*
try {
  setTimeout(function () {
    noSuchVariable;
  }, 1000);
} catch (err) {
  alert("won't work");
}
*/

//Script should die here but it is not dying here... What could be the reason ????

// Handling using try...catch & Settimeout function.

/*

setTimeout(function () {
  try {
    noSuchVariable;
  } catch (err) {
    alert("won't work");
  }
}, 1000);

*/
/*
try {
  errorHappens;
} catch (error) {
  alert(error.name);
  alert(error.message);
  alert(error.stack);
}

*/

let json = '{"data" : "Abhaya" , "age" : 30 }';

try {
  let user = JSON.parse(json);
  alert(user.sex); //we are accessing something which is not defined in the json so different error rather than going to catch.
} catch (err) {
  alert("Something is wrong.");
}
