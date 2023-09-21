// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood="Pizza"
alert(favoriteFood)


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVariable="String"
alert(newVariable[1])




// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNumbers(num1,num2,num3){
    solution=(num1/num2)*num3
    alert (solution)
}
threeNumbers(1,1,3)



// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNumber(x){
    console.log(Math.cbrt(x).toFixed(2))
}

oneNumber(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month){
    let monthLowerCase=month.toLowerCase()
    if (monthLowerCase==="march" || monthLowerCase==="april" || monthLowerCase==="may"){
        console.log("YAY!")
    }else{
        console.log("Booo!")
    }
}

checkForSummer("March")


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFives(n){
    for(let i=1;i<=n;i++){
        if(i%5 !==0){
            console.log(i)
        }
    }
}


skipFives(13)