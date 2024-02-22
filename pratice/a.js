// // alert("helo world");
// // document.write("harsh")


// let z;
// z = 3;
// let y =10;
// //  alert(z+y)

// // addition opreater
//  let a;
//  a = z*y ;
// console.log(a);

// // moduler opreater
// a = y % z;
// console.log(a)


// // +opreater and - opreater

// x =10
// //  x--;
// //  console.log(x)


// x++;
// console.log(x)
// ============================================================

// // data type 

// var b="he'lo"
// console.log(b)


// var c='hel"lo'
// console.log(c)


// var b="he/lo"
// console.log(b)

// ============================================================\\
// //Object //

// let man = {usrename:"harsh", age:19};
// console.log(man)

// ========================================================

// let d =typeof 9
// console.log(d)

// let e = 9
// console.log(typeof e)
// // print variable and  string

// let f = "vishwjeet";
// alert("helo " + f)

// let g = "vishwjeet singh";
// alert(`helo ${g} `)

// =========================================================
// if else condition 

// let agee =13 ;

// if(agee>=18){
//     alert("you can vote")

// }
// else{
//     alert("you cannot vote")
// }
// ========================================================
// && condition

// let agee =18;
// let voterCard="yes";
// if(agee>=18 && voterCard == "yes" ){
//     alert("you can vote");

// }
// else{
//     alert("you cannot vote");
// }
// ==========================================================
// &&,not equel condition 

// let agee =18;
// let voterCard="no";
// if(agee>=18 && voterCard == "yes" ){
//     alert("you can vote");

// }
// else if (agee>=18 && voterCard != "yes"){
//     alert("Get your voter id")
// }

// else{
//     alert("you cannot vote");
// }

// ================================================================


// let age =18;
// let voterCard ="yes";
// if(age>=18)
// {
//  if (age>=18 && voterCard=="yes"  )
//  {
//     alert("you can vote")
//  }   
//  else
//  {
//     alert("Get your voter id card")
//  }
// }
// else
// {
//     alert("you cannot vote")
// }
 
// let login =0 ;

// if(login==0){
//     document.write("Login")
// }
// else{
//     document.write("Logout")
// }
// =============================================================================

// temary opreater
//  let option = login == 1 ? "logout": "login";
//  document.write(option)
// =============================================================================
// nullish coalescins Opreater

// let user ;
// user="harsh"
// alert(user ?? "Guest User")
// ==============================================================================


// let input ;
// input="2"
// if(input === 1){
//     document.write("Continue...")
//  }else if(input === "y"){
//     document.write("Continue....")
// }
// else if(input === "yes"){
//     document.write("Continue....")
// }
// else if(input === 0){
//     document.write("End....")
// }else if(input === "n"){
//     document.write("End....")
// }else if(input === "no"){
//     document.write("End....")
// }
// else{
//     document.write("Wrong input")
// }
// ==================================================================================

// switch statment

let input ;
input=078;


switch (input) {
    case 1:
        document.write("Continue....")
        break;
        case "y":
            document.write("Continue....")
        break;
        case  "yes":
            document.write("Continue....")
        break;
        case 0:
            document.write("End....")
        break;
        case  "n":
            document.write("End....")
        break;
        case  "no":
            document.write("End....")
        break;
    default:
        document.write("Wrong Input")
        break;
}
