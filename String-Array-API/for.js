var a=1;
var time = true;
var b=5;
for(let i=0; i<3;i++){
  if (time){
    b++;
    a++;
    // time = false;
  } else {
    a++;
  }
}
console.log(a,b);