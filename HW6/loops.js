
// 

const paddRight = (char, length) => s => {
  while(s.length < length) {
    s += char;
  }
  return s;
}


// const paddRight = (char, length) => s => {
//   for (let i = 0; s.length < length; ++i) {
//     s = s + char;
//   }

//   return s;
// }



const pad = paddRight("*", 10);

let s = "abcde";

console.log(pad(s), pad(s).length);
console.log(pad("asdfsadf"), pad("asdfsadf").length);


let n = 10;

for (let i = n; i >= 0; --i) {
  console.log(i);
}

let i = n;
while (i >= 0) {
  console.log(i);
  i--;
}

i = n;
while (i >= 0){
  console.log(i); 
  i--;
}
let n = 6;

// 1
// 22
// 333
// 4444
// 55555
// 666666

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += i;
  }
  console.log(str);
}
let o = "*";
while(o.length <= n){
  console.log(o);
  o += "*";
}
