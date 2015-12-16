// Variables storing ID's for the different buttons on the site
// TODO: At the moment, only Semester and Download are used
// DziennieID = "ctl00_ctl00_ContentPlaceHolder_RightContentPlaceHolder_rbJak_0"
// TygodniowoID = "ctl00_ctl00_ContentPlaceHolder_RightContentPlaceHolder_rbJak_1"
SemestralnieID = "ctl00_ctl00_ContentPlaceHolder_RightContentPlaceHolder_rbJak_2"
PobiezrzID = "ctl00_ctl00_ContentPlaceHolder_RightContentPlaceHolder_btn_DrukujICS"

// Simple change of logged in user so as to not show who is logged in
// TODO: add ability to change this in popup
var user = document.getElementById("ctl00_ctl00_ContentPlaceHolder_wumasterWhoIsLoggedIn");
user.innerHTML = "Anonymous";

// Change the background color of the site to red, easier to see the extension is working
// TODO: add ability to change this in popup
document.body.style.background = '#444444';

// Create a hook to the Semester Radio button, then check if it is checked.
// save the results in a variable
var radioSem = document.getElementById(SemestralnieID);
var isChecked = radioSem.getAttribute("checked");

if(isChecked == null) {
	radioSem.click(); // If the radio is not checked, check it
}
else { // If the radio is checked perform the operation of downloading the iCalendar

	basePath = "https://wu.wsb.edu.pl/WU/";
	btnDownload = document.getElementById(PobiezrzID);
	onclickValue = btnDownload.getAttribute("onclick");
	pathToCal = onclickValue.substring(onclickValue.indexOf("'")+1, onclickValue.lastIndexOf("'"));
	pathToCal = basePath + pathToCal;

	// Set the url to download the iCalendar
	window.location.href = pathToCal;
}