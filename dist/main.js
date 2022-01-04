var hello = 'Hello';
var sayHello = function (name) {
    return "".concat(hello, " ").concat(name);
};
console.log(sayHello('Brighton'));
var user = {
    name: 'John',
    age: 36,
    sayHello: function (name) {
        return "Hello ".concat(name);
    }
};
console.log(user.name);
console.log(user.sayHello(user.name));
