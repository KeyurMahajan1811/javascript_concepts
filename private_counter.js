// How to create Private Counter in JavaScript
// Working with javascript Clousure 

function counter() {
    var _counter = 0;

    return {
        add: function (increment) {
            _counter += increment;
        },
        retrive: function () {
            return "Current Counter is on :" + _counter;
        }
    }
}

var C = counter();

C.add(10);
C.add(9);

C.retrive();