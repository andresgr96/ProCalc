// backend logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var exponent = function(number1, number2) {
  return number1 ** number2 ;
};
// front end logic

$(document).ready(function() {
  $(".btn").click(function(){
    var arithmetic = $(this).attr("id");
    var number1 = $("input#number1").val();
    var number2 = $("input#number2").val();
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    if(arithmetic === "plus"){
      $(".output").text(add(n1,n2));
    }
     else if(arithmetic === "minus"){
      $(".output").text(subtract(n1,n2));
    }
    else if(arithmetic === "times"){
      $(".output").text(multiply(n1,n2));
    }
    else if(arithmetic === "exponent"){
      $(".output").text(exponent(n1,n2));
    }
    else {
      $(".output").text(divide(n1,n2));
    }
  });
});


// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));


// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(subtract(number1, number2));
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(multiply(number1, number2));
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(divide(number1, number2));



// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault();
//     var person1Input = $("input#person1").val();
//     var person2Input = $("input#person2").val();
//     var animalInput= $("input#animal").val();
//     var exclamationInput = $("input#exclamation").val();
//     var verbInput = $("input#verb").val();
//     var nounInput = $("input#noun").val();
//     var spellInput = $("input#spell").val();
//     var rapInput = $("input#rap").val();
//     var introRapperInput = $("input#intro-rapper").val();
//     var introWizardInput = $("input#intro-wizard").val();
//
//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);
//     $(".spell").text(spellInput);
//     $(".rap").text(rapInput);
//     $(".intro-rapper").text(introRapperInput);
//     $(".intro-wizard").text(introWizardInput);
//
//
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });
