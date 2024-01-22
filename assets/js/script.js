//Create a variable that creates current date using days.js
var currentDate = dayjs().format("DD MMMM YYYY");
// day.js to set current date in the header
//create variable that takes the id of current date
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = currentDate;


//To get 24 hr format using dayjs
var currentHour = dayjs().format("HH");

//set the class for past, present and future on the time blocks

// Setting the class for past, present and future on the time-blocks.
$(".time-div").each(function() {
    // set timediv variable to the id of the timeblock by making an array, 
    //Select the numbers after the word hour

    /*$(this) is a jQuery function that refers to the current HTML element being processed.
.attr("id") is used to get the value of the "id" attribute of that HTML element.
.split("-") is a method that splits a string into an array of substrings based on a specified delimiter ("-").*/
    var timeDiv = $(this).attr("id").split("-")[1];
    // checking if the current time is equal to the timediv.
    if (currentHour == timeDiv) {
        // if it is equal to the current hour then add the class of present.
        $(this).addClass("present");
        $(this).children(".description").addClass("present");
        // if the current hour is less than the id of the time div set the class of future and remove the present class. 
    } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
        // if the current hour is greater than the id of the time div then remove the future class and add the past class.
    } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});


    // Prevent default on the browser while using on click of save button to save to the local storage.
    $(".saveBtn").click(function (event) {
        /*event.preventDefault(); is a JavaScript method that is used to stop the default behavior of an event. It gives you control over what happens when an event occurs*/
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time,value);
    });

    //retrieving the data from local storage 
    $("#9am .time-block").val(localStorage.getItem("09"));
    $("#10am .time-block").val(localStorage.getItem("10"));
    $("#11am .time-block").val(localStorage.getItem("11"));
    $("#12pm .time-block").val(localStorage.getItem("12"));
    $("#13pm .time-block").val(localStorage.getItem("13"));
    $("#14pm .time-block").val(localStorage.getItem("14"));
    $("#15pm .time-block").val(localStorage.getItem("15"));
    $("#16pm .time-block").val(localStorage.getItem("16"));
    $("#17pm .time-block").val(localStorage.getItem("17"));

    //Clear button function for clearing content and local storage
    $("#clearFieldsBtn").click(function(event) {
        event.preventDefault;
        $("textArea").val("");
        localStorage.clear();
    });