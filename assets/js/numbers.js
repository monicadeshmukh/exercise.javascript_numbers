function compute(expression) {
    // TODO - write method definition here
    var numbers = [], operations = [];

    numbers = expression.match(/\d+/g);  //store all numbers from the given string in numbers array. the regex is for getig numbers from the string.
    //operations = expression.match(/(+|-|*|//|%|>|<|)/g);	// or try [+\-*/.]
   // operations = expression.match(-+\*\/);
  	//operations = expression.match([+-\*\/]);
  	//operations = expression.match(+|\-|\*|\/);
  	var count = 1; //output = parseInt(numbers[0]);
  	var output = 0;
  	/************/
  	var op = "";	//added for testing
  	/*************/

  	for (var n = 0; n < expression.length; n++)
  		if (isNaN(expression[n]))
  			operations.push(expression[n]);

	//first do the * and /
	for (n = 0; n < operations.length; n++){
		// * and / operations take precedence
		if (operations[n] == "*") {
			numbers[n+1] = parseFloat(numbers[n]) * parseFloat(numbers[n+1]);
			numbers.splice(n,1);	//delete the corresponding operators on which we performed the multiplication
			operations.splice(n,1);
		}
		if (operations[n] == "/") {
			numbers[n+1] = parseFloat(numbers[n]) / parseFloat(numbers[n+1]);
			numbers.splice(n,1);	//delete the corresponding operators on which we performed the multiplication
			operations.splice(n,1);
		}
	}
	//then do + and -
	for (n = 0; n < operations.length; n++){
		// * and / operations take precedence
		if (operations[n] == "+") {
			numbers[n+1] = parseFloat(numbers[n]) + parseFloat(numbers[n+1]);
			numbers.splice(n,1);	//delete the corresponding operators on which we performed the multiplication
			operations.splice(n,1);
		}
		if (operations[n] == "-") {
			numbers[n+1] = parseFloat(numbers[n]) - parseFloat(numbers[n+1]);
			numbers.splice(n,1);	//delete the corresponding operators on which we performed the multiplication
			operations.splice(n,1);
		}
	}

  	/*		switch (expression[n] ){
  			case "+":
  				output = parseInt(output) +  parseInt(numbers[count++]);
  				break;
  			case "-":
  				output = parseInt(output) -  parseInt(numbers[count++]);
  				break;
  			case "*":
  				output = parseInt(output) *  parseInt(numbers[count++]);
  				break;
  			case "/":
  				output = parseInt(output) /  parseInt(numbers[count++]);
  				break;
  			}
  	}*/
  	
    
    //return (numbers + " " + op);
    //console.log(operations);
    return parseFloat(numbers[numbers.length-1]);
}