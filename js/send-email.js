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

function sendTheMail_brunch(naam, emailaddress, telefoonnummer, nrmax3, nrmax12, nrmin12, uuraankomst ,  formmodal, errormodal) {
    params_brunch.message.from_email = emailaddress;
    params_brunch.message.text = 'Ik ' + naam  + ' had mij graag ingeschreven voor de brunch. ' + ' emailaddress: ' + emailaddress + ' aantal -3: ' + nrmax3 + ' aantal -11: ' + nrmax12 +' volwassenen :' + nrmin12 +' uur aankomst: ' + uuraankomst
    params_success.message.to = []
    params_success.message.to.push({"email":emailaddress})
    params_success.message.subject = "Inschrijving Brunch Cantate"
    params_success.message.text = "We hebben uw inschrijving goed ontvangen! \n We proberen zo snel mogelijk te reageren op uw inschrijving:"
    params_success.message.text = params_success.message.text + "\nInschrijvings Overzicht"
    params_success.message.text = params_success.message.text + "\n-3 Jaar: " + nrmax3
    params_success.message.text = params_success.message.text + "\n-11 Jaar: " + nrmax12
    params_success.message.text = params_success.message.text + "\n+11 Jaar: " + nrmin12
    params_success.message.text = params_success.message.text + "\nMogelijk aankomst uur: " + uuraankomst
    params_success.message.text = params_success.message.text + '\n Uw inschrijving wordt definitief van zodra u het gepaste bedrag hebt gestort op het rekeningnummer BE49 0016 9744 8971 van Cantate met de vermelding "Concert + uw Naam"'
    params_success.message.text = params_success.message.text + "\nNeem contact via info.cantate@gmail.com bij mogelijk problemen!"
    m.messages.send(params_brunch, function(res) {
         m.messages.send(params_success, function(res) {
              $(formmodal).modal('hide');
              return true;
         }, function(err) {
           $(formmodal).modal('hide');
           $(errormodal).modal('show');
         })
    }, function(err) {
      $(formmodal).modal('hide');
      $(errormodal).modal('show');
    });

}


function sendTheMail_optreden(naam, emailaddress, telefoonnummer, aantal, aantal_min_18, bericht, formmodal, errormodal) {
    params_optreden.message.from_email = emailaddress;
    params_optreden.message.text = 'Ik ' + naam  + ' had graag ' + aantal_min_18 + " -18 Jaar en " +  aantal + ' + "18 Jaar kaarten ontvangen contacteer mij op het volgende emailaddress ' + emailaddress
    params_optreden.message.text = params_optreden.message.text + '\n' + 'Telefoonnummer: ' + telefoonnummer + '\nExtra: ' + bericht
    params_success.message.to = []
    params_success.message.to.push({"email":emailaddress})
    params_success.message.text = "We hebben uw vraag goed ontvangen! \n We proberen zo snel mogelijk te reageren op je vraag. De volgende kaarten heeft u aangevraagd:"
    params_success.message.text = params_success.message.text + "\n-18 Jaar: " + aantal_min_18
    params_success.message.text = params_success.message.text + "\n+ 18 Jaar: " + aantal
    params_success.message.text = params_success.message.text + '\n Uw inschrijving wordt definitief van zodra u het gepaste bedrag hebt gestort op het rekeningnummer BE49 0016 9744 8971 van Cantate met de vermelding "Concert + uw Naam"'
    params_success.message.subject = "Kaarten Concert Via Crucis & Requiem"
    m.messages.send(params_optreden, function(res) {
         m.messages.send(params_success, function(res) {
              $(formmodal).modal('hide');
              return true;
         }, function(err) {
           $(formmodal).modal('hide');
           $(errormodal).modal('show');
         })
    }, function(err) {
      $(formmodal).modal('hide');
      $(errormodal).modal('show');
    });
}


