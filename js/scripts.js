//business logic


$(document).ready(function() {
  $("form#button").submit(function(event){

    var name = $("input#name").val();
    var age = $("input#age").val();

    var total = 0;
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();

    if (q1 === "true"){
      total += 1;
    }
    if (q2 === "true"){
      total += 1;
    }
    if (q3 === "true"){
      total += 1;
    }
    if (q4 === "true"){
      total += 1;
    }
    if (q5 === "true"){
      total += 1;
    }

    if (age && name) {
      if (total === 5) {
        alert("Thanks " + name + "! Your score is: " + total + "/5 Bernies. You are a communist.")
      } else if (total === 4) {
        alert("Thanks " + name + "! Your score is: " + total + "/5 Bernies. You are a liberal.")
      } else if (total === 3) {
        alert("Thanks " + name + "! Your score is: " + total + "/5 Bernies. You are a moderate.")
      } else if (total === 2) {
        alert("Thanks " + name + "! Your score is: " + total + "/5 Bernies. You are a conservative.")
      } else if (total <= 1) {
        alert("Thanks " + name + "! Your score is: " + total + "/5 Bernies. You are Ron Paul.")
      }
      $(".form-group").removeClass("has-error")
      } else {
      $(".form-group").addClass("has-error")
      alert("Please enter all your info")
      }


    event.preventDefault();

  });
});
