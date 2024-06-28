"use strict";
// question 13//
// store mode of transportation in an array //
let transportationMode = ["motorcycle", "car", "train", "aeroplane", "jeep"];
// print a statement about these items in a list by using for each method //
transportationMode.forEach(modes => {
    console.log(`"I would like to own a ${modes}" `);
});
// question no 14 //
// make an array of guestlist //
let guestList = ["ayesha", "mano", "kamal"];
// invite each guest for dinner by using for each method //
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited for dinner`);
});
// question no 15//
// remove one guest from the list who cant able to attend it //
let unableAttend = guestList.splice(2)[0];
console.log(`${unableAttend} cant make it to the dinner`);
// replace a guest or add a new guest //
guestList.push("rania");
// send out a new set of invitation to the guests after updating guestlist//
guestList.forEach(newguest => {
    console.log(`Dear ${newguest}, you are cordially invited for dinner along with family`);
});
