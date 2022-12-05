//Promises Chaiining --
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    alert(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result * 2;
  });

/*

  The idea is that the result is passed through the chain of .then handlers.

Here the flow is:

1. The initial promise resolves in 1 second (*),
2. Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
3. The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
…and so on.
    
As the result is passed along the chain of handlers, we can see a sequence of alert calls: 1 → 2 → 4.

*/

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

// Here we are calling promises independently. It is like calling
//promise.then(function (result) {
//alert(result); // 1
//return result * 2;

// Above code 3 times independently. So we get 1 in alert, 3 times.

// Returning Promises -- It allows us to build chains of asynchronous actions.

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    alert(result); // 4
  });

// Promise chaining but using return new promise.
// Here return new promise returns a new promise with resolve result as 2*result and gives alert after 1 sec just as prev time.

// first .then resolves and the result passes to the next argument of promise with resolve value as the .then result
