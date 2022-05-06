//click hanlder func
function clickHandeler(){
var value= $(this).siblings("textarea").val();
var timeId= $(this).parent().attr("id");
localStorage.setItem(timeId, value);
}

var currntTime = moment().hours();
$(".time-block").each(function(){
var hr = $(this).attr("id").split("-")[1];

if (hr < currntTime){
    $(this).addClass("past");
} else if (hr== currntTime){
$(this).addClass("present");
} else {
    $(this).addClass("future");
}
});










$("#hour-9").children("textarea").val(localStorage.getItem("hour-9"))
$("#hour-10").children("textarea").val(localStorage.getItem("hour-10"))
$("#hour-11").children("textarea").val(localStorage.getItem("hour-11"))
$("#hour-12").children("textarea").val(localStorage.getItem("hour-12"))
$("#hour-13").children("textarea").val(localStorage.getItem("hour-13"))
$("#hour-14").children("textarea").val(localStorage.getItem("hour-14"))
$("#hour-15").children("textarea").val(localStorage.getItem("hour-15"))
$("#hour-16").children("textarea").val(localStorage.getItem("hour-16"))
$("#hour-17").children("textarea").val(localStorage.getItem("hour-17"))
//for all save button
$(".saveBtn").on("click", clickHandeler);

