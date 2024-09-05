function result(){
    let name = prompt("ENTER THE NAME");
    let obt_Marks=document.getElementById("obt_Marks").value;
    let total_Marks=document.getElementById("total_Marks").value;
    let result= (obt_Marks / total_Marks)* 100;
    document.getElementById("result").innerHTML=(`Dear ${name} you got it ${result} `);

    if (obt_Marks>=1000){
        document.getElementById("Result2").innerHTML="Grade A+"
    }
    else if (obt_Marks>=950){
        document.getElementById("Result2").innerHTML="Grade A"
    }
    else  if (obt_Marks>=900){
        document.getElementById("Result2").innerHTML="Grade B+"
    }
    else  if (obt_Marks>=800){
        document.getElementById("Result2").innerHTML="Grade B"
    }
    else  if (obt_Marks>=700){
        document.getElementById("Result2").innerHTML="Grade C+"
    }
    else  if (obt_Marks>=650){
        document.getElementById("Result2").innerHTML="Grade C"
    }
    else  if (obt_Marks>=600){
        document.getElementById("Result2").innerHTML="Grade D+"
    }
    
    else  if (obt_Marks>=550){
        document.getElementById("Result2").innerHTML="Grade D"
    }
    else  if (obt_Marks>=500){
        document.getElementById("Result2").innerHTML="Grade E+"
    }
    else  if (obt_Marks>=450){
        document.getElementById("Result2").innerHTML="Grade E"
    }
    else  if (obt_Marks<=400){
        document.getElementById("Result2").innerHTML="Grade F"
    }
    else
    document.getElementById("Result2").innerHTML="Try Again"
    
    

}
    

