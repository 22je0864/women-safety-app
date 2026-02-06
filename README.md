# 🚨 Women Safety Companion

This repository currently ships a **static web app** (HTML/CSS/JS) that provides a basic, working safety toolkit: SOS message creation, trusted contact management, and emergency helplines.

## ✅ What works now (baseline)
- **SOS message with live location** (uses browser geolocation).
- **Trusted contacts** stored in your browser (localStorage).
- **Quick call/text actions** for each contact.
- **Emergency helplines** list and safety checklist.

## ⚙️ How to run locally

### 1) Start a local server
```bash
cd women-safety
python -m http.server 8000
```

### 2) Open the app
Visit: `http://localhost:8000/index.html`

> Note: Most browsers require a server for geolocation to work properly, so avoid opening the HTML file directly.

## 🧭 How to use it (basic workflow)
1. **Add trusted contacts** (name + phone number).
2. Tap **Send SOS Alert** to generate a live-location message.
3. **Copy SOS Message** or tap **Text** next to a contact.
4. Use **Call** for immediate help.

## 📂 Project structure

women-safety/
├── index.html        # Main UI
├── assets/
│   ├── style.css     # Styling
│   └── app.js        # SOS + contacts logic
README.md

```

---

## 🔜 Next upgrade ideas
- Add user profiles and cloud sync.
- Integrate SMS/WhatsApp APIs.
- Share live location continuously.
- Add multilingual UI.


</p>
