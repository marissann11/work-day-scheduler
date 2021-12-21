// Moment.js code for current date and time + display on innerHTML

let dayInfo = moment().format('LL');
let displayDay = document.querySelector("#currentDay");
displayDay.innerHTML = dayInfo;

// Function for checking time with moment.hour and comparing to div id 

function checkTime() {

    console.log("time is being checked")

    let currentTime = moment().hour();

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

$(".saveBtn").on("click", saveTasks)

function saveTasks() {
    console.log("button clicked")
    let newTasks = document.querySelector("#task-text").value;
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

// Retrieve saved texted from local storage after refresh

function displayTasks() {
    let pastTasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = document.querySelector("#task-text");
    tasks.textContent = pastTasks;
}

displayTasks()

// Function to clear schedule once day has changed



