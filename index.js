//prime number

let n=13
let count=0
for(let i=1;i<=13;i++){
  if(n%i==0){
count++;
}
}
if(count==2){
console.log("it is Prime number")
}
else {
console.log("it is not a Prime number")
}

//Palindrome
let str = "racecar";
let bag = "";
for(let i = str.length-1; i>=0; i--){
  bag =bag+str[i];
}
(bag ==str)?console.log("It's a Palindrome."):console.log("Not a Palindrome");
