	
function validate() {
	var firstname = document.getElementById("firstname").value;
	var lastname  = document.getElementById("lastname").value;
	var email     = document.getElementById("email").value;
	var phone     = document.getElementById("phone").value;
	var age       = document.getElementById("age").value;
	sessionStorage.firstname = firstname;
	sessionStorage.lastname  = lastname;
	sessionStorage.email     = email;
	sessionStorage.phone     = phone;
	sessionStorage.age       = age;

	// var highschool = document.getElementById("highschool").checked;
	// var university = document.getElementById("university").checked;
	// var working = document.getElementById("working").checked;
	// var retired = document.getElementById("retired").checked;

	// if (highschool == true){
	// 	sessionStorage.occupation = document.getElementById("highschool").value;
	// }
	// if (university == true){
	// 	sessionStorage.occupation =document.getElementById("university").value;
	// }
	// if (working == true){
	// 	sessionStorage.occupation = document.getElementById("working").value;
	// }
	// if (retired == true){
	// 	sessionStorage.occupation = document.getElementById("retired").value;
	// }

	var occupationArray = document.getElementById("radio_occupation").getElementsByTagName("input");
	// var i =0;
	// while (i < occupationArray.length) {
	// 	if (occupationArray[i].checked == true) {
	// 		sessionStorage.occupation = occupationArray[i].value;
	// 	}
	// 	i+=1
	// }
	for (var i=0; i < occupationArray.length; i++) {
		if(occupationArray[i].checked == true){
			sessionStorage.occupation = occupationArray[i].value;
		}
	}
	var logic = document.getElementById("logic").checked
	var python = document.getElementById("python").checked
	var web = document.getElementById("web").checked
	var game = document.getElementById("game").checked
	var data = document.getElementById("data").checked
	var ai = document.getElementById("ai").checked
	sessionStorage.logic = logic
	sessionStorage.python = python
	sessionStorage.web = web
	sessionStorage.game = game
	sessionStorage.data = data
	sessionStorage.ai = ai

	var payment = document.getElementById("payment").value;
	sessionStorage.payment = payment;

	error_msg =""
	if (firstname.match("^[A-Z a-z]{1,30}$") == null){
		error_msg += "First name has to contain only charaters and between 1 or 30 characters<br>";
	}
	if (firstname.match("^[A-Z a-z]{1,30}$") == null){
		error_msg += "First name has to contain only charaters and between 1 or 30 characters<br>";
	}
	if (email.match("^[A-Za-z]*@[a-z.A-Z]*$") == null){
		error_msg += "Email has to @<br>";
	}
	if (phone.match("^((/+84)|0)[0-9]{9}$") == null){
		error_msg += "Phone number has to start with +84 or 0 and 10 digits<br>"
	}
	if (age.match("^^(([0-9])|([0-9][0-9])|([1][0-4][0-9])|(150))$") == null){
		error_msg += "Age has to to a number less than 150<br>";
	}
	if (sessionStorage.occupation == "highschool")
		if (parseInt(age) >18){
		error_msg += "If highschool then age need to be less than or equal to 18<br>";
		}
	if (error_msg == ""){
		return true
	}
	else{
		document.getElementById("error").innerHTML = error_msg
		return false
	}
}
function prefillData(){
	if (sessionStorage.firstname != null){
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value  = sessionStorage.lastname;
		document.getElementById("email").value     = sessionStorage.email;
		document.getElementById("phone").value	   = sessionStorage.phone;	
		document.getElementById("age").value	   = sessionStorage.age;
		// if(sessionStorage.occupation == "highschool"){
		// 	document.getElementById("highschool").checked = true;
		// }
		// if(sessionStorage.occupation == "university"){
		// 	document.getElementById("university").checked = true;
		// }
		// if(sessionStorage.occupation == "working"){
		// 	document.getElementById("working").checked = true;
		// }
		// if(sessionStorage.occupation == "retired"){
		// 	document.getElementById("retired").checked = true;
		// }
		switch(sessionStorage.occupation){
			case "highschool":
				document.getElementById("highschool").checked = true;
				break;
			case "university":
				document.getElementById("university").checked = true;
				break;
			case "working":
				document.getElementById("working").checked = true;
				break;
			case "retired":
				document.getElementById("retired").checked = true;
				break;
		}
		if (sessionStorage.logic == "true") {
			document.getElementById("logic").checked = true;
		} 
		if (sessionStorage.data == "true") {
			document.getElementById("data").checked = true;
		} 
		if (sessionStorage.game == "true") {
			document.getElementById("game").checked = true;
		} 
		if (sessionStorage.ai == "true") {
			document.getElementById("ai").checked = true;
		} 
		if (sessionStorage.web == "true") {
			document.getElementById("web").checked = true;
		} 
		if (sessionStorage.python == "true") {
			document.getElementById("python").checked = true;
		} 
		document.getElementById("payment").value = sessionStorage.payment;
	}	
}
function init(){
	var regForm = document.getElementById("registerForm");
 	regForm.onsubmit = validate;
 	prefillData();
}

window.onload = init;