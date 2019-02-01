// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// var vet1 = [6, 5, 4, 3, 2];
function fibonacci(n) {
    var fib = 0;
    if ((n == 1) || (n == 2))
        return 1;
    else
        return (fib(n - 1) + fib(n - 2));

}
var result = fibonacci(7);
document.write(result);