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
    
    console.log(contactData);


    localStorage.contactRecord = JSON.stringify(contactData);
    
    
    var jsonString = localStorage.getItem(localStorage.contactRecord.email);
    
    var retrieveObject = JSON.parse(jsonString);
    console.log(retrieveObject);
    // console.log(retrieveObject.fName);
    console.log("Hello World!");
}


    // localStorage.contactRecord = JSON.stringify(contactData);



    // const stuTo = JSON.stringify(contactData);
    // console.log(typeof stuTo);

    // localStorage.setItem('contactData', stuObj);

    // const toJSON = JSON.parse(stuTo);

    // console.log(typeof toJSON);
    // console.log(toJSON.email);

    
//     var jsonString = .getItem("eMail");
    
//     var retrieveObject = JSON.parse(jsonString);
    // console.log(JSON.parse(contactData).first[0].first););
//     console.log(retrieveObject.email);
//     console.log("Hello World!");
// console.log(JSON.parse(contactRecord).first[0].items)


// }



