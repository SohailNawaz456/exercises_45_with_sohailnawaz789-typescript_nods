let Guest_List: string[] = ['Imran khan', 'Nawaz Sharif','Asif Ali Zardari'];

// for (let i = 0; i < Guest_List.length; i++) {

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }

let  absent_Guest: string = 'Imran khan';

let  new_Guest: string = 'Kamran Tessori';

Guest_List[0] = new_Guest;

for (let i = 0; i < Guest_List.length; i++) {

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We find big Table so we are invitnig 3 more guests.')


Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

for (let i = 0; i < Guest_List.length; i++) {

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}

// Mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
