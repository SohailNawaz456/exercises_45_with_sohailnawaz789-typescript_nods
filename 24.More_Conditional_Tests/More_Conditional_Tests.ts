
// Equality and Inequality Test 1
console.log('Equality test with strings:', "Apple" === "Apple");


// Equality and Inequality Test 2
console.log('Equality test with strings:', ("Apple" as string )!= "orange");


//Tests using the lower case function.
console.log('Lower Case function test: ', "Hello".toLocaleLowerCase() === 'hello');


//Numerical tests involving equality.
console.log('Equality test with number: ', 26 === 26);

//Numerical tests involving  inequality.
console.log('Inequality test with number: ', (26 as number) != 35);


// Greater than test.
console.log('Greater than test: ', 10 > 5);

//Less than test.
console.log('Less than test: ', 5 < 10);


// Greater than or equal to.
console.log('Greater than or equal to test: ', 10 >= 10);

// Less than  or equal to.
console.log('Less than or equal to test: ', 5 <= 10);

//Tests using &&  operator.
console.log('And operator test: ', 5 === 5 && 10 > 5);


//Tests using or  operator.
console.log('Or operator test: ', 5 === 5 || false);

//Test whether an item is in a array.

const fruits: string[] = ["Apple", "Orange", "Mango"];

console.log('Test "Apple" in the fruits array: ', fruits.includes("Apple"));

//Test whether an item is not in a array.
console.log('Test "Nashpati" not in the fruits array: ',!fruits.includes("Nashpati"));
