$(function() {
    function validateForm() {
      let password = $("#password").val();
      let confirmPassword = $("#confirmPassword").val();
      let isValid = true;
  
      
      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        isValid = false; 
      }
      return isValid;
    }
  
    $("form").submit(function(event) {
      if (validateForm()) {
        
        alert("Form submitted successfully!");
      } else {
        event.preventDefault();
      }
    });
  });


  