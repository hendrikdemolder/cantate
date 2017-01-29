// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key


// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"",
        "to":[{"email":"tinekeverlooy@hotmail.com"}],
        "subject": "Koor informatie aanvraag",
        "text": ""
    }
};

var params_brunch = {
    "message": {
        "from_email":"",
        "to":[{"email":"info.cantate@gmail.com"}],
        "subject": "Inschrijving Brunch",
        "text": ""
    }
};

var params_optreden= {
    "message": {
        "from_email":"",
        "to":[{"email":"info.cantate@gmail.com"}],
        "subject": "Bestellen kaarten",
        "text": ""
    }
};

var params_success= {
    "message": {
        "from_email":"info.cantate@gmail.com",
        "to":[],
        "text": "",
        "subject": ""
    }
};


function sendTheMail(naam, emailaddress, telefoonnummer, bericht,  formmodal, errormodal) {
  data = {}
  data['type']= 'information_mail'
  data['naam'] = naam
  data['emailaddress'] = emailaddress
  data['telefoonnummer'] = telefoonnummer
  data['bericht'] = bericht
  data['formmodal'] = formmodal
  data['errormodal'] = errormodal
  sendMail(data)

}

function sendbbqMail(naam, emailaddress, telefoonnummer, koorleden, nrmax12, nrmin12,formmodal, errormodal) {
  data = {}
  data['type'] = 'bbq_mail'
  data['naam'] = naam
  data['emailaddress'] = emailaddress
  data['telefoonnummer'] = telefoonnummer
  data['koorleden'] = koorleden
  data['nrmax12']  = nrmax12
  data['nrmin12']  = nrmin12
  data['formmodal'] = formmodal
  data['errormodal'] = errormodal
  sendMail(data)
}

function sendMail(data) {
  var params  = jQuery.param( data );
  $.ajax({
  dataType: 'json',
  url: 'https://script.google.com/macros/s/AKfycbwRu5RtHITor3Y4nMzaMQztYfiEKm8Gk7oRtHJCimLcEJJX4E72/exec?' + params,
  success: function() { $(data['formmodal']).modal('hide')},
  error: function(error, textStatus, errorThrown) {
    $(data['formmodal']).modal('hide')
    $(data['formmodal']).modal('show')}
});
}

//sendTheMail('Hendrik Demolder', 'hendrik.demolder@gmail.com', '0498430378', 'Ik zou graag meer informatie ontvangen')



function sendTheMail_brunch(naam, emailaddress, telefoonnummer, nrmax3, nrmax10, volwassenen, uuraankomst , formmodal, errormodal){

  data = {}
  data['type'] = 'brunch_mail'
  data['naam'] = naam
  data['emailaddress'] = emailaddress
  data['telefoonnummer'] = telefoonnummer
  data['nrmax3'] = nrmax3
  data['nrmax10']  = nrmax10
  data['volwassenen'] = volwassenen
  data['uuraankomst']  = uuraankomst
  data['formmodal'] = formmodal
  data['errormodal'] = errormodal
  console.log(data)
  sendMail(data)
}


function sendTheMail_optreden(naam, emailaddress, telefoonnummer, aantal, aantal_min_18, bericht,formmodal, errormodal) {
  data = {}
  data['type'] = 'optreden_mail'
  data['naam'] = naam
  data['emailaddress'] = emailaddress
  data['telefoonnummer'] = telefoonnummer
  data['aantal'] = aantal
  data['nrmin18']  = aantal_min_18
  data['bericht']  = bericht
  data['formmodal'] = formmodal
  data['errormodal'] = errormodal
  sendMail(data)
}
