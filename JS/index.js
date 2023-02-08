//var x=5;
//var y=10;
//var sum= x* y;

//document.write(sum);

//var name="alexa" ,age = 20, istaken = true;

//document.write(namee + "" + age + "br>");
//document.write(isTaken);

//const PI = 3.45;
//console.log(a);

//var a= "Let's have a cup of coffee.";
//var b = 'he said "hello and left."';
//var c = 'We\'ll never give up.';


//document.write(a);
//document.write("<br>");
//document.write(b);
//document.write("<br>");
//document.write(c);

//document.write("<br>");
//document.write("<br>");

//var a = 25;
//var b = 80.5;
//var c = 4.25e6;
//var d = 4.25e6;

//document.write(a);
//document.write("<br>");
//document.write(b);
//document.write("<br>");
//document.write(c);
//document.write("<br>");
//document.write(d);

//document.write("<br>");
//document.write("<br>");

//var alexa = "First Name: Alexandra,  Middle Name: Forel, Surname: Valderas";


//document.write(alexa);

var totalpricedisplay = function(){
    var total_priceBeans = document.getElementById("Beans").value *40;
    var total_priceStrange = document.getElementById("Strange").value *30;
    var total_pricePeso = total_priceBeans+total_priceStrange;
    return alert("Total Price Of Item in Peso: Php" + total_pricePeso);
}