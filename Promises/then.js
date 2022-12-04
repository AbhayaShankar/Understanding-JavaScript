//trying Closures in JS

function x() {
  for (var i = 1; i <= 5; i++) {
    function z(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    z(i);
  }
}

x();
