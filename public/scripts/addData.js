// This function will store the form data locally

function onSubmit() {

    var contactData = [];
    var fName = document.getElementById("first").value;
    var lName = document.getElementById("last").value;
    var adDre = document.getElementById("address").value;
    var pho = document.getElementById("phone").value;
    var eMail = document.getElementById("email").value;
    var webSite = document.getElementById("website").value;
    var comm = document.getElementById("comments").value;


    var stuObj = {first:fName, last:lName, address:adDre, phone:pho, email:eMail, website:webSite, comments:comm};
    // contactData.push(stuObj);
    
    // console.log(contactData);
    
    localStorage.contactRecord = JSON.stringify(stuObj);
    // console.log(localStorage.contactRecord);
    
    var jsonString = localStorage.getItem("contactRecord");

    var retrieveObject = JSON.parse(jsonString);
    // console.log(retrieveObject.email);
    // console.log(retrieveObject.fName);

    // fs.writeFileSync('contact.json', retrieveObject, finished);

    function finished(err) {
        console.log('success');
    }
    return retrieveObject.email;
}