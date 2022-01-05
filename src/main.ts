let hello: string = 'Hello'

const sayHello = (
    name: string
): string /* It's always  better to specify the return type */ => {
    return `${hello} ${name}`
}
console.log(sayHello('Brighton'))

/*Interfaces are used as blueprints for creating objects */

interface UserInterface {
    name: string
    age?: number //use the question mark to indicate property is not mandatory
    sayHello(name: string): string
}

const user: UserInterface = {
    name: 'John',
    age: 36,
    sayHello(name: string) {
        return `Hello ${name}`
    },
}
console.log(user.name)
console.log(user.sayHello(user.name))

//Type unions and aliases
//We can create our own aliases for types and use them instead of the native types

type ID = string | number // the | symbol represents union of the types, ID can be a number or a string.

const myId: ID = 1

//void,
const helloWorld = (): void => {
    //if a function does not return anything, specify that explicitly
    console.log('hello world')
}

//unknown data type
let unKnown: unknown

//usefull for typecasting/type assertions e.g.
let pageNumber: string = '1'
let numericPageNumber: number = pageNumber as unknown as number //no error :)

//Classes in typescript
interface UserInterface2 {
    getFullName(): string
}

//every class that implements UserInterface must implement the getFullName method

class User implements UserInterface2 {
    private firstName: string //only accessible in the class
    protected lastName: string //only accessible in the class or children that inherit the class

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName
    } // here we implement the getFullName method as required by the interface
}

//Now we can create instances of this class

const user1 = new User('Adam', 'Smith')
// user1.firstName trying to do this will give us an error because firstName property can only be accessed inside the class due to the "private" declaration.

console.log(user1.getFullName())

//Inheritence
//************ */
/*We can create classes that inherit properties of other classes. These children classes can override properties from the parent class or add their own unique properties*/

class Admin extends User {
    private editor: string
    setEditor(editor: string): void {
        this.editor = editor
    }
    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin('Elon', 'Musk')
admin.setEditor('Joe Biden')
console.log(admin.getEditor())

//Enums in Typescript
enum StatusEnum {
    notStarted = 'not started',
    inProgress = 'in progress',
    done = 'done!',
}

console.log(StatusEnum.done)
