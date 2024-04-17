let Guest_List: string[] = ['Imran khan', 'Nawaz Sharif','Asif Ali Zardari'];

// for (let i = 0; i < Guest_List.length; i++) {

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }

let  absent_Guest: string = 'Imran khan';

let  new_Guest: string = 'Kamran Tessori';

Guest_List[0] = new_Guest;

// for (let i = 0; i < Guest_List.length; i++) {

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We find big Table so we are invitnig 3 more guests.')

// array me 3 guest add kiye hai.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

//yahan pr 6men guest ke array ko print kraya hai.
for (let i = 0; i < Guest_List.length; i++) {

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}

//Sorry message to guest for not inviting
console.log('\nSorry we can not arrange big table, Only Two peoples well be invited.');

//yehan pr mene Guest remove kiye hain.
while(Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner.`);
}
// humere bache howe 2 invited Guest.
for (let i = 0; i < Guest_List.length; i++) {

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}

// Remove guestall from array 
Guest_List.splice(0, 2);
console.log(Guest_List);



