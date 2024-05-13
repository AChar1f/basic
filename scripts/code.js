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

function result() {
    let numb1 = document.querySelector('[numb1]').value 
    let operator  = document.
    querySelector('[operator]').value
    let numb2 = document.querySelector('[numb2]').value
    //Output reference
    let output = document.querySelector('[output]')
    output.textContent = eval(`${numb1} ${operator} ${numb2}`)
}