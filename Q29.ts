// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!






const favoriteFruits:string []=["banana","apple","orange","mango"]
if(favoriteFruits.includes("banana")){
    console.log("you like bananas")
} 
if(favoriteFruits.includes("apple")){
    console.log("you like apples")
}
if(favoriteFruits.includes("orange")){
    console.log("you likes oranges")
}else{
    console.log("orange are not in your list")
}
if(favoriteFruits.includes("strawberry")){
    console.log("you like strawberry")
}
if(favoriteFruits.includes("grapes")){
    console.log("you like grapes")
}else{
    console.log("grapes are not in list")
}


