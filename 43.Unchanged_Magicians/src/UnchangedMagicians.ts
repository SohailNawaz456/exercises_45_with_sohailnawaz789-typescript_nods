// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician: string[] = ['Harry Potter', 'Hermione Granger','Ron Weasley','Albus Dumbledore'];

function copyArray(array: string[]) {
    return [...array]
}
function make_great (magicianArray: string[]){
    for(let i = 0; i < magicianArray.length; i++){
    magicianArray[i] = 'The Great: ' + magicianArray[i];
    }
}
function show_magicians(magicians: string[]) {

    magicians.forEach(element => {
        console.log(element);
    });
}

const copyMagicianArray = copyArray(magician);  

make_great(copyMagicianArray);

console.log('\n\nThis is my Original Array:');
show_magicians(magician);

console.log('\n\nThis is my Modified Copy of the Array:');
show_magicians(copyMagicianArray);



