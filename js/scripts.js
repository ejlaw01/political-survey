//business logic


$(document).ready(function() {
  $("form#button").submit(function(event){

    var name = $("input#name").val();
    var age = $("input#age").val();

    var total = 0;
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();

    if (q1 === "true"){
      total += 1;
    }
    if (q2 === "true"){
      total += 1;
    }

    if (age && name) {
      if (total > 1) {
        alert("Thanks " + name + "! Your score is: " + total + " You are a liberal.")
      } else if (total === 1) {
        alert("Thanks " + name + "! Your score is: " + total + " You are a moderate.")
      } else {
        alert("Thanks " + name + "! Your score is: " + total + " You are a conservative.")
      }
      $(".form-group").removeClass("has-error")
      } else {
      $(".form-group").addClass("has-error")
      alert("Please enter all your info")
      }


    event.preventDefault();

  });
});
