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
