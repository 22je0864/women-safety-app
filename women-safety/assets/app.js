// DOM Elements
const sosButton = document.getElementById("sos-button");
const copyButton = document.getElementById("copy-button");
const contactsList = document.getElementById("contacts-list");
const emptyContacts = document.getElementById("empty-contacts");
const addContactForm = document.getElementById("add-contact-form");
const contactNameInput = document.getElementById("contact-name");
const contactNumberInput = document.getElementById("contact-number");
const locationText = document.getElementById("location-text");
const sosMessage = document.getElementById("sos-message");

let cachedMessage = "";

// Load contacts from localStorage
window.onload = () => {
  renderContacts();
  sosMessage.value = "Press Send SOS to generate your emergency message.";
};

// Add a new contact
addContactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactNameInput.value.trim();
  const number = contactNumberInput.value.trim();

  if (name && number) {
    const contact = { name, number };
    saveContact(contact);
    renderContacts();
    addContactForm.reset();
  }
});

// Save contact to localStorage
function saveContact(contact) {
  const contacts = JSON.parse(localStorage.getItem("trustedContacts")) || [];
  contacts.push(contact);
  localStorage.setItem("trustedContacts", JSON.stringify(contacts));
}

function removeContact(index) {
  const contacts = JSON.parse(localStorage.getItem("trustedContacts")) || [];
  contacts.splice(index, 1);
  localStorage.setItem("trustedContacts", JSON.stringify(contacts));
  renderContacts();
}

// Render contacts
function renderContacts() {
  const contacts = JSON.parse(localStorage.getItem("trustedContacts")) || [];
  contactsList.innerHTML = "";
  emptyContacts.style.display = contacts.length ? "none" : "block";
  contacts.forEach((contact, index) => addContactToDOM(contact, index));
}

// Add contact to the DOM
function addContactToDOM(contact, index) {
  const li = document.createElement("li");
  li.className = "contact-card";

  const details = document.createElement("div");
  details.className = "contact-details";
  details.innerHTML = `<strong>${contact.name}</strong><span>${contact.number}</span>`;

  const actions = document.createElement("div");
  actions.className = "contact-actions";

  const callLink = document.createElement("a");
  callLink.href = `tel:${contact.number}`;
  callLink.textContent = "Call";
  callLink.setAttribute("aria-label", `Call ${contact.name}`);

  const smsLink = document.createElement("a");
  smsLink.href = `sms:${contact.number}?&body=${encodeURIComponent(cachedMessage || "SOS: I need help.")}`;
  smsLink.textContent = "Text";
  smsLink.setAttribute("aria-label", `Text ${contact.name}`);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeContact(index));

  actions.append(callLink, smsLink, removeButton);
  li.append(details, actions);
  contactsList.appendChild(li);
}

// Send SOS Alert
sosButton.addEventListener("click", async () => {
  sosButton.disabled = true;
  locationText.textContent = "Getting your location...";
  try {
    const location = await getCurrentLocation();
    cachedMessage = buildSosMessage(location);
    sosMessage.value = cachedMessage;
    updateSmsLinks(cachedMessage);
    locationText.textContent = location.label;
    alert("SOS prepared. Use the Copy button or text a contact below.");
  } catch (error) {
    locationText.textContent = "Unable to access location. Please enable location services.";
    sosMessage.value = "Location unavailable. Share your current address manually.";
  } finally {
    sosButton.disabled = false;
  }
});

copyButton.addEventListener("click", async () => {
  if (!sosMessage.value.trim()) {
    return;
  }
  try {
    await navigator.clipboard.writeText(sosMessage.value);
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = "Copy SOS Message";
    }, 2000);
  } catch (error) {
    alert("Copy failed. Please select and copy the message manually.");
  }
});

function updateSmsLinks(message) {
  const smsLinks = document.querySelectorAll(".contact-actions a[href^='sms:']");
  smsLinks.forEach((link) => {
    const number = link.href.split("sms:")[1]?.split("?")[0] || "";
    link.href = `sms:${number}?&body=${encodeURIComponent(message)}`;
  });
}

function buildSosMessage(location) {
  return `🚨 SOS Alert! I need help. Location: ${location.mapsUrl} (Accuracy: ${location.accuracy}m)`;
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const mapsUrl = `https://www.google.com/maps?q=loc:${latitude},${longitude}`;
        resolve({
          latitude,
          longitude,
          accuracy: Math.round(accuracy),
          mapsUrl,
          label: `Location captured (±${Math.round(accuracy)}m).`,
        });
      },
      () => {
        reject(new Error("Location permission denied"));
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}
