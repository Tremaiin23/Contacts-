document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const sendMessageLink = document.getElementById('sendMessageLink');
  const howToLink = document.getElementById('howToLink');
  const howToModal = document.getElementById('howToModal');
  const closeBtn = document.querySelector('.close-btn');
  
  sendMessageLink.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Simple validation checks
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }
    
    // In a real app, you'd send this to a backend service
    console.log('Form submitted', { name, email, subject, message });
    
    // Optional: Show success message
    alert('Thank you for your message. We will get back to you soon!');
    
    // Reset form
    contactForm.reset();
  });

  // How To Modal functionality
  howToLink.addEventListener('click', (event) => {
    event.preventDefault();
    howToModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    howToModal.style.display = 'none';
  });

  // Close modal if user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === howToModal) {
      howToModal.style.display = 'none';
    }
  });
});