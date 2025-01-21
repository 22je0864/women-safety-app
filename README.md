# 🚨 **Women Safety App - Empowering Women Everywhere** 🚨

A web and mobile application designed to ensure women's safety by providing features like location tracking, emergency alerts, and access to a support network. This app aims to reduce incidents of harassment, abuse, and emergency situations by providing quick response mechanisms.

---

## 🚀 **Technologies Used**

| **Technology**                     | **Description**                                      |  
|-------------------------------------|------------------------------------------------------|  
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)  | Frontend framework for building responsive UIs.        |  
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)  | Backend runtime to handle API requests.               |  
| ![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=flat&logo=mongodb&logoColor=white)  | NoSQL Database for storing user data.                  |  
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | Web framework for building robust backend APIs.        |  
| ![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=flat&logo=google-maps&logoColor=white) | API for tracking user location.                       |

---

## 💡 **Features**

### 🚨 **Emergency Alerts**
- Instantly send alerts with your real-time location to friends, family, or nearby authorities.
  
### 🗺️ **Live Location Tracking**
- Share your live location with trusted contacts to ensure your safety while commuting.

### 📞 **Emergency Call Button**
- A one-tap button that calls the nearest emergency services or pre-set contacts.

### 👥 **Support Network**
- Connect with a network of trusted individuals or local safety services for immediate help.

### 🔒 **Privacy-First**
- All data, including your location, is encrypted for your privacy and safety.

---

## ⚙️ **How to Run**

### **Prerequisites**
Before starting, ensure you have the following installed:
- 🟢 **Node.js** (v14 or higher)  
- 🔵 **MongoDB** (either locally or using a cloud database like MongoDB Atlas)  
- 🟡 **Google Maps API Key** (for location tracking)  

### **Setup Instructions**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/women-safety-app.git
   cd women-safety-campaign
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up your environment variables:**
   - Create a `.env` file in the backend folder and add your **Google Maps API Key** and **MongoDB URI**:
   ```env
   MONGO_URI=your-mongodb-uri
   GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

5. **Start the application:**
   ```bash
   # Start the backend server  
   cd backend
   npm start

   # Start the frontend React app  
   cd ../frontend
   npm start
   ```

6. **Open the app in your browser:**
   ```
   http://localhost:3000
   ```

---

## 📂 **File Structure**

```plaintext
/women-safety-campaign  
├── /backend  
│     ├── server.js         # Main backend server  
│     ├── /models           # Database schemas  
│     ├── /routes           # API routes (e.g., alert routes, user routes)  
├── /frontend  
│     ├── src  
│           ├── App.js      # Main React component  
│           ├── /components # Components for location, emergency alerts, etc.  
│           ├── /pages      # Pages for app (Home, About, etc.)  
├── README.md               # Project documentation  
```

---

## 🖼️ **Screenshots**

### **1. Emergency Alert Screen**
_Easily send alerts with your location at the press of a button._
<p align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Emergency+Alert+Screen" alt="Emergency Alert Screenshot" width="80%" />
</p>

---

### **2. Live Location Tracking**
_Track your live location in real-time and share it with trusted contacts._
<p align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Live+Location+Tracking" alt="Live Location Screenshot" width="80%" />
</p>

---

## 🤝 **Contributing**

We welcome contributions! If you want to improve the app or add features, feel free to fork the repository and submit a pull request.

### Ideas for Improvements:
- Integrate **user authentication** for personalized experience.
- Add **real-time chat** between users and emergency responders.
- Enable **multi-language support** for wider accessibility.
- Incorporate **push notifications** for alerts and safety checks.

---

## 📜 **License**

This project is licensed under the MIT License.

---

## 🌐 **Stay Connected**

- 💻 [GitHub Repository](https://github.com/22je0864/women-safety-app)  
- 📧 Email: sapanabairwa003@gmail.com  
- 🌟 _Please star the repo if you find this app useful!_

---

<p align="center">
  <img src="https://via.placeholder.com/600x300.png?text=Empowering+Women+Everywhere" alt="Empowering Women Banner" width="70%" />
</p>
