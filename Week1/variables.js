// console.log("All Around the World");

// console.log("All Around the world".charAt(7).toUpperCase());

//  console.log("All Around the world".charAt(7));

// let i = 10;
// i = i + 2;
// console.log(i);

// let i = 10;
// i += 2;
// console.log(i);

// let favouriteDrink = "coffee";

// // console.log(favouriteDrink);
// console.log("My favouite drink is " + favouriteDrink);

// let name = "Olly"
// let age = 30;
// let favDrink = "coffee"

// age = 50;
// favDrink = "rum";

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// let name = "Charlie";
// let age = 45;
// let favColour = "blue";

// name = "Tom"
// age = 32
// favColour = "pink"

// console.log(`Hi, my name is ${name}, I love the colour ${favColour} and I'm ${age} years old.`)

// let breakfast = "wheetabix"
// let lunch = "pasta"
// let diner = "stew"

// breakfast = "sausages"
// lunch = "salad"
// diner = "risotto"

// // console.log( `Today I will be eating ${breakfast}, ${lunch} and ${diner}.`)
// console.log(`Tomorrow my plan is to eat ${breakfast}. ${lunch} and ${diner}.`)

// // const birthday = new Date("July 27, 1983 03:30:00");
// let birthday = new Date("12/3/91")
// let today = Date.now(birthday);

// console.log((today/3600000)/24);

// const oneDay = 24 * 60 * 60 * 1000
// const today = new Date(2022, 05, 10);
// const birthday = new Date(1991, 12, 03)

// let diffDays = Math.round(Math.abs(birthday - today)/(oneDay));
// console.log(diffDays);


// let cross = "  X  ";
// let nought = "  O  ";
// let blank = "     ";

// let row = [
//     `${cross} | ${nought} | ${blank}`
//     `-------------------------------`
//     `${cross} | ${cross} | ${blank}`
//     `-------------------------------`
//     `${nought} | ${blank} | ${blank}`


//     for (let i = 0; i < row.length; i++){
//         console.log(row[i]);
//         if(i < row.length -1){
//             console.log('-----------')
//         }
//     }

let cross = "X";
let nought = "O";
let blank = " ";


let row = [
       `   |   |   \n ${cross} | ${nought} | ${blank}  \n   |   |   `,
       `   |   |   \n ${cross} | ${cross} | ${blank}  \n   |   |   `,
       `   |   |   \n ${nought} | ${blank} | ${blank}  \n   |   |   `,
]
        for (let i = 0; i < row.length; i++){
        console.log(row[i]);
        if(i < row.length -1){
            console.log('-----------')
        }
    }