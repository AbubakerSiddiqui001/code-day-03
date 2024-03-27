// Print transport messege
let transports: string[] = [`Honda Motorcycle, Tesla car, Bianchi bicycle`];

transports.forEach(transports => {
    console.log(`I would like a own ${transports}. `);
});

// print guest messege
let guest: string[] = [`Albert Einsten, Marie Curie, Nikola Tesla`];

guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner ?`);
});


let unableToAttend = "Nekola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuests = "Elon Musk";
guest['guests'.indexOf(unableToAttend)] = newGuests

// New Invitation
guest.forEach(guest =>{
    console.log(`Dear ${newGuests}, would you like to join me for dinner ?`);
})