// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array




// 1. 

// const string1: string = "apple"
// const string2: string = "orange"
// console.log(string1 === string2);
// console.log(string1 !== string2)

// 2. 
// const mixedCaseString: string = "HelloEric"
// console.log(mixedCaseString.toLowerCase() ==="helloeric")

//3.
// const num1:number = 10
// const num2:number = 5
// console.log(num1 === num2)
// console.log(num1 !== num2)
// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 >= num2)
// console.log(num1 <= num2)

// 4.
// const conditionl: boolean = true
// const condition2:boolean = false
// console.log(conditionl && condition2)
// console.log(conditionl || condition2) 

// 5.
const fruits: string[] = ["apple","mango","banana","orange"]
console.log(fruits.includes("apple"))
console.log(fruits.includes("Apple"))

