
function sendMail(contactForm) {
    emailjs.send("service_n4lh7tm","template_llkcwdc", {
        "from_name": contactForm.name.value,
        "reply_to": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    // return false;  // To block from loading a new page
}