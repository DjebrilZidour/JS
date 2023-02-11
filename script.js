// var A = 12;
// var B = 7;
// var C = 12 % 7;
// var DeviceName = "Samsung s 10";
// var version = "2";

// console.log(DeviceName);

// function sum() {
//     var C = A + B;
//     console.log(C)
// }

// function ExecuteLoop() {
//     for (var i = 0; i <= 5; i = i + 2) { // 0 2 4
//         console.log(i)
//     }
// }
// sum();
// ExecuteLoop();

// function divide(numb1, numb2) {

//     if (typeof numb1 === 'undefined' || typeof numb2 === 'undefined') {
//         console.log("sorry but you need to input a valid number");
//         return;
//     }
//     else if(typeof numb1 === 'number' && typeof numb2 === 'number'){

//     var result = numb1 / numb2;
//     console.log("the answer is",result)
//     }else{
//         console.log("sorry")
//     }


// }

// divide(5, )

// var ERROR_NOT_FOUND = "please enter n1 && n2 && operation";
// var ERROR_NUMBER_TYPE = "please enter n1 and n2 as a number and the operation as str";
// var ERROR_INVALID_OPERATION = "Invalid Operation"
// function calculator(n1, operation, n2) {
//     if (typeof n1 === 'undefined' || typeof n2 === 'undefined' || typeof operation === 'undefined') {
//         console.log(ERROR_NOT_FOUND)
//         return;
//     }

//     if (typeof n1 === 'number' || typeof n2 === 'number' || typeof operation === 'string') {
//         if (operation.length > 1) {
//             console.log(ERROR_INVALID_OPERATION)
//             return;
//         }
//         var result; //undefind
//         if (operation === "+") {
//             result = n1 + n2
//         } else if (operation === "-") {
//             result = n1 - n2
//         } else if (operation === "*") {
//             result = n1 * n2
//         } else if () {
//             result = n1 / n2;
//         }

//         console.log(result)

//     } else {
//         console.log(ERROR_NUMBER_TYPE)
//     }
// }

// calculator(12, "", 12)



function power(number, power) {
    if (number == undefined || number === undefined) {
        console.log("please enter number & power")
        return;
    }
    if (power == 0) {
        result = 1;
        console.log(result);
        return;
       
    }
    var result = number;
    for (var i = 1; i < power; i++) {
        result = result * number;
    }
    console.log(result);
}

power(5, 0)
