var monthNamesRy = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
var daysOfTheWeekRy = ["L", "M", "M", "J", "V", "S","D"];
var janvier = 0;
var fevrier = 1;
var mars = 2;
var avril = 3;
var mai = 4;
var juin = 5;
var juillet = 6;
var aout = 7;
var septembre = 8;
var octobre = 9;
var novembre = 10;
var decembre = 11;
//var Jour de formation, par mois
var jourDeForm = new Array();
for(var i=0; i<12; i++){
   jourDeForm[i] = new Array();
}
jourDeForm[janvier].push("21","22","23","24","25");
jourDeForm[fevrier].push("");
jourDeForm[mars].push("");
jourDeForm[avril].push("1","2","3","4","5");
jourDeForm[mai].push("");
jourDeForm[juin].push("");
jourDeForm[juillet].push("1","2","3","4","5");
jourDeForm[aout].push("");
jourDeForm[septembre].push("16","17","18","19","20");
jourDeForm[octobre].push("");
jourDeForm[novembre].push("");
jourDeForm[decembre].push("");

//var Jour de stage, par mois
var jourDeStage = new Array();
for(var i=0; i<12; i++){
   jourDeStage[i] = new Array();
}
jourDeStage[janvier].push("");
jourDeStage[fevrier].push("");
jourDeStage[mars].push("");
jourDeStage[avril].push("");
jourDeStage[mai].push("");
jourDeStage[juin].push("");
jourDeStage[juillet].push("");
jourDeStage[aout].push("");
jourDeStage[septembre].push("");
jourDeStage[octobre].push("");
jourDeStage[novembre].push("");
jourDeStage[decembre].push("");

//var Jour de formation déjà réservés, par mois
var jourDeFormOut = new Array();
for(var i=0; i<12; i++){
   jourDeFormOut[i] = new Array();
}
jourDeFormOut[janvier].push("");
jourDeFormOut[fevrier].push("11","12","13","14","15");
jourDeFormOut[mars].push("");
jourDeFormOut[avril].push("");
jourDeFormOut[mai].push("");
jourDeFormOut[juin].push("");
jourDeFormOut[juillet].push("");
jourDeFormOut[aout].push("");
jourDeFormOut[septembre].push("");
jourDeFormOut[octobre].push("");
jourDeFormOut[novembre].push("");
jourDeFormOut[decembre].push("");

//var Jour de stage déjà réservés, par mois
var jourDeStageOut = new Array();
for(var i=0; i<12; i++){
   jourDeStageOut[i] = new Array();
}
jourDeStageOut[janvier].push("");
jourDeStageOut[fevrier].push("");
jourDeStageOut[mars].push("");
jourDeStageOut[avril].push("");
jourDeStageOut[mai].push("");
jourDeStageOut[juin].push("");
jourDeStageOut[juillet].push("");
jourDeStageOut[aout].push("");
jourDeStageOut[septembre].push("");
jourDeStageOut[octobre].push("");
jourDeStageOut[novembre].push("");
jourDeStageOut[decembre].push("");


var d = new Date();
//var year = d.getFullYear();// 2016
var year = 2019;
document.querySelector("#year").innerHTML = year;
var thisMonth = d.getMonth();// 0 - 11
var today = d.getDate();// 1 -31
//var nthday = d.getDay();// 0 - 7
var daysOfTheMonthDiv = document.querySelectorAll(".daysOfTheMonth");


for( var month = 0; month< 12; month++){
	createCalendar(month);
}



function createCalendar(month){
var monthDiv = createMonthHeader(month);

var firstDayOfTheMonth  = getFirstDayOfTheMonth(year,month);
var daysinmonth  = daysInMonth(year,month)
var counter = 0,order = 6;

for( var i = 0; i < firstDayOfTheMonth +7; i++){
order++;
createDay(month, "&nbsp;",order, monthDiv);
}
for( var i = firstDayOfTheMonth; i < daysInMonth(year,month) + firstDayOfTheMonth; i++){
counter ++;
order++;
createDay(month,counter,order,monthDiv);
}

for( var i = firstDayOfTheMonth + daysinmonth; i < 6*7; i++){
order++;
createDay(month, "&nbsp;",order, monthDiv);
}


}

