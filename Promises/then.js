// .then --
// The first argument of .then is a function that runs when the promise is resolved and receives the result.
//The second argument of .then is a function that runs when the promise is rejected and receives the error.

//---------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Done..");
//   }, 1000);
// });

// promise.then(
//   (result) => alert(result),
//   (error) => alert(error)
// );

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Oh Nooo... Error occured"));
  }, 1000);
});

promise.then(
  (result) => alert(result),
  (error) => alert(error)
);

// .catch ---

//If we’re interested only in errors, then we can use null as the first argument:
// .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction)

let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whooopsss... Error occured"));
  }, 1000);
});

promise3.catch(alert);

//The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand

//.finally ---

// let promise4 = new Promise((resolve, reject) => {
//   /* do something that takes time, and then call resolve or maybe reject */
// })
//   // runs when the promise is settled, doesn't matter successfully or not
//   .finally(() => stop loading indicator)
//   // so the loading indicator is always stopped before we go on
//   .then(result => show result, err => show error);
