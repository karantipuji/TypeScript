//String Declaration

let fruits:string[]=['Apple','Mango','Orange']
console.log(fruits[0])
console.log(fruits[1])
//console.log(10++)

//Tuple Declaration
var emp:[number,string]=[1,"sam"];
var e:[number,string]=[2,"ram"];
console.log(emp)
console.log(e)
let tup:[number,string][];
tup=[[1,"Pujitha"],[2,"Sirisha"]]
console.log(tup);

//enumerated types
enum pr {
    newsp="NewsPaper",
    newl="NewsLetter",
    newv="NewsWord"  
}
console.log(pr.newsp);
console.log(pr.newl);
console.log(pr.newv);

//Any Function
let a:any[]=['ram',14,23]
console.log(a)

//Functions
function sum(x:number,y:number):number{
    return x+y;
}
console.log(sum(2,3));

//Arrow Function
let mul=(x:number,y:number):number=>{
    return x*y;
}
console.log(mul(2,3));


//Function Overloading
function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:any,b:any):any{
    return a+b;
}
console.log(add("Hai ","Hello"));
console.log(add(2,3));
//console.log(add("Pujitha",2));

//Rest Parameters
function Greet(greet:string,...names:string[]):string{
    return greet+' '+names.join(',')+"!";
}
console.log("Hello","Elon","Musk");
console.log("Hi");


//Work Rest Parameters
/*function ga(...names:string[],g:string):string{
    return g+' '+names.join(',');
}
console.log("Hi","pujitha","sirisha");
console.log("Hello");*/