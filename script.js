// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
currentTimer = setInterval(function () {
  var currDay = dayjs().format("MMM D, YYYY, hh:mm:ss a");
  $("#this-day").text(currDay);
}, 1000);

$(function () {
  $(".saveBtn").on("click", function (event) {
    console.log("click");
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    console.log(time, value);
    localStorage.setItem(time, value);
  });
  for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }

  function hourUpdater() {
    var currHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currHour) {
        $(this).addClass("past");
      } else if (blockHour === currHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
hourUpdater()
setInterval(hourUpdater, 15000)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function makeTimeBlocks() {
  var boxes = $(".container");
}

//add more time blocks

//figure out how to change colors for different times
// if statments and time arr

//save tasks in local storage
