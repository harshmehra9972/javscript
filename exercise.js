// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

// solve 
// let courseName ='web devleopment -The complete guide';
// let coursePrice =39;
// let corseGoals=['Learn devleopment', 'because a web devleoper','Have fun'];

// ===================================================================================================
// 2) Output ("alert") the three variable values
// solve
// alert(courseName)
// alert(coursePrice)
// alert(corseGoals)
// ===================================================================================================

// 3) Try "grouping" the three variables together and still output their values thereafter

// sovle

let onlineCourse = {
    name : 'web devleopment -The complete guide',
    price : 39,
    goals : ['Learn devleopment', 'because a web devleoper','Have fun'],
}

// alert(onlineCourse.name);
// alert(onlineCourse.price );
// alert(onlineCourse.goals);
// ===================================================================================================
// 4) Also output the second element in your "main goals" variable

// solve

 alert(onlineCourse.goals[1])
// ===================================================================================================

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

// solve 

function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}
// ====================================================================================================

 // 6) Execute your custom command from (5) and output ("alert") the result
let firstgoal = getListItem (onlineCourse.goals,0);
alert(firstgoal);









































