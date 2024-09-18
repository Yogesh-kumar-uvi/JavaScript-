// JavaScript file demonstrating logical operators with examples

// Example 1: Logical AND (&&)
// AND returns true if both conditions are true, otherwise false
let condition1 = true;
let condition2 = false;

// In this case, since one condition is false, the result will be false
console.log('true && false:', condition1 && condition2); // Output: false

condition2 = true; // Updating condition2 to true
// Now both conditions are true, so the result will be true
console.log('true && true:', condition1 && condition2); // Output: true


// Example 2: Logical OR (||)
// OR returns true if at least one condition is true, otherwise false
let condition3 = false;
let condition4 = true;

// One of the conditions is true, so the result will be true
console.log('false || true:', condition3 || condition4); // Output: true

condition4 = false; // Updating condition4 to false
// Both conditions are now false, so the result will be false
console.log('false || false:', condition3 || condition4); // Output: false


// Example 3: Logical NOT (!)
// NOT inverts the value: true becomes false, and false becomes true
let condition5 = true;

// NOT true becomes false
console.log('!true:', !condition5); // Output: false

condition5 = false;
// NOT false becomes true
console.log('!false:', !condition5); // Output: true


// Example 4: Combining logical operators
let age = 25;
let hasDrivingLicense = true;

// AND and OR can be combined to create more complex conditions

// Check if the person is over 18 AND has a driving license
if (age > 18 && hasDrivingLicense) {
    console.log('The person can legally drive'); // Output: The person can legally drive
} else {
    console.log('The person cannot legally drive');
}

// Check if the person is over 18 OR has a driving license
// OR will return true if any one condition is true
if (age > 18 || hasDrivingLicense) {
    console.log('The person is either old enough or has a driving license'); // Output: The person is either old enough or has a driving license
} else {
    console.log('Neither condition is true');
}




// Complex program using AND (&&), OR (||), and NOT (!)

// Variables representing user state
let isLoggedIn = true;       // Is the user logged in?
let isAdmin = false;         // Is the user an admin?
let hasPaidSubscription = true; // Has the user paid for a subscription?
let isAccountLocked = false; // Is the user's account locked?

// Variables for checking access to different parts of the site
let accessLevel;
let canAccessPremiumContent;
let canAccessAdminPanel;

// Check if the user can access the basic content of the site
// To access basic content, the user must be logged in and their account must not be locked
if (isLoggedIn && !isAccountLocked) {
    accessLevel = "basic content";
} else {
    accessLevel = "no access";
}

console.log(`User has access to: ${accessLevel}`); // Output depends on isLoggedIn and isAccountLocked

// Check if the user can access premium content
// To access premium content, the user must be logged in, have a paid subscription, and their account must not be locked
if (isLoggedIn && hasPaidSubscription && !isAccountLocked) {
    canAccessPremiumContent = true;
} else {
    canAccessPremiumContent = false;
}

console.log(`Can user access premium content? ${canAccessPremiumContent}`); // true or false

// Check if the user can access the admin panel
// Only admins can access the admin panel, regardless of subscription, but their account must not be locked
if (isAdmin && !isAccountLocked) {
    canAccessAdminPanel = true;
} else {
    canAccessAdminPanel = false;
}

console.log(`Can user access admin panel? ${canAccessAdminPanel}`); // true or false

// Complex condition checking multiple factors
// This checks if the user is either an admin or has a subscription, AND they are logged in and the account is not locked
if ((isAdmin || hasPaidSubscription) && isLoggedIn && !isAccountLocked) {
    console.log('User can access special features of the website.');
} else {
    console.log('User cannot access special features.');
}

// Simulate account lock scenario
isAccountLocked = true;

// Recheck conditions after account is locked
if (isLoggedIn && !isAccountLocked) {
    console.log('User has access to basic content.');
} else {
    console.log('User cannot access the site because the account is locked.');
}

