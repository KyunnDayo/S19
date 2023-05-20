console.log('hello world');
//var prompt = require('prompt-sync')();

/*promptsync used for testing in gitbash
use command [npm install prompt-sync] in bash when implementing promptsync
*/	

let role;
let username;
let password;
let letterGrade;
this.role = role;
this.userName = username;
this.password = password;

function login(){
	let role = prompt("Enter User Role: ");
	role = role.toLowerCase();
	let userName = prompt("Enter Username: ");
	let password = prompt("Enter Password: ");


	if(role == "admin"){
		alert("Welcome back to the class portal, Admin!");
		gradeInput(userName)
	}
	else if(role == "teacher"){
		alert("Thank you for loggin in, teacher!")
		gradeInput(userName)
	}
	else if(role == "student"){
		alert("Welcome to the class portal, Student!")
		gradeInput(userName)
	}
	else{
		alert("Role out of Range!")
		login()
	}
};


function gradeInput(userName){
	this.role = role

	switch(true){
	case (this.role == "admin"):
		console.log("")
		break;
	case (this.role == "teacher"):
		alert("Professor Evaluation Calculator: ")
		break;
	case (this.role == "student"):
		alert("Average Grade Calculator: ")
		break;
	}

	let userIn1 = parseInt(prompt("Enter First Score: "));
	let userIn2 = parseInt(prompt("Enter Second Score: "));
	let userIn3 = parseInt(prompt("Enter Third Score: "));
	let userIn4 = parseInt(prompt("Enter Fourth Score: "));

	scoreAvg(userIn1, userIn2, userIn3, userIn4, userName);
};

function scoreAvg(score1, score2, score3, score4,userName){
	let avg = (score1+score2+score3+score4)/4

	if (Math.round(avg) <= 74){
		console.log("Hello "+ userName +", your average is "+ Math.round(avg)+" ,The letter equivalent is F ")
		letterGrade = "F"
	}
	else if (Math.round(avg) >= 75 && Math.round(avg) <= 84){
		console.log("Hello, "+ userName +", Your average is "+ Math.round(avg)+" ,The Letter equivalent is C ")
		letterGrade = "C"
	}
	else if (Math.round(avg) >= 85 && Math.round(avg) <= 89){
		console.log("Hello, "+ userName +", Your average is "+ Math.round(avg)+" ,The Letter equivalent is B ")
		letterGrade = "B"
	}
	else if (Math.round(avg) >=90 && Math.round(avg) <= 95){
		console.log("Hello, "+ userName +", Your average is "+ Math.round(avg)+" ,The Letter equivalent is A ")
		letterGrade = "A"
	}
	else{
		console.log("Hello, "+ userName +", Your average is "+ Math.round(avg)+" ,The Letter equivalent is S+ ")
		letterGrade = "S"
	};



	alert("Hello "+ userName +", your average is "+ avg +" ,The letter equivalent is " + letterGrade)
	console.log("Status: System fully Operational\n Author:KDeaar")
};



login()
