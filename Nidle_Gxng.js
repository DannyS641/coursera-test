// var age = 2022
// var dob = prompt("Your DOB?")
// var year = age - dob
// if (dob < age) {
//     console.log("You're " + year + ", you can drive!")
// }
// else if (year < 18) {
//     console.log("You can't drive!")
// }

var i = prompt("Your DOB?")
var dob = 2022 - i
while (i < 2022 ){
    if (dob < 18){
        console.log ("You're " + dob + ", you can't drive!")
        break
    }
    else if (dob >= 18){
        console.log ("You're " + dob + ", you can drive.")
        break
    } i++
}

// for (var i = -10; i < 20; i++) {console.log (i);}

// numberTwo = "Twoooooooooo";
// console.log (numberTwo);


// var even = 10;
// while (even < 40) {console.log (even);
// even += 2}


// numThree = "three";
// console.log (numThree);


// var odd = 301;
// while (odd <= 333) {console.log (odd);
// odd += 2}

// numFour = "Four";
// console.log(numFour);

// // var div = 50;
// // if (div % 5 == 0 && div % 3 == 0) 
// // {console.log(div);
// // div++};

// i=0
// while (i < 51){
//     if (i % 5 == 0 && i % 3 == 0 )
//     {console.log(i)}
//     i++
// }

// function isEven (num){
//     return num % 2=== 0
// }


// function factorial (num){
//     return num * -
// }



// var i = 1;
// while (i <= 100){
//     if (i % 3 == 0 && i % 5 != 0){
//         console.log("fizz")
//     }
//     else if (i % 5 == 0 && i % 5 != 0){
//         console.log("Buzz")
//     }
//     else if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }
//     else(console.log(i))
//     i++
// }    