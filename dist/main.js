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
//usefull for typecasting/type assertions e.g.
var pageNumber = '1';
var numericPageNumber = pageNumber; //no error :)
//every class that implements UserInterface must implement the getFullName method
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }; // here we implement the getFullName method as required by the interface
    return User;
}());
//Now we can create instances of this class
var user1 = new User('Adam', 'Smith');
// user1.firstName trying to do this will give us an error because firstName property can only be accessed inside the class due to the "private" declaration.
console.log(user1.getFullName());
