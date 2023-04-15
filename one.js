//String Declaration
var fruits = ['Apple', 'Mango', 'Orange'];
console.log(fruits[0]);
console.log(fruits[1]);
//console.log(10++)
//Tuple Declaration
var emp = [1, "sam"];
var e = [2, "ram"];
console.log(emp);
console.log(e);
var tup;
tup = [[1, "Pujitha"], [2, "Sirisha"]];
console.log(tup);
//enumerated types
var pr;
(function (pr) {
    pr["newsp"] = "NewsPaper";
    pr["newl"] = "NewsLetter";
    pr["newv"] = "NewsWord";
})(pr || (pr = {}));
console.log(pr.newsp);
console.log(pr.newl);
console.log(pr.newv);
//Any Function
var a = ['ram', 14, 23];
console.log(a);
//Functions
function sum(x, y) {
    return x + y;
}
console.log(sum(2, 3));
//Arrow Function
var mul = function (x, y) {
    return x * y;
};
console.log(mul(2, 3));
function add(a, b) {
    return a + b;
}
console.log(add("Hai ", "Hello"));
console.log(add(2, 3));
//console.log(add("Pujitha",2));
//Rest Parameters
function Greet(greet) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greet + ' ' + names.join(',') + "!";
}
console.log("Hello", "Elon", "Musk");
console.log("Hi");
//Work Rest Parameters
/*function ga(...names:string[],g:string):string{
    return g+' '+names.join(',');
}
console.log("Hi","pujitha","sirisha");
console.log("Hello");*/ 
