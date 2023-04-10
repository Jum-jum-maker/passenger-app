// // document.getElementById("count-el").innerText=5

// // 1. Create two variables, myAge and humanDogRatio
// // 2. Multiply the two together and store the result in myDogAge 
// // 3. Log myDogAge to the console

// let myAge = 25
// let humanDogRatio=7
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge)

// // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// // Decrease it down to 25, and then finally increase it to 70
// // Console.log the value after each step

// let bonusPoints =50
// console.log(bonusPoints)

// bonusPoints =bonusPoints +50
// console.log(bonusPoints)

// bonusPoints =bonusPoints -50
// console.log(bonusPoints)


// function increment(){
//     console.log("The button was clicked")
// }


let SaveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countStr= count + " - "

function increment() {
    count = count + 1
    countEl.textContent = count

}

function save() {
console.log(count)
countStr= count + " - "
SaveEl.textContent += countStr
console.log(count)
countEl.textContent = 0
count = 0

}

