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

//usefull for converting string types to number e.g.
let pageNumber: string = '1'
let numericPageNumber: number = pageNumber as unknown as number //no error :)
