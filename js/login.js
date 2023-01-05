var customers = [];
var ajay = {
	"firstName" : 'Ajay',    
	"lastName" : 'Kumar',
	"dateOfBirth" : '02/11/1992',
	"email" : 'bhattarajaykumar@gmail.com',
	"phone" : '3612965256',
	"gender" : "Male",
	"country" : 'India',
	"password" : 'Ajay'
};
var vijay = {
	"firstName" : 'Vijay',    
	"lastName" : 'Kumar',
	"dateOfBirth" : '02/11/1992',
	"email" : 'vijaykumar@gmail.com',
	"phone" : '3612965257',
	"gender" : "Male",
	"country" : 'Nepal',
	"password" : 'vijay'
};
customers.push(ajay);
customers.push(vijay);
console.log(customers);
function validateLoginForm(){
	console.log("Validation started..");
	var errors = "";
	
	var email = document.getElementById("email").value;
	if(email == '' || email == undefined) {
		errors = errors + "Please Enter Email Id.<br>";
	} else {
		var emailIdFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(emailIdFormat)) {
			errors = errors + "Please Enter Valid Email Id.<br>";
		}
	}
	
	var password = document.getElementById("password").value;
	if(password == '' || password == undefined) {
		errors = errors + "Please Enter Password.<br>";
	}
	
	var isValidUser = false;
	if(email != '' && email != undefined && 
		password != '' && password != undefined) {
			for (let customer in customers) {
				console.log(customer)
				if(customers[customer].email == email && customers[customer].password == password) {
					if(!isValidUser) {
						isValidUser = true;
					}
				}
				
			}
		}
	
	if(!isValidUser) {
		errors = errors + "Invalid Credentials.<br>";
	}
	
	document.getElementById("errors").innerHTML = errors;
	console.log("Validation ended..");
	
	if(errors == "") {
		var successMessage = "Customer Logged Successfully...";
		alert(successMessage);
		document.getElementById("successMessage").innerHTML = successMessage;
		clearAllTheFields();
		return true;
	} else {
		return false;
	}
	
	
	
}

function clearAllTheFields() {
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
}