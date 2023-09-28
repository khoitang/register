
function loadDataAndcalculatePrice(){
	totalPrice = 0
	var name  = document.getElementById("confirm_name");
	var email = document.getElementById("confirm_email");	
	var phone = document.getElementById("confirm_phone");
	var age   = document.getElementById("confirm_age");
	name.textContent = sessionStorage.firstname +" "+sessionStorage.lastname;
	email.textContent = sessionStorage.email;
	phone.textContent = sessionStorage.phone;
	age.textContent = sessionStorage.age;

	var occupation = document.getElementById("confirm_occupation")
	occupation.textContent = sessionStorage.occupation

	var yourCourses = ""
	if (sessionStorage.logic== "true") {
		totalPrice += 449;
		yourCourses += "logicmath, ";
	}
	if (sessionStorage.web == "true") {
		totalPrice += 749;
		yourCourses += "web, ";
	}
	if (sessionStorage.python == "true") {
		totalPrice += 7999;
		yourCourses += "python, ";
	}
	if (sessionStorage.ai == "true") {
		totalPrice += 449;
		yourCourses += "ai, ";
	}
	if (sessionStorage.data == "true") {
		totalPrice += 249;
		yourCourses += "datascience, ";
	}
	if (sessionStorage.game == "true") {
		totalPrice += 149;
		yourCourses += "game, ";
	}
	yourCourses = yourCourses.substring(0, yourCourses.length - 2);
	confirm_courses.textContent = yourCourses;

	var payment = document.getElementById("confirm_payment")
	payment.textContent = sessionStorage.payment
	var total = document.getElementById("confirm_total")
	total.textContent = totalPrice

}
function cancelButton(){
	window.location = "register.html";
}

function init(){ 
	loadDataAndcalculatePrice();
	var cancel = document.getElementById("cancel");
	cancel.onclick = cancelButton;
}

window.onload = init;	