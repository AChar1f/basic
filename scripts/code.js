//div has 2 types of content innerText and textContent to target the div we need to select the textContent. When using getById selector we need to make use of the innerText. (when using a div for display)

// when creating a variabel we need to make use of camelCase. Eg. let lastName 

// when creating a class we need to make use of class case. Eg class Employee

// when declaring a variable it must reflect the value it contains eg firstName the value of their first name.

// 'use strict' Forces the variable to be created in the correct manner.(Varaibles must be defined )

/* reserved words are words that must not be used to create variables, labels or function names:
        abstract	arguments	await*	boolean
        break	byte	case	catch
        char	class*	const*	continue
        debugger	default	delete	do
        double	else	enum*	eval
        export*	extends*	false	final
        finally	float	for	function
        goto	if	implements	import*
        in	instanceof	int	interface
        let*	long	native	new
        null	package	private	protected
        public	return	short	static
        super*	switch	synchronized	this
        throw	throws	transient	true
        try	typeof	var	void
        volatile	while	with	yield

        removed words from ES5/6:
                        abstract	boolean	byte	char
            double	final	float	goto
            int	long	native	short
            synchronized	throws	transient	volatile
*/

// an array(Denoted by []. This is a mutable.) allows us to store multiple values, even of different data types.

//We use an array to store a collection of data. Objects are used to store people, places and information.
//Objects are denoted by {} and after each value you input a comma.
// null falls under the onjects in data types. null is an value that can be assigned to a variable that has been declared.
// undefined means the varible has been declared but it hasnt been assigned.

// Arithmetic operators: +, - , *, % (modulus), /, ** (exponent), ++, --

//let numb1 = 2, numb2 = 4, numb3 = 5;

//console.log(numb1 + numb2)
//addition of the 2 numbers

//console.log(numb1 + numb2 * numb3)
//multiplication and division takes precedence over addition and subtraction.

//console.log(numb2 / numb1)
//division example

//console.log(numb3 % numb1)
//displays the remainder between two numbers in this case 5%2 where 2 goes twice into 5 leaving a remainder of 1.

//console.log(numb3 ** numb1)
//makes the equation into an exponent. (5^2=25)

// Assignment operators: =, += *=, /=, %=, etc..
//allows us to assign a value to a variable.

//numb2 += numb1
//console.log(numb2) shorthand for the one variable added to the other. Same as numb2 = numb2 + numb1
//numb2 *= numb1
//console.log(numb2) shorthand for the one variable multiplied to the other.

// Comparison operators: ==, <, >, <=, >=, !=, ===

//console.log(numb1 > numb2) Will result in a boolean and display false as 2 is not greater than 4.

//console.log(numb1 == numb2) will only check for the value not datatype. Eg: numb 1 = '2' and numb2 = '2' it will be true. (typeof)?
//console.log(numb1 === numb2) will check for the value and datatype. (instanceof)?


// Ternary operator: ? :
// Logical operators: &&, ||, !
//AND logic : T+T=T, T+F=F, F+F=F
//OR Logic: T+T=T, T+F=T, F+F=F

//console.log(numb2 == numb2 && numb1 < numb3) will result in true as 2 = 2 and both 2 and 4 individually are less than 5.

//Typeof operators: typeof and instanceof
//typeof checks the datatype
//instanceof checks for the class of the datatype

//console.log(typeof numb1) will return number.
//let myArr = new Array()
//myArr.push(5, 'Mint')
//let obj1 = new Number(12)  when creating an object, make use of 'new' (to make a class: in this case being Number).
//console.log(obj1 intanceof Array) will return false as they are not from the same class.
//console.log(obj1 instanceof Number) will return true as it holds the class of 'Number'.

//console.log(`Type of obj1: ${typeof obj1}`) checks the datatype of obj1

//Bitwise operators (Binary operators): &, |, ~(NOT), ^(XOR), <<(left shift), >>(right shift).
// &:  Use the AND logic and binary code where 0 is false and 1 is true
/*
console.log(2 & 3) will return 2 because of the equation below
       
         Apply AND logic
    2 = 0010  0 is false
    3 = 0011  1 is true
ans   = 0010
*/