function createDay(month,counter,order,monthDiv){

//if(order == 8){order = -1}
var day = document.createElement("div");
day.setAttribute("class","day");			
for (var i = 0; i < jourDeForm.length; i++) {
	for (var j = 0; j < jourDeForm[i].length; j++){
		
		if(month == i && counter == jourDeForm[i][j])
		{
			day.setAttribute("class","to day");
		}


			}
}
for (var i = 0; i < jourDeStage.length; i++) {
	for (var j = 0; j < jourDeStage[i].length; j++){
		
		if(month == i && counter == jourDeStage[i][j])
		{
			day.setAttribute("class","to dayStage");
		}

			}
}
for (var i = 0; i < jourDeStageOut.length; i++) {
	for (var j = 0; j < jourDeStageOut[i].length; j++){
		
		if(month == i && counter == jourDeStageOut[i][j])
		{
			day.setAttribute("class","to dayStageOut");
		}

			}
}
for (var i = 0; i < jourDeFormOut.length; i++) {
	for (var j = 0; j < jourDeFormOut[i].length; j++){
		
		if(month == i && counter == jourDeFormOut[i][j])
		{
			day.setAttribute("class","to dayFormOut");
		}

			}
}
		day.setAttribute("style","order:"+order);
		day.innerHTML = counter;
		monthDiv.appendChild(day);	


}
/*
if(
	(month == 2  && (counter == '2' || counter == '3' || counter == '4' || counter == '5' || counter == '6')) 
	||  (month == 5  && (counter == '20' || counter == '3' || counter == '4' || counter == '21' || counter == '22'))){day.setAttribute("class","to day");
}
*/
/*if(month == thisMonth && counter == today){day.setAttribute("class","to day");
}*/



function createMonthHeader(month){
var calendar = document.querySelector(".calendar");
	

	
var monthDiv = document.createElement("div");
	monthDiv.setAttribute("class","month");
	calendar.appendChild(monthDiv);
	
var h4 = document.createElement("h4");
	h4.innerHTML = monthNamesRy[month];
	monthDiv.appendChild(h4);	
	
for( var i = 0; i < 7; i++){
	//var order = (i == 0) ? order = 7 : order = i;
	var hday = document.createElement("div");
	hday.setAttribute("class","day OfWeek");
	hday.setAttribute("style","order:"+i);
	hday.innerHTML = daysOfTheWeekRy[i].toUpperCase();
	monthDiv.appendChild(hday);
}


	return monthDiv;
	
/*
<div class="month">
	
<div class="monthHeader">
<div class="day OfWeek">Sun</div>
<div class="day OfWeek">Mon</div>
<div class="day OfWeek">Tue</div>
<div class="day OfWeek">Wed</div>
<div class="day OfWeek">Thu</div>
<div class="day OfWeek">Fri</div>
<div class="day OfWeek">Sat</div>
</div>
		
<div class="daysOfTheMonth">
*/
}


function daysInMonth(year,month) {
    return new Date(year, month+1, 0).getDate();//29/03/2016 (month + 1)
}

/*function leapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getNextMonth(month){
 if (month == 11) {
    var nextMonth = 0;
} else {
    var nextMonth = month+1;
}
return nextMonth;
}
*/
function getMonthName(month){
	return monthNamesRy[month];
}
function getDayName(day){
	return daysOfTheWeekRy[day];
}

function getFirstDayOfTheMonth(y,m){
	var firstDay = new Date(y, m, 0);
	return firstDay.getDay();
}
function getLastDayOfTheMonth(y,m){
	var lastDay = new Date(y, m + 1, 0);
	return lastDay.getDay();
}


// the popp up

var calendar = document.querySelector(".calendar");
var cloneCont = document.querySelector(".cloneCont");
var requestId = false;
	calendar.addEventListener("click", function(e){
        if(this.querySelector(".cloneCont")){
			this.removeChild(this.querySelector(".cloneCont"));}

        else if(e.target.parentNode.className =='month' ){
		
		var monthClone = e.target.parentNode.cloneNode(true);
		monthClone.className += " cloneMonth";
		var cloneCont = document.createElement("div");
		cloneCont.className += " cloneCont";
		cloneCont.appendChild(monthClone);
		this.appendChild(cloneCont);
		
		}
		},false);