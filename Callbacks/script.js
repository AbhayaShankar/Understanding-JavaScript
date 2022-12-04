/*
function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => {
    callback(script);
  };

  document.head.append(script);
}

*/

/*
// Runnong script using callbacksS
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_); // _ is a function declared in the loaded script
  }
);

// That’s called a “callback-based” style of asynchronous programming. 
//A function that does something asynchronously should provide a callback argument
//where we put the function to run after it’s complete.
*/

//Handling Errors in Callbacks
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
