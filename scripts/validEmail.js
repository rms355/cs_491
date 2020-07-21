// This function will test if the users input for "email" is valid

function validEmail(form){
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (form.value.match(regex))
  {
    return true;
  }
  else
  {
    alert("Not a valid e-mail");
    form.elements["email"].reset();
    // form.elements["email"].focus();
    return false;
  }
                             }  // end validEmail
