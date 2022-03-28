var FNAME;
var LNAME;
var MAIL;
var SUBJECT;
var COMMENTS;

function QueryButton(){
	document.getElementById("QueryForm").innerHTML = "<h1>Query Form</h1><form action=\"mailto:seyed.20200758@iit.ac.lk\" method=\"POST\" name=\"EmailForm\">"+
													"<fieldset id=\"QIN\" class=\"QueryIn\">"+
													"<legend>Your Details</legend>"+
													"<label class=\"lab\" for=\"Fname\">First Name* :</label>"+
													"<input type=\"text\" name=\"Fname\" id=\"Fname\" placeholder=\"Enter first name\" class=\"QuInputs\" /><br>"+
													"<label class=\"lab\" for=\"Lname\">Last Name* :</label>"+
													"<input type=\"text\" name=\"Lname\" id=\"Lname\" placeholder=\"Enter last name\" class=\"QuInputs\" /><br>"+
													"<label class=\"lab\" for=\"Mail\">Email* :</label>"+
													"<input type=\"email\" name=\"Mail\" id=\"Mail\" placeholder=\"Enter E-mail address\" class=\"QuInputs\" /><br>"+
													"<label class=\"lab\" for=\"Subject\">Subject* :</label>"+
													"<input type=\"text\" name=\"Subject\" id=\"Subject\" placeholder=\"Summary of issue/request\" class=\"QuInputs\" /><br>"+
													"<label class=\"lab\" for=\"comments\">Details :</label>"+
													"<textarea name=\"comments\" id=\"comments\" rows=\"7\" > </textarea><br><br>"+
													"<div class=\"THbtn\">"+
													"<input type=\"button\" name=\"send\" id=\"send\" value=\"Send\" onClick=\"SendButton()\" />"+
													"</div></fieldset></form>";
}
	
function EditButton(){
	document.getElementById("QIN").innerHTML = 	"<legend>Edit</legend>"+
												"<label class=\"lab\" for=\"Fname\">First Name* :</label>"+
												"<input type=\"text\" name=\"Fname\" id=\"Fname\" value=\""+FNAME+"\" class=\"QuInputs\" /><br>"+
												"<label class=\"lab\" for=\"Lname\">Last Name* :</label>"+
												"<input type=\"text\" name=\"Lname\" id=\"Lname\" value=\""+LNAME+"\" class=\"QuInputs\" /><br>"+
												"<label class=\"lab\" for=\"Mail\">Email* :</label>"+
												"<input type=\"email\" name=\"Mail\" id=\"Mail\" value=\""+MAIL+"\" class=\"QuInputs\" /><br>"+
												"<label class=\"lab\" for=\"Subject\">Subject* :</label>"+
												"<input type=\"text\" name=\"Subject\" id=\"Subject\" value=\""+SUBJECT+"\" class=\"QuInputs\" /><br>"+
												"<label class=\"lab\" for=\"comments\">Details :</label>"+
												"<textarea name=\"comments\" id=\"comments\" rows=\"7\" >"+COMMENTS+"</textarea><br><br>"+
												"<div class=\"THbtn\">"+
												"<input type=\"button\" name=\"send\" id=\"send\" value=\"Send\" onClick=\"SendButton()\" />"+
												"</div>";
}
	
function SendButton(){
	FNAME = document.getElementById("Fname").value;
	LNAME = document.getElementById("Lname").value;
	MAIL = document.getElementById("Mail").value;
	SUBJECT = document.getElementById("Subject").value;
	COMMENTS = document.getElementById("comments").value;
	if (FNAME=="" || LNAME=="" || MAIL=="" || SUBJECT=="" || COMMENTS=="")
	{
		alert("The fields marked * can not be empty");
		QueryButton();
	}
	else
	{
		document.getElementById("QIN").innerHTML = 	"<legend>Display</legend>"+
													"<label>Name : "+FNAME+" "+LNAME+"</label><br><br>"+
													"<label>Email : </label>"+
													"<a href=\"mailto:"+MAIL+"\">"+MAIL+"</a><br><br>"+
													"<label>Subject : "+SUBJECT+"</label><br><br>"+
													"<label>Details : </label>"+
													"<p style=\"display: inline-block;\">"+COMMENTS+"</p><br>"+
													"<div class=\"THbtn\">"+
													"<input type=\"button\" name=\"edit\" id=\"edit\" value=\"Edit\" onClick=\"EditButton()\" />"+
													"<button type=\"submit\" value=\"Submit\" style=\"margin-left: 10px;\">Confirm</button>"+
													"</div>";
	}
}
	