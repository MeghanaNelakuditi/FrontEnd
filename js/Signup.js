function validateForm() {
	console.log("Validation started..");
	var errors = "";
	
	var fname = document.getElementById("fname").value;
	if(fname == '' || fname == undefined) {
		errors = errors + "Please Enter First Name.<br>";
	}
	
	var lname = document.getElementById("lname").value;
	if(lname == '' || lname == undefined) {
		errors = errors + "Please Enter Last Name.<br>";
	}
	
	var dob = document.getElementById("dob").value;
	if(dob == '' || dob == undefined) {
		errors = errors + "Please Enter Date Of Birth.<br>";
	}
	
	var email = document.getElementById("email").value;
	if(email == '' || email == undefined) {
		errors = errors + "Please Enter Email Id.<br>";
	} else {
		var emailIdFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(emailIdFormat)) {
			errors = errors + "Please Enter Valid Email Id.<br>";
		}
	}
	
	var phone = document.getElementById("phone").value;
	if(phone == '' || phone == undefined) {
		errors = errors + "Please Enter Phone Number.<br>";
	} else {
		var phoneNoFormat = /^\d{10}$/;
		if(!phone.match(phoneNoFormat)) {
			errors = errors + "Please Enter Valid 10 Digit Phone Number.<br>";
		}
	}
	
	var female = document.getElementById("female").checked;
	var male = document.getElementById("male").checked;
	if((female == '' || female == undefined) && (male == '' || male == undefined)) {
		errors = errors + "Please Select Gender.<br>";
	}
	
	var cloths = document.getElementById("cloths").checked; 
	var electronics = document.getElementById("electronics").checked; 
	var books = document.getElementById("books").checked; 
	if( (cloths == '' || cloths == undefined) && 
		(electronics == '' || electronics == undefined) &&
		(books == '' || books == undefined)
	) {
		errors = errors + "Please Select Atleast one hobby.<br>";
	}
	
		var country = document.getElementById("country").value;
		if(country == '' || country == undefined) {
			errors = errors + "Please Select your Home Country.<br>";
		}
		
		var password = document.getElementById("password").value;
		if(password == '' || password == undefined) {
			errors = errors + "Please Enter Password.<br>";
		}
		
		var confirmPassword = document.getElementById("confirmPassword").value;
		if(confirmPassword == '' || confirmPassword == undefined) {
		errors = errors + "Please Enter Confirm Password.<br>";
	}
	
	if(password != '' && password != undefined 
	  && confirmPassword != '' && confirmPassword != undefined) {
		if(password != confirmPassword) {
				errors = errors + "Password and Confirm Passwords are not same.<br>";
			}
		}
		
		var shippingAddress = document.getElementById("shippingAddress").value;
		if(shippingAddress == '' || shippingAddress == undefined) {
			errors = errors + "Please Enter Shipping Address.<br>";
		}
		
		document.getElementById("errors").innerHTML = errors;
		console.log("Validation ended..");
		
		if(errors == "") {
			var successMessage = "Customer Signed Up Successfully...";
			alert(successMessage);
			document.getElementById("successMessage").innerHTML = successMessage;
			clearAllTheFields();
		}
}

function confirmClearFields() {
	if (confirm("Are you sure you want to delete all field values?")) {
        clearAllTheFields();
    } else {
		//All field values remains same..
	}
}

function clearAllTheFields() {
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("dob").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("female").checked = false;
	document.getElementById("male").checked = false;
	document.getElementById("cloths").checked = false;
	document.getElementById("electronics").checked = false;
	document.getElementById("books").checked = false;
	document.getElementById("country").value = "";
	document.getElementById("password").value = "";
	document.getElementById("confirmPassword").value = "";
	document.getElementById("shippingAddress").value = "";
}