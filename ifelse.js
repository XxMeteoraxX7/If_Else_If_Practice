
// Hour
// If hour is between 6:00 and 12:00: Good Morning!
// If it is between 12:00 and 18:00: Good Afternoon!
//Otherwise: Good Evening!

let hour = 23;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good Afternoon!');
else if (hour >=24)
    console.log('Sorry you entered an incorrect time. Please check the time and try again!')
else
    console.log('Good Evening!');



// if (condition) {
//     one or more statements, if only one no statement curly brackets needed
// }
// else if (anotherCondition) {
//     one or more statements, if only one no statement curly brackets needed
// }
// else if (yetAnotherCondition) {
//     one or more statements, if only one no statement curly brackets needed
// }
// else {
//     one or more statements, if only one no statement curly brackets needed
// }