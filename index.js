//prime number

let n=13
let count=0
for(let i=1;i<=13;i++){
  if(n%i==0){count++}
}
if(count==1){console.log("it is Prime number")}
else {console.log("it is not a Prime number")}

//Palindrome

let str="racecar"
let t=false
for(let i=0;i<=str.length;i++){
  if(str[i]==str[str.length-1-i]){
    t=true
  }
}
if(t==true){console.log("its Palindrome")}
else{console.log("its not a Palindrome")}