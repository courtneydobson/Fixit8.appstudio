//prompts user for his/her first and last name, and add the name to an array
let name = prompt('What is your first and last name?')
let nameSplit = name.split(" ")
let userName = nameSplit.join(" ")
let i = 0
let letterNumber = 0

//using a while loop to output each letter of the name
while (i < userName.length) {
  letterNumber = i + 1
  console.log(`Letter ${letterNumber} is: ${userName[i]}.`)
  i++
  }