# Chat System Geek

A **real-time chat application** built with modern web technologies, ensuring **secure end-to-end encrypted messaging** and a **smooth user experience**.

## 🚀 Features

- 🔒 **End-to-End Encryption (E2EE)** for secure messaging
- 💬 **Real-Time Chat** using WebSockets
- 📱 **Responsive UI** with Tailwind CSS
- 🗂️ **Group & Private Chats**
- ✅ **Read Receipts & Typing Indicators**
- 🟢 **Online Presence Tracking**
- 📂 **File & Image Sharing**

## 🛠️ Tech Stack

| Technology   | Purpose |
|-------------|---------|
| **Angular** | Frontend Framework |
| **TypeScript** | Strongly-typed JavaScript |
| **Tailwind CSS** | UI Styling Framework |
| **PostgreSQL** | Database for storing messages & users |
| **WebSockets** | Real-time communication |
| **Node.js (Optional)** | Backend API (if needed) |

## 📌 Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/Chat_System_Geek.git
cd Chat_System_Geek
```

### 2️⃣ **Backend Setup (PostgreSQL)**
- Install PostgreSQL and create a database:
```sh
CREATE DATABASE chat_system_geek;
```
- Configure environment variables for DB connection.

### 3️⃣ **Frontend Setup (Angular)**
```sh
cd frontend
npm install
ng serve
```

### 4️⃣ **Run WebSocket Server**
If using Node.js backend:
```sh
cd backend
npm install
node server.js
```

## 🖥️ Project Structure
```sh
Chat_System_Geek/
├── frontend/    # Angular + Tailwind UI
├── backend/     # WebSockets + Database Logic
└── README.md    # Project Documentation
```

## 🛡️ Security & Encryption
- **AES & RSA Encryption** used for message security.
- **Secure WebSockets (wss://)** for encrypted real-time communication.
- **JWT Authentication** for user sessions.

## 📌 Roadmap
✅ Build UI with Angular + Tailwind
✅ Implement WebSockets for real-time chat
✅ Setup PostgreSQL for storing messages
⏳ Add Push Notifications
⏳ Implement Voice & Video Calls

## 👥 Contributors
- **Your Name** (Project Lead)
- **Contributor 2**
- **Contributor 3**

## 🤝 Contributing
Want to contribute? **Fork the repo**, create a new branch, and submit a pull request!

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
🚀 **Chat_System_Geek** - Secure, Real-Time Messaging with Angular & PostgreSQL 🔥

