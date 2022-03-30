function start()   // onclick event for button 
{
const startingSeconds = 10;  // declare starting Point
let time = startingSeconds;   
const countdown1=document.getElementById('countDown');   // run seconds by id

setInterval(updateCountdown,1000);  // set interval to updateCountdown every second

function updateCountdown()
{
var seconds = Math.floor(time)

if (seconds < 0) seconds ='0';  // condition for stop countdown at 0
if(seconds==0) seconds ="Blast Off"; // condition to show "Blast off" instead off "0"

countdown1.innerHTML=`${seconds}`;  // store value in countdown1

time--; // decrement of time by 1
}
}  
