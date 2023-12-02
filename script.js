let userinp=0;
let rn = Math.floor(Math.random()*100);
let score=0;
let tries=0;
console.log(rn);



function submitvalue(){
    userinp=Number(document.querySelector("#userINP").value);
    console.log(userinp);
    check_guess();
}
function check_guess(){
    if (userinp<rn) {
        document.getElementById("disp").innerHTML=`${userinp} is Low Try Try Again`;
        console.log("too low");
        tries++;
        document.getElementById("tries").innerHTML=`${tries}`;
        document.getElementById("userINP").value='';
    }
    else if (userinp>rn){
        document.querySelector("#disp").innerHTML=`${userinp} is High Try Try Again`;
        console.log("too high");
        tries++;
        document.getElementById("tries").innerHTML=`${tries}`;
        document.getElementById("userINP").value='';
    }
    else if (rn==userinp){
        tries++;
        document.getElementById("tries").innerHTML=`${tries}`;
        document.getElementById("disp").style.color="Green";
        document.getElementById("disp").style.fontSize="2rem";
        document.getElementById("dispwin").style.color="Green";
        document.getElementById("dispwin").style.fontSize="2rem";
        document.querySelector("#disp").innerHTML="Congratulations you Win";
        console.log("win");
        document.getElementById("dispwin").innerHTML=`Tries = ${tries} Score = ${Math.floor((100/tries))}`;
        

    }
}
