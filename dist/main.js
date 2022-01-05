var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Inheritence
//************ */
/*We can create classes that inherit properties of other classes. These children classes can override properties from the parent class or add their own unique properties*/
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('Elon', 'Musk');
admin.setEditor('Joe Biden');
console.log(admin.getEditor());
