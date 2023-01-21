var a= document.querySelector("#p")
// var num;
// var num1;
// var k ;

function am(){
   a.innerHTML=a.innerHTML.slice(0,-1);
}

function am1(){
    a.innerHTML="";
 }

 function mod(){
   //  k="%";
   //  num=parseInt(a.value);
    a.innerHTML+="%";
   //  setTimeout(() => {
   //      a.innerHTML=" "
   //  }, 700);
 }

 function sum(){
   //  k="+";
   //  num=parseInt(a.value);
    a.innerHTML+="+";
   //  setTimeout(() => {
   //      a.innerHTML=""
   //  }, 700);
 }

 function a1(){
    a.innerHTML+= 1;
 }

 function a2(){
    a.innerHTML+= 2;
 }

 function a3(){
    a.innerHTML+=3;
 }

 function sub(){
   //  k="-";
   //  num=parseInt(a.value);
    a.innerHTML+="-";
   //  setTimeout(() => {
   //      a.innerHTML=" "
   //  }, 700);
 }

 function a4(){
    a.innerHTML+=4;
 }

 function a5(){
    a.innerHTML+=5;
 }

 function a6(){
    a.innerHTML+=6;
 }

 function multi(){
   //  k="X";
   //  num=parseInt(a.value);
    a.innerHTML+="*";
   //  setTimeout(() => {
   //      a.innerHTML=""
   //  }, 700);
 }

 function a7(){
    a.innerHTML+=7;
 }

 function a8(){
    a.innerHTML+=8;
 }

 function a9(){
    a.innerHTML+=9;
 }

 function divi(){
   //  k="/";
   //  num=parseInt(a.value);
    a.innerHTML+="/";
   //  setTimeout(() => {
   //      a.innerHTML=""
   //  }, 700);
 }

 function a0(){
    a.innerHTML+=0;
 }

 function dot(){
    a.innerHTML+=".";
 }

 function equal(){
   //  num1=parseInt(a.value);
   //  a.innerHTML+="=";
   //  switch(k){
   //      case"+":
   //          result=num+num1;
   //          break;
   //       case"-":
   //          result=num-num1;
   //          break;
   //       case"X":
   //          result=num*num1;
   //          break;
   //       case"/":
   //          result=num/num1;
   //          break;
   //       case"%":
   //          result=num%num1;
   //          break;
   //      default:
   //          alert("Wrong!");
   //          break;
   //  }
   //  setTimeout(() => {
   //      a.innerHTML="";
   //  }, 700);

   //  setTimeout(() => {
   //      a.innerHTML= result;
   //  },700);

   a.innerHTML=eval(a.innerHTML);
 }