// |:
/* consol.log(2 | 3)
    Apply OR logic
    2 = 0010  0 is false
    3 = 0011  1  is true
ans   = 0011

*/

// ~(NOT):
// ^(XOR):

/* 
    2 & 3 =
    2 = 0010
    3 = 0011
*/

/* Ternary operator:

let numb1 = new Number(12)
console.log(numb1 instanceof Number ? `${numb1} is an onject of Number` : `${numb1} is not an object of Number`) 
checks for the condition before the question mark. If true displays content after question mark. If false dislays content after colon.
*/


/* 
    Different methods to combine values in one line:
    
    let firstName = "Qaasiem"
    let lastName = "Harliem"

    console.log(firstName+ " " +lastName)
    console.log(firstName.concat(' ', lastName))
    console.log(`${firstName} ${lastName}`)
*/


/* Solution
let firstName = prompt('Enter your first name: ')
let lastName = prompt('Enter your last name: ')
let hours = prompt('Enter your hours worked: ')
let rate = prompt('Enter your pay rate: ')
let salary = hours * rate
console.log(` 
firstName: ${firstName} 
lastName: ${lastName} 
salary: Makes R${salary} a month`) */

/* Will return a string 
 let numb1 = prompt('Enter a number: ') 
 console.log(numb1)
 console.log(typeof numb1)
 */

/*  will return a number
let numb1 = +prompt('Enter a number: ') 
console.log(numb1)
console.log(typeof numb1)
*/

/* will bring 7 and 12 together and and show string instead of number
let numb1 = "7"
let numb2 = "12"
let addition = numb1 + numb2
console.log(addition)
console.log(typeof addition)
*/

/* will print the results of the numbers and the data type
let numb1 = 7
let numb2 = "12"
let addition = +numb1 + +numb2
console.log(addition)
console.log(typeof addition)*/

/* will return the result of the numbers combined with Joel and join the number with the string 'Joel' 
let result = 9 + 2 + "Joel"
console.log(result)
console.log(typeof result)
*/

 /*if you try to run the code on server (eg. node) it wont work and will throw an error to the line of the prompt
 let numb1 = prompt('Enter a number:')
console.log(numb1)
*/

/* will display the text from js to the element that corresponds to the id in html
document.getElementById("output").
innerText = "Hello There" 
*/

/* Updates the name variable to display the nickname
let name1 = "Mustafa"
let nickName = "Musta"
name1 = nickName
console.log(name1)
*/

/* Array Example
let names= ['Ismaaeel', 'Kyle', 'Imraan', 'Khanya']
console.log(names)
console.log(names[0]) //displays the first element in the array
console.log(names.length) //displays the length of the array
console.log(names[names.length - 1]) //displays the last  element.
console.log(names.at(-1)) //display last element (reverse order). Can scale Eg. -2/ -3 etc. (at is a method). Enables use of negative numbers.
console.log(names[-1]) //will display undefined.
console.log(typeof names)// displays the type array data type (object)
*/

/* Basic Calculation with output (Exercise)
function result() {
    let numb1 = document.querySelector('[numb1]').value 
    let operator  = document.querySelector('[operator]').value
    let numb2 = document.querySelector('[numb2]').value
    //Output reference
    let output = document.querySelector('[output]')
    output.textContent = eval(`${numb1} ${operator} ${numb2}`)
}
*/

/*Object Example
let person = {
    firstName: "Abdu",
    lastName: "Charif"
} 
//different ways to display the object.
console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
*/

let friends= [
    {
        firstName: "Mustafa",
        lastName: "Moerat"
    },
    {
        firstName: "Muhammad",
        lastName: "Rajah"
    },
    {
        firstName: "Usama",
        lastName: "Arend"
    },
    {
        firstName: "Uwais",
        lastName: "Arend",
    }
]
friends.push({
    firstName: "Qaasiem",
    lastName: "Harliem"
}) //puts this content at the end of the array.

console.log(friends)
console.table(friends) //displays array data in table format.