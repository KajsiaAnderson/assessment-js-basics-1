///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let acres = []

for(let i = 0; i<7; i++){
acres.push((fujiAcres[i] + galaAcres[i] + pinkAcres[i]))
}


let totalAcres = 0
for(let i = 0; i<7; i++){
    totalAcres += acres[i]
}

console.log('Total acres:', totalAcres)




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let numberOfDays = 21
let averageDailyAcres = (totalAcres / numberOfDays) 

console.log('The average number of acres picked per day:', averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
let i = 0
while(i < 1){
    if(acresLeft > 0){
        (days += 1);
        console.log((acresLeft - averageDailyAcres))
    }
    i++
}



console.log('Days:',days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []
let sum = []

for(let i = 0; i<7; i++){
    fujiTons.push(6.5 / fujiAcres[i])
}
console.log(fujiTons)

for(let i = 0; i<7; i++){
    galaTons.push(6.5 / galaAcres[i])
}
console.log(galaTons)

for(let i = 0; i<7; i++){
    pinkTons.push(6.5 / pinkAcres[i])
}
console.log(pinkTons)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(let i = 0; i<7; i++){
    fujiPounds += fujiTons[i]
}
console.log('Fuji Pounds:', fujiPounds * 2000)

for(let i = 0; i<7; i++){
    galaPounds += galaTons[i]
}
console.log('Gala Pounds:', galaPounds * 2000)

for(let i = 0; i<7; i++){
    pinkPounds += pinkTons[i]
}
console.log('Pink Pounds:', pinkPounds * 2000)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * 2000) * .89
let galaProfit = (galaPounds * 2000) * .64
let pinkProfit = (pinkPounds * 2000) * .55

console.log('Fuji profit:', fujiProfit)
console.log('Gala profit:', galaProfit)
console.log('Pink profit:', pinkProfit)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = (fujiProfit + galaProfit + pinkProfit)

console.log('Total Profit:', totalProfit)

// comments: I added up all the profit variables using the addition math operator.