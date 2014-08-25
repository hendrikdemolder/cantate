// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('qko9H7l6NJG7HJMaPKoV-Q');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"",
        "to":[{"email":"hendrik.demolder@gmail.com"}],
        "subject": "Koor informatie aanvraag",
        "text": ""
    }
};

function sendTheMail(naam, emailaddress, telefoonnummer, bericht,  formmodal) {
    params.message.from_email = emailaddress;
    params.message.text = 'Ik ' + naam  + ' had graag meer informatie ontvangen contacteer mij op het volgende emailaddress ' + emailaddress
    params.message.text = params.message.text + '\n' + 'Telefoonnummer: ' + telefoonnummer + '\nExtra: ' + bericht 
    m.messages.send(params, function(res) {
         $(formmodal).modal('hide');
        return true;
    }, function(err) {
        return false;
    });
}
