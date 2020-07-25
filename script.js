//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist



//curent date and time
const m = moment();
const myMomentDiv = document.getElementById("displayMoment")

displayMoment.textContent=m

console.log(m.format("LLLL"));

//change colors depending on time
const timeEl = $(".hour");
timeEl.each((div => console.log($(this))));



//save user input to local storage
$('.saveBtn').click(function() {
    var str = $(this).siblings('.description').val();

    localStorage.setItem("input.description", str);

}
)


//if (hour > 9) {
   // $(.time-block).addClass('future');
//} else if(hour >= 9) {
    
//}