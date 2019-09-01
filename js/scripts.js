var binaryResult = 0;

var binaryDecimal = function(string) {
  binaryResult = parseInt(string, 2);
  return binaryResult;
}



$(document).ready(function(){
	$("form#convert").submit(function(event){

  	userString = $("input#userInput").val();

    console.log(userString);

    binaryDecimal(userString);



    $("p#binaryOutput").text("Binary '" + userString + "' equals '" + binaryResult +"' decimal");

  	event.preventDefault();
  });
});
