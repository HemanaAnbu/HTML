// let greet =function(){
//     document.write("goodmornging");

// };


// let greetings=greet();
// greet();
// greetings();
// function greet(){
//     document.write("<br/>goodmornings");
// };



// function add(a,b){
//     return a+b;
// }
// let sum =(x,y) =>{
//     return x+y;
// };

// //to check whether the given number is odd or even
// let isodd =(n)=>n%2==1;

// let greet =() =>alert ('thank you');


// document.write(add(10,20));
// document.write("</br>",sum(100,200));
// document.write("</br>",isodd(10));
// greet();

//arraymethod

const namelist= ["hemana","kaviya","nhkj","ghh"];
namelist.push("hjskjsdkj");
let deletedelement =namelist.pop();
let de1=namelist.shift(); //removing the first element
namelist.unshift("nikitha");   ///inserting the element

document.write ("deleted elemnt;",deletedelement);
document.write ("deleted elemnt;",de1);
namelist.sort();   //assending order sort
namelist.reverse(); //decendinfg order
for (let name of namelist){
    document.write("</br>",name);
}
let numlist=[11,23,45,2,5,43,324,234];
// numlist.sort( compare); //callback
// arrow function as the call back function
// numlist.sort((x,y)=> x-y);

let sqrlist = numlist.map(data => data*data)
let evenlist = numlist.filter((data)=> data%2==0);

/for (let data of evenlist) document.write("</br>",data);
// /for (let data of sqrlist) document.write("</br>",data);
// for (let data of numlist) document.write("</br>",data);

//callback function

function compare(x,y){
    return y-x;
}
