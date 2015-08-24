console.log("Chapter 1 prac");

//NaN test
console.log(0/0);

//Escaping
var text = "Today is a \tsunny day";   // \t as a tab
var text1 = "Today is a \nsunny day";  // \n as a new line
console.log(text + "\n" + text1);

var text3 = "A new line character can be written like \"\\n\".";
console.log(text3);

//typeof operator
console.log("Type of 4.5 is " + typeof 4.5);
console.log("Type of alphabet x is " + typeof "x");

//Only one value in JS which is not equal to itself
console.log(NaN == NaN);

//Ternary Operators
console.log(true ? "It is true" : "It is false");
console.log(false ? "It is true" : "It is false");

//Type Coercion
console.log(8 * null); //JS converts null to 0
console.log("5" - 1); //JS converts string 5 to number 5
console.log("5" + 1); //JS concatenates 1 to string 5
console.log("five" * 2); //JS cannot convert five to number 5
console.log(false == 0); //JS matches false to 0
console.log(null == undefined); //JS returns true
console.log(null == 0); //JS returns true
