// This function will test if the users input for "phone" is valid

function validNumber(form){

  // Phone number formatting
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-\.]?\d{3}[\s\-\.]?\d{4}$/;

  if (form.value.match(regex)) {
      return true;
    }
    else {
      alert("Not a valid phone number");
      // form.elements["phone"].reset();
      // form.elements["phone"].focus();
      return false;
    }
} // end validNumber
