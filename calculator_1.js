
var DISPLAY_MAX_LENGTH = 15;
var display_length = 0;
var operator = "";
var result = 0;

var flag = false;

var num1 = "";
var num2 = "";

document.getElementById("display").value = 0;

function input(number){
	
	if(flag == true){
		document.getElementById("display").value = 0
		flag = false;
	}
	
		var temp = document.getElementById("display").value;
		
		display_length = temp.length;
		
	
		if(display_length <= DISPLAY_MAX_LENGTH && flag == false){
			if(document.getElementById("display").value == 0){
				document.getElementById("display").value = number;
				//alert("The length is " + display_length);
			}else{
				document.getElementById("display").value += number;
				//alert("The length is " + display_length);
			}
			
		}
}

function add(){
	num1 = document.getElementById("display").value;
	//alert("The length is " + num1);
	document.getElementById("display").value = 0;
	operator = "+";
}

function sub(){
	num1 = document.getElementById("display").value;
	//alert("The length is " + num1);
	document.getElementById("display").value = 0;
	operator = "-";
}

function mul(){
	num1 = document.getElementById("display").value;
	//alert("The length is " + num1);
	document.getElementById("display").value = 0;
	operator = "*";
}

function div(){
	num1 = document.getElementById("display").value;
	//alert("The length is " + num1);
	document.getElementById("display").value = 0;
	operator = "/";
}

function equal(){
	num2 = document.getElementById("display").value
	//alert("The length is " + num2);
	
	switch(operator){
		case "+":
			result = addition(num1,num2);
			//alert("The length is " + result);
			document.getElementById("display").value = result;
			break;
		case "-":
			result = substraction(num1,num2);
			//alert("The length is " + result);
			document.getElementById("display").value = result;
			break;
		case "*":
			result = multiplication(num1,num2);
			//alert("The length is " + result);
			document.getElementById("display").value = result;
			break;
		case "/":
			result = division(num1,num2);
			//alert("The length is " + result);
			document.getElementById("display").value = result;
			break;
	}
	flag = true;
}







function addition(number1, number2){
	return (parseFloat(number1) + parseFloat(number2));
}

function substraction(number1, number2){
	return (parseFloat(number1) - parseFloat(number2));
}

function multiplication(number1, number2){
	return (parseFloat(number1) * parseFloat(number2));
}

function division(number1, number2){
	return (parseFloat(number1) / parseFloat(number2));
}

function clear_display(){
	document.getElementById("display").value = 0;
}

