// This function will test if the users input for "email" is valid

function validEmail(form){
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (form.value.match(regex))
  {
    // var data = JSON.stringify(words, null, 2);
    // fs.writeFile('words.json', data, finished);

    // function finished(err) {
    //   console.log('all set.');
    // }

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
