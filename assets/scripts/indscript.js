var marks=0;
var sumry=[];
var userAnsrs =[];
var correctAnswrs = ['Eric Cantona','Roy Keane and Paul Scholes','No. 10 & No. 24','Ole Gunnar Solskjaer','Bryan Robson','Michael Owen','1910','74,000','20 times','Christiano Ronaldo'];

function getRadioValue( radioArray ) {
    var i;
    for ( i = 0; i < radioArray.length; i++ ) {
       if ( radioArray[ i ].checked ) { 
          return radioArray[ i ].value;
       }
    }
    return "";
}
     
 function scoreMarks(frm){
 
    //  var q1 = getRadioValue(frm.q1);
     userAnsrs.push(getRadioValue(frm.q1));

    //  var q2 = getRadioValue(frm.q2);
     userAnsrs.push(getRadioValue(frm.q2));

    //  var q3 = getRadioValue(frm.q3);
     userAnsrs.push(getRadioValue(frm.q3));

    //  var q4 = getRadioValue(frm.q4);
     userAnsrs.push(getRadioValue(frm.q4));

    //  var q5 = getRadioValue(frm.q5);
     userAnsrs.push(getRadioValue(frm.q5));

    //  var q6 = getRadioValue(frm.q6);
     userAnsrs.push(getRadioValue(frm.q6));

    //  var q7 = getRadioValue(frm.q7);
     userAnsrs.push(getRadioValue(frm.q7));

    //  var q8 = getRadioValue(frm.q8);
     userAnsrs.push(getRadioValue(frm.q8));

    //  var q9 = getRadioValue(frm.q9);
     userAnsrs.push(getRadioValue(frm.q9));
     
    //  var q10 = getRadioValue(frm.q10);    
     userAnsrs.push(getRadioValue(frm.q10));
    
     var i;
     for ( i = 0; i < correctAnswrs.length; i++ ) {
        if ( correctAnswrs[i]==userAnsrs[i] ) { 
            marks=marks+2;
            sumry.push((i+1)+")"+"Your Answer is correct for this question "+"<br>");
        }else{
            marks=marks-1;
            sumry.push((i+1)+")"+"Your Answer is wrong for this question "+"<br>");
        }
     }
     if (marks>13) {
         document.getElementById("allCont").style.backgroundColor="green";
     } else {
        document.getElementById("allCont").style.backgroundColor="red";
     }
    //  alert(sumry)
    //  document.getElementById("resultsheet").innerHTML= "<br> Your final score is "+marks+"<br><br>"+"This is your summary"+"<br><br>"+sumry;
    printResult();

     marks=0;
     userAnsrs=[];
     sumry=[];
     
 }

var timeleft2 = 60;
var finishTimer2 = setInterval(function(){
  if(timeleft2 <= 0){
    clearInterval(finishTimer2);
    // function
  } else {
  }
  timeleft2 -= 1;
}, 1000);

function printResult(){
    document.getElementById("resultsheet").innerHTML= "<p class='resultStyle'><br> Your final score is "+marks+"<br><br>You took "+(60-timeleft2)+" seconds to finish <br><br>This is your summary"+"<br><br>"+sumry+"</p>";
}