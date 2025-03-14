
function sendNotification() {
    // TO DO: Replace with actual emergency contact information
    const emergencyContacts = [
      { name: 'samanvita', phone: '8767874487', email: 'samrd2005@gmail.com' },
      { name: 'yourfriend', phone: '9876543210', email: 'samanvitard@gmail.com' }
    ];
  
     // Get the user's current location
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Create alert message with location
    const alertMessage = `Emergency! Notify ${emergencyContacts[0].name} at ${emergencyContacts[0].email} and ${emergencyContacts[1].name} at ${emergencyContacts[1].email}. Location: ${latitude}, ${longitude}`;
    alert(alertMessage);

    // Send email notifications to emergency contacts with location
    emergencyContacts.forEach((contact) => {
      const subject = 'Emergency Alert!';
      const body = `Emergency! ${contact.name} needs assistance. Location: ${latitude}, ${longitude}`;
      const mailToLink = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      window.open(mailToLink, '_blank');
    });
  });
}

// Get the panic button element
const panicButton = document.createElement('button');
panicButton.classList.add('panic-button');
panicButton.textContent = 'Panic Button';

// Add event listener to the panic button
panicButton.addEventListener('click', sendNotification);

// Add the panic button to the page
document.body.appendChild(panicButton);
