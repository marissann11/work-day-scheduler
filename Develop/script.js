// Moment.js code for current date and time + display on innerHTML

let dayInfo = moment().format('LL');
let displayDay = document.querySelector("#currentDay");
displayDay.innerHTML = dayInfo;

// Function for checking time with moment.hour and comparing to div id 

function checkTime() {

    console.log("time is being checked")

    const currentTime = moment().hour();

    $(".time-block").each(function() {

        let timeBlock = parseInt($(this).attr("id"));

        // If id of time block is less than the current time, "past" class is applied
        if (timeBlock < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        // If id of time block is equal to current time, "present" class is applied
        else if (timeBlock === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // If id of time block is anything else (greater than), "future" class is applied
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

// setInterval running checkTime function every minute to update page

setInterval(checkTime, 60000);

// Save button click function to save text in local storage

$(".saveBtn").click(function() {
    // Since text box div is a sibling of the save button, this grabs the value of whatever task user inputs
    let text = $(this).siblings("#task-text").val();
    // This makes the hour variable the value of the id it is given in the HTML
    let hour = $(this).parent().attr("id");
    localStorage.setItem(hour, JSON.stringify(text))
});

// Function to display items from local storage onto page during reload

function displayTasks() {
    
    let enterItem9 = JSON.parse(localStorage.getItem(9))
    $("#9 #task-text").val(enterItem9);
    let enterItem10 = JSON.parse(localStorage.getItem(10))
    $("#10 #task-text").val(enterItem10);
    let enterItem11 = JSON.parse(localStorage.getItem(11))
    $("#11 #task-text").val(enterItem11);
    let enterItem12 = JSON.parse(localStorage.getItem(12))
    $("#12 #task-text").val(enterItem12);
    let enterItem13 = JSON.parse(localStorage.getItem(13))
    $("#13 #task-text").val(enterItem13);
    let enterItem14 = JSON.parse(localStorage.getItem(14))
    $("#14 #task-text").val(enterItem14);
    let enterItem15 = JSON.parse(localStorage.getItem(15))
    $("#15 #task-text").val(enterItem15);
    let enterItem16 = JSON.parse(localStorage.getItem(16))
    $("#16 #task-text").val(enterItem16);
    let enterItem17 = JSON.parse(localStorage.getItem(17))
    $("#17 #task-text").val(enterItem17);
}

// Function to clear schedule once day has changed

