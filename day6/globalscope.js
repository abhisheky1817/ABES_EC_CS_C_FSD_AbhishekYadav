var a = 20;
let b = 21;
const c = 23;

console.log("globalscope");
console.log("value of a in globalscope: ",a);
console.log("value of b in globalscope: ",b);
console.log("value of c in globalscope: ",c);

function callvalue(a,b,c){
    console.log("value of a inside function: ",a);
 console.log("value of a  inside  function: ",b);
console.log("value of a  inside function: ",c);
}

callvalue(a,b,c);
