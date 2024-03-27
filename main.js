// Print transport messege
var transports = ["Honda Motorcycle, Tesla car, Bianchi bicycle"];
transports.forEach(function (transports) {
    console.log("I would like a own ".concat(transports, ". "));
});
// print guest messege
var guest = ["Albert Einsten, Marie Curie, Nikola Tesla"];
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner ?"));
});
var unableToAttend = "Nekola Tesla";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuests = "Elon Musk";
guest['guests'.indexOf(unableToAttend)] = newGuests;
// New Invitation
guest.forEach(function (guest) {
    console.log("Dear ".concat(newGuests, ", would you like to join me for dinner ?"));
});
