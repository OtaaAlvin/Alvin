// Retrieving the element where cars will be displayed
const cars = document.getElementById("cars");

// Fetching vehicle data from the server
fetch('https://json-server-zrvf.onrender.com/vehicles')
  .then(response => response.json()) // Converting response to JSON
  .then(data => {
   
    // Looping through each vehicle data
    data.forEach(vehicle => {
    
      // Creating a div element to display vehicle details
      const div = document.createElement("div");
      div.className = "automade"; // Adding class for styling
      div.id = vehicle.id; // Assigning vehicle ID as div ID
     
      // Filling div with vehicle information
      div.innerHTML = `
        <img src="${vehicle.photo}"/>
        <p>${vehicle.make} ${vehicle.model} ${vehicle.year} ${vehicle.color}</p>
        <p>PRICE ${vehicle.price}</p>
        <p>MILEAGE ${vehicle.mileage}</p>
        <button id="press${vehicle.id}" >BUY NOW</button>
      `;
      // Styling the div
      div.style.color = "black";
      div.style.width = "30%";
      div.style.backgroundColor = "white";
      // Appending the div to the cars element
      cars.appendChild(div);
     
      // Calling function to display form when 'BUY NOW' button is clicked
      displayForm(vehicle);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to display form when 'BUY NOW' button is clicked
function displayForm(car) {
  // Retrieving the 'BUY NOW' button element
  const press = document.getElementById(`press${car.id}`);
  // Adding click event listener to the button
  press.addEventListener("click", () => {

    // Checking if form is not already displayed
    if (!document.getElementById(`F${car.id}`)) {
 
      // Creating form element
      const form = document.createElement("form");
      form.id = `F${car.id}`;
      form.className = "form";
      // Filling form with input fields
      form.innerHTML = `
        <h2>Please fill in the form below</h2>
        <input id="name" type="text" placeholder="Enter your Name">
        <input type="number" id="number" placeholder="Enter your Number">
        <button type="submit">FINISH</button>
      `;
    
      // Appending form to the div containing vehicle details
      document.getElementById(car.id).appendChild(form);
     
      // Calling function to submit form when 'FINISH' button is clicked
      submitForm(car);
    }
  });
}


// Function to handle form submission
function submitForm(car) {
  const submitForm = document.getElementById(`F${car.id}`);
  // Adding submit event listener to the form
  submitForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Preventing default form submission behavior
    // Displaying thank you message
    alert(`Thank you for your interest in this ${car.make} ${car.model}! You will be contacted by one of our elite agents.`);
    // Removing the form from the DOM
    document.getElementById(`F${car.id}`).remove();
  });
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById("containa");
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Adding event listener for scroll button click
document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scroll');
  if (scrollButton) {
    scrollButton.addEventListener('click', function() {
      scrollToSection('targetSection');
    });
  }
});


