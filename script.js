document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const feedback = document.getElementById('feedback').value;
      const color = document.getElementById('color').value;
  
      // Here you can perform further processing or send the form data to a server
      // For this example, let's just log the data
      console.log('Name:', name);
      console.log('Age:', age);
      console.log('Feedback:', feedback);
      console.log('Favorite Color:', color);
  
      // Optionally, you can display a success message or clear the form
      alert('Survey submitted successfully!');
      form.reset();
    });
  });
  