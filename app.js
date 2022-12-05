
let btn=document.querySelector(".btn");
btn.addEventListener("click",binaryConvertor)

function binaryConvertor(){

    let decNum=0;
    let binaryNum=document.getElementById("binary").value;
    let a=binaryNum.toString();   //converting value to string
    b=a.split("");                // separating the digits
    let binary=true;                //set flag binary to true
   
    // check for valid binary num

    b.forEach(element => {
        if(!(element==0 || element==1)){
            binary=false;
        }
    });

    if(binary==false){
        document.querySelector(".result").textContent= binaryNum + " is not Valid binary number";
    }

    else{

        b=b.reverse();                  //reverse the array --> make last element having 0 index
        b.forEach((element,index) => {

            decNum = decNum + (element*(Math.pow(2,index))) ;

        });

        document.querySelector(".result").textContent= "Decimal Number : " + decNum;
    }
};
