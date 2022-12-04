/*We can see two things by running the below code :

The executor is called automatically and immediately (by new Promise).

The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

After one second of “processing”, the executor calls resolve("done") to produce the result. This changes the state of the promise object.
To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.

A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.
*/

let promise = new Promise(function (resolve, reject) {
  resolve(console.log("Executed")); //if resolve is there then promise will ignore reject.
  setTimeout(() => {
    reject(console.log("Oh Nooooo... My Coodee.... Its Brokenn..."));
  }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  //   resolve(console.log("Executed"));
  setTimeout(() => {
    reject(new Error("Oh Nooooo... My Coodee.... Its Brokenn...")); // here resolve is not called, so if any error prevails, reject will be called on.
  }, 1000);
});

let promise3 = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => {
    reject(new Error("Whoops! an error occured"));
  }, 1000);
});
