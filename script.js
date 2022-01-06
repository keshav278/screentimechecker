let t=document.querySelector('input[type="time"]');
let myTime;

function timer(ms) {
     return new Promise(res => setTimeout(res, ms));
}

function setValue(){
      myTime=t;
      document.getElementById("maintext").innerHTML="Set your onscreen time";

}
let x=document.getElementById("setvalue");
x.addEventListener("click",setValue);
let y=document.getElementById("startstop");
y.addEventListener("click",startstop);
function startstop(){
     let tString=myTime.value;
     const str=tString;
     let hrs=Number(tString.slice(0,2));
     let mins=Number(tString.slice(3,5));
     let secs=Number(tString.slice(6,9));
     let totalsec=secs+mins*60+hrs*3600;
     async function load(){    
     for(let i=0;i<=totalsec;i++)
     { 
        let hr=String(hrs);
        let min=String(mins);
        let sec=String(secs);
        if(secs<10)
         sec="0"+sec;
        if(mins<10)
         min="0"+min;
        if(hrs<10)
         hr="0"+hr;

        document.getElementById("duration").value=hr+":"+min+":"+sec;
        if(hrs===0&&mins===0&&secs===0)
         {document.getElementById("maintext").innerHTML="Take a break";
         var audio = new Audio('sample-3s.mp3');
         audio.play();
         
         let x=Math.floor(Math.random()*256);
         let y=Math.floor(Math.random()*256);
         let z=Math.floor(Math.random()*256);
         document.body.style.backgroundColor=`rgb(${x},${y},${z})`;
         document.getElementById("setvalue").style.backgroundColor=`rgb(${(255-x)/2+x},${(255-y)/2+y},${(255-z)/2+z})`;
         document.getElementById("reset").style.backgroundColor=`rgb(${(255-x)/2+x},${(255-y)/2+y},${(255-z)/2+z})`;
         document.getElementById("startstop").style.backgroundColor=`rgb(${(255-x)/2+x},${(255-y)/2+y},${(255-z)/2+z})`;
         document.getElementById("duration").style.backgroundColor=`rgb(${(255-x)/2+x},${(255-y)/2+y},${(255-z)/2+z})`;
         setTimeout(function(){
              document.getElementById("maintext").innerHTML="Set your onscreen time";
         },5000);
         }
        secs--;
        
        if(secs<=0&&mins>0)
          {
               mins--;
               secs=59;
          }
        else if(secs<=0&&mins===0&&hrs>0)
         {
              mins=59;
              secs=59;
              hrs--;
         }  
        
                  
        /*secs--;
          if(secs===0)
           break;
          if(secs<10) 
           document.getElementById("duration").value=`${hrs}:${mins}:0${secs}`;
          else
           document.getElementById("duration").value=`${hrs}:${mins}:${secs}`;*/
          await timer(1000);
        
     }
     }
     load(); 
}
let z=document.getElementById("reset");
z.addEventListener("click",function() {
           document.getElementById("duration").value="00:20:00";
           setValue();
});