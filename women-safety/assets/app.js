// DOM Elements
const sosButton = document.getElementById("sos-button");
const contactsList = document.getElementById("contacts-list");
const addContactForm = document.getElementById("add-contact-form");
const contactNameInput = document.getElementById("contact-name");
const contactNumberInput = document.getElementById("contact-number");

// Load contacts from localStorage
window.onload = () => {
  const contacts = JSON.parse(localStorage.getItem("trustedContacts")) || [];
  contacts.forEach(addContactToDOM);
};

// Add a new contact
addContactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactNameInput.value.trim();
  const number = contactNumberInput.value.trim();

  if (name && number) {
    const contact = { name, number };
    saveContact(contact);
    addContactToDOM(contact);
    addContactForm.reset();
  }
});

// Save contact to localStorage
function saveContact(contact) {
  const contacts = JSON.parse(localStorage.getItem("trustedContacts")) || [];
  contacts.push(contact);
  localStorage.setItem("trustedContacts", JSON.stringify(contacts));
}

// Add contact to the DOM
function addContactToDOM(contact) {
  const li = document.createElement("li");
  li.textContent = `${contact.name} - ${contact.number}`;
  contactsList.appendChild(li);
}

// Send SOS Alert
sosButton.addEventListener("click", () => {
  const locationUrl = `https://www.google.com/maps?q=loc:${getLatitude()},${getLongitude()}`;
  const message = `🚨 SOS Alert! I need help. Here's my location: ${locationUrl}`;

  alert("SOS alert sent to your trusted contacts.");
  console.log(message); // Simulate sending a message
});

// Mock Location (Replace this with a real location API if needed)
function getLatitude() {
  return "28.7041"; // Example: Latitude of Delhi
}

function getLongitude() {
  return "77.1025"; // Example: Longitude of Delhi
}
