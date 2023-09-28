//function Calculate roots
        
function calculate (){
        
    //value of a

    a=parseFloat(document.getElementById("a").value);

//if a == 0

if(a==0){

    document.getElementById("solution").innerHTML="a must not be 0";

return;

}

//values of b and c

b=parseFloat(document.getElementById("b").value);

c=parseFloat(document.getElementById("c").value);

//finding descriminant

descriminant=(b*b)-(4*a*c);

result="";

//if descriminant is negative, no roots

if(descriminant<0){

    result="No real roots";

}else if(descriminant==0){

    //if descriminant is 0, then there is only one root

    root=(-b)/(2*a);

result="Solution x = "+root+" (Single root)";

}else{

    //if descriminant>0, there are two distinct roots

    root1=(-b+Math.sqrt(descriminant))/(2*a);

root2=(-b-Math.sqrt(descriminant))/(2*a);

result="Solution x = "+root1+" and x = "+root2+" (Two roots)";

}

//result

document.getElementById("result").innerHTML=result;

}
