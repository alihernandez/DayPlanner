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

displayMoment.textContent=m.format("LLLL")

console.log(m.format("LLLL"));

//color code time blocks

var day = new Date();
var hrs = day.getHours() ;
console.log(hrs)


const timeEl= $(".id");
timeEl.each($(id => console.log(id)));
console.log($("<.id>"))

 //update block
 //$( "#id.atrr" ).addClass( "present" );
 //var block = $("<input>");
 //console.log(block);

     



//const rows = document.getElementsByClassName("row");
//let currentHour = parseInt(moment().format('H'));

//Array.from(rows).forEach( row => {
    //let
        //rowIdString= row.id,
        //rowHour;
        //if (rowIdString) {
            //rowHour = parseInt(rowIdString);
        //}
        //if (rowHour) {
            //if (currentHour === rowHour) {
               // setClass("#present");
            //} else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
                //setClass("#future");
            //} else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
                //setClass("#past");
            //} else {

            //}

        //}
//});

//const timeEl= $(".hour");
//timeEl.each((div => console.log(div)))

//console.log(timeEl)


//function updateBlocks(){
    //var hr =  
   // if( m > hr ) {
    //    $(this).addClass("past");
    //} else if (hr === m) {
    //    $(this).removeClass("past");
    //    $(this).addClass("present");
    //} else if (hr < m) {
       // $(this).addClass("future");
        //$(this).removeClass("past");
        //$(this).removeClass("present");
    //}
//};


//if (hour > 9) {
   // $(.time-block).addClass('future');
//} else if(hour >= 9) {
    
//}




//save to local storage
$(".saveBtn").on("click", function() {
    var timeOfDay= $(this).parent().attr("id");
    //need to use (this).sibilings to refer to the item in the DOM that is calling it
    var textContent= $(this).siblings("input").val().trim();

    localStorage.setItem(timeOfDay, textContent);
    console.log(timeOfDay, textContent);
})

//this first part i worked through during office hours but i just felt it was too much and didn't really understand why 
//if(localStorage.getItem("input") !== null) {
   // toDoItem = JSON.parse(localStorage.getItem("input"));
    //for(i=0; i < toDoItem.length; i++) {
        //var hour = Object.keys(toDoItem[i])
        //var text = toDoItem[i].hour
        //console.log(hour)
        //console.log(text)
        //$(".description").each(function () {
           //if( $(this).attr("id") === hour) {
            //$(this).val(text);
           //}
        //})
    //}
//}
//;

//save user input to local storage

//$('.saveBtn').click
//(function() {
   //let text = $(this).siblings("input").val().trim();
   //let hours =  $(this).siblings("input").attr("id");
   //var object = {};
   //object[hours] = text;
    //console.log(object)
    //toDoItem.push(object);
    //console.log(toDoItem);
    //localStorage.setItem("items", JSON.stringify(toDoItem));
//}
//)//;


//pulling user info
//$("#9AM").children("input").val(localStorage.getItem("9AM"));
$("#10AM").children("input").val(localStorage.getItem("10AM"));
$("#11AM").children("input").val(localStorage.getItem("11AM"));
$("#12PM").children("input").val(localStorage.getItem("12PM"));
$("#1PM").children("input").val(localStorage.getItem("1PM"));
$("#2PM").children("input").val(localStorage.getItem("2PM"));
$("#3PM").children("input").val(localStorage.getItem("3PM"));
$("#4PM").children("input").val(localStorage.getItem("4PM"));
$("#5PM").children("input").val(localStorage.getItem("5PM"));