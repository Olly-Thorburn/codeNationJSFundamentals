// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");

// }

// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp (7,3);
// console.log(addUp(2,5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + " F");

// const factorial = (n) => {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }

// console.log(factorial(33));


// include TWO parameters and a running order count updated when the function is called

// let orderCount = 0;

// const takeOrder = (topping, crust) => {
//     console.log(` Order number: ${orderCount} Pizza with ${topping} and ${crust}`);
//     orderCount++
// }

// takeOrder("pineapple", "ham"); 
// takeOrder("pepperoni", "ham");
// takeOrder("vegetarian");

// create a cash machine that dispenses cash IF your pin number is correct 
// and your balance is equal to, or more than, the amount you're trying
// to withdraw


let actualPinNum = "4444";
let amount = 30;
let balance = 100;

const cashWithdrawal = (pinNum, amount) => {
    
    if (actualPinNum == pinNum && balance >= amount) {
        let newBalance = balance - amount;
        console.log (`Withdrawing £ ${amount}, your remaining balance is £ ${newBalance}.`);
    }
    else if (actualPinNum == pinNum && balance < amount) {
        console.log("no available funds");   
    }
    else {
        console.log("incorrect pin, no withdrawal available");
    }
}

cashWithdrawal("4444", "30");
cashWithdrawal("444", "30");
cashWithdrawal("4444", "3000");
