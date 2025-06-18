console.log("kar load");

let a=59;
var b=60;
const c=61;

console.log( "a=" ,a,"b=", b,"c=",c);

{
   let a= 62;
   var b= 63;
    // c= 64; This will throw an error because 'c' is a constant
    console.log("a=" ,a,"b=", b,"c=",c);
}
console.log("a=" ,a,"b=", b,"c=",c); // b will be 63 due to var hoisting, but a will be 59
// 'c' remains 61 as it is a constant and not redefined

let key={
    name: "kar",
    age: 25,
    city: "New York"
}
console.log("key=", key);
for (let k in key) {
    console.log(k, ":", key[k]);
}