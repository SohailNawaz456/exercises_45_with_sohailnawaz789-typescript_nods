//3. Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase,
// uppercase, and titlecase.
// Store the person's name in a variable
var personName = "Sohail Nawaz";
// Print the name in lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Print the name in uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Print the name in titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log("Titlecase: " + toTitleCase(personName));
