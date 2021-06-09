// How to create Private Variable in JavaScript
// Working with javascript Clousure 

function func() {
    var secrete = "secrete_code"
    return function () {
        return secrete;
    }
}

var getSecrete = func();
console.log(getSecrete());

