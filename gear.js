var greeting = 'Welcome, ';
var message = ' please check out our wares:';
// Concatenate the two variables above to create the welcome message
var welcome = greeting + message;

// Create variables to hold details about camping supplies
var Tents;
// Create array for the different colors of tents
Tents = ['Green', 'Black', 'Orange'];

// Update the first color for tents
Tents[0] = 'Yellow';


// Use arithmic operator to calculate cost of items
var sleepingbag = 15 * 1;

var footware = 7;

var firstAid = 10

var grandTotal = sleepingbag + footware + firstAid;

var elgrandTotal = document.getElementById('grandTotal');
elgrandTotal.textContent = '$' + grandTotal;


var elfirstAid = document.getElementById('firstAid');
elfirstAid.textContent = '$' + firstAid;


var elfootware = document.getElementById('footware');
elfootware.textContent = '$' + footware;


var elsleeping = document.getElementById('sleepingbag');
elsleeping.textContent = '$' +''+ sleepingbag;

var el = document.getElementById('Tents');
el.textContent = Tents[0];

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;
