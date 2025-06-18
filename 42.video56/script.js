// let a=3;
// let b=4;
// let c=5;
// console.log("a=", a, "b=", b, "c=", c);
// console.log("a+b-c=", a+b-c);
// console.log("a/b=", a/b);
// console.log("a*b=", a*b);
// console.log("a**b=", a**b);
// console.log("a % c=", a % c);

let a = prompt("Enter a numer:");
console.log("a=", a);
let b = prompt("Enter another number:");    
console.log("b=", b);
let c = prompt("Enter a third number:");
console.log("c=", c);

console.log("is a is equal to b?", a == b);
console.log("is a is equal to c?", a == c);

// if (a == b) {
// console.log("a is equal to b");
// }
// else{
//     console.log("a is not equal to b");
// }

// if(a<b && a>c){
//     console.log("a is less than b and greater than c");
// }

// if(a<b){
//     if(b<c){
//         console.log("c is greater than b and b is greater than a");
//     }
//     else if(b==c){
//         console.log("b is equal to c and greater than a");
//     }
// }
// else if(a>c){
//     if(b<c){
//         console.log("b is less than c and a is greater than c");
//     }
//     else if(b==c){
//         console.log("b is equal to c and a is greater than c");
//     }
// }
// else if(a == c){
//     if(b<c){
//         console.log("b is less than c and a is equal to c");
//     }
//     else if(b==c){
//         console.log("b is equal to c and a is equal to c");
//     }
// }
// else if(a==b){
//     if(b<c){
//         console.log("b is less than c and a is equal to b");
//     }
//     else if(b==c){
//         console.log("b is equal to c and a is equal to b");
//     }
// }

for(let i = 0; i < 10; i++) {
    console.log("i=", i);
}
let object = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in object) {
        const element = object[key];
        
    }