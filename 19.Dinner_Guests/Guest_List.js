"use strict";
let Guest_List = ['Imran khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }
let absent_Guest = 'Imran khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find big Table so we are invitnig 3 more guests.')
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
// yahan per men 6 guest ke array ko print karaya hai.
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }
// Sorry Message to Guest not invited.
// console.log('\nSorry we can not arrange big table, Only Two people will be invited.')
// yehan per mene Guest remove kiye hai.
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    // console.log(`Mr. ${remove_guest} is not coming to the party.`);
}
//Humare bache howe 2 invited Guest.
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }
// Mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise #19
//print a message indicating the number of people you inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_List.length}`);
