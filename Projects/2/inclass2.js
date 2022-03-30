	// JAVAsCRIPT FOR THE WEBSITE:

// declarations for the variables.

 let meters = document.getElementById("meters");
 let feets = document.getElementById("feets");
 let celsius = document.getElementById("celsius");
 let fahrenheit = document.getElementById("fahrenheit");

// function for convert metere to feet.
function mtof()
{
  let result =(parseFloat(meters.value))* 3.28084;
  feets.value = parseFloat(result.toFixed(2));    
}

// function for convert feet to metere.
function ftom()
{
  let result =(parseFloat(feets.value))/3.28084;
  meters.value = parseFloat(result.toFixed(2));    
  consolelog(result);
}
   
 // function for convert celsius to Fahrenheit.
 function celToFah()
 {
	let result = ( parseFloat(celsius.value)* 9/5) + 32;
    fahrenheit.value=parseFloat(result.toFixed(2));
}

// function for convert Fahrenheit to celsius. 
function fahToCel()
{
	let result1 = (parseFloat(fahrenheit.value)- 32 ) * 5/9;  
	celsius.value = parseFloat(result1.toFixed(2));	
    consolelog(result1); 
}