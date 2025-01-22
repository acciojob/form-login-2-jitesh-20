//your JS code here. If required.

function displayFormInfo(){
	let firstName=document.getElementById("firstname").value
let lastName=document.getElementById("lastname").value
let phone=document.getElementById("phone").value
let email=document.getElementById("emailId").value
	let alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`;
	alert(alertMessage)
}
