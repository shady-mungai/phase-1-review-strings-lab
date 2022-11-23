// Write your code in this file!
const currentUser = "Shady Mungai";

//const welcomeMessage = 'Welcome to Flatbook, ';

//string concatenation
//const welcomeMessage = 'Welcome to Flatbook, '+ currentUser;

// string interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//use of uppercace
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//short greting
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// console.log(currentUser.slice(0, 1));
