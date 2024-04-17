
// Write a program that creates objects containing these items.

// Data type of person object
interface Person{
    age: number,
    name: string,
    nationality: string,
    student: boolean
}

// Person object
let person :Person  = {

    age: 26,
    name: 'Sohail',
    nationality: 'Pakistan',
    student: true
};
// print person
console.log(person);

// Data type of car object
interface car {
    maker: string,
    color: string,
    automatic: boolean
}
// Car objects
let car :car = {
    maker: 'toyota',
    color: 'black',
    automatic: true
}

// print car
console.log(car);
