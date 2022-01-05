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
var myId = 1;
//void,
var helloWorld = function () {
    //if a function does not return anything, specify that explicitly
    console.log('hello world');
};
//unknown data type
var unKnown;
//usefull for converting string types to number e.g.
var pageNumber = '1';
var numericPageNumber = pageNumber; //no error :)
