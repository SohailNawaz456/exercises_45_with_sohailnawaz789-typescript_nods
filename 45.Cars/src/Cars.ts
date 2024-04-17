// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

import { features } from "process";

function storeCarinfo(manufacturer: string, modelName: string, ...extraOptions: { [key : string]: any} [] ): object{
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...Object.assign({}, ...extraOptions)
    }
    return carInfo;
};

let answer = storeCarinfo('Honda', 'Civic', {color:'black'}, {features: ['Navigation', 'Power windows']})

console.log(answer);                              
