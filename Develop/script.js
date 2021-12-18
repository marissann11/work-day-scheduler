// Grab buttons and other elements needed from HTML

let now = moment().format("HH");

// Moment.js code for current date and time + display on innerHTML

let dayInfo = moment().format('LL');
let displayDay = document.querySelector("#currentDay");
displayDay.innerHTML = dayInfo;

// For loop for calculating if "i" is >, <, or === current hour, add css classes accordingly
// Grab hour (div id) from each time block and compare to "now", 

// setInterval to make sure loop is being run often enough to  check times (?)


// Save button click function to save text in local storage


// Retrieve saved texted from local storage after refresh

// Also need a way to clear out schedule once the day has changed (??)
