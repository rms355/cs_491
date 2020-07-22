var contactData = [];

function onSubmit() {
    var fName = document.getElementById("first").value;
    var lName = document.getElementById("last").value;
    var adDre = document.getElementById("address").value;
    var pho = document.getElementById("phone").value;
    var eMail = document.getElementById("email").value;
    var webSite = document.getElementById("website").value;
    var comm = document.getElementById("comments").value;

    var stuObj = {first:fName, last:lName, address:adDre, phone:pho, email:eMail, website:webSite, comments:comm};
    contactData.push(stuObj);

    localStorage.contactRecord = JSON.stringify(contactData);

    console.log(contactData);
    console.log("Hello World!");
}