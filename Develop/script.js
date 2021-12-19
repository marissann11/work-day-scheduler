// Grab buttons and other elements needed from HTML

let now = moment().format("HH");

// Moment.js code for current date and time + display on innerHTML

let dayInfo = moment().format('LL');
let displayDay = document.querySelector("#currentDay");
displayDay.innerHTML = dayInfo;

// For loop for calculating if "i" is >, <, or === current hour, add css classes accordingly
// Grab hour (div id) from each time block and compare to "now", 
console.log(now)

function checkTime() {

    console.log("time is being checked")

    let currentTime = moment().hour();

    $(".time-block").each(function() {

        let timeBlock = parseInt($(this).attr("id"));

        if (timeBlock < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
     }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

setInterval(checkTime, 60000);

// setInterval to make sure loop is being run often enough to  check times (?)


// Save button click function to save text in local storage


// Retrieve saved texted from local storage after refresh

// Also need a way to clear out schedule once the day has changed (??)
