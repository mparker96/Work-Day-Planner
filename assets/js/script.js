$(document).ready(function (){

// moment to display time on page
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
}
)

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});


