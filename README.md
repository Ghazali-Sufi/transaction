# 🚀 Transaction Analytics - Salaam 360
      A simple transaction analytics dashboard that visualizes transaction data using Chart.js and allows users to filter transactions by date range.
      
# 📌 Features
✅ Date Range Filtering – Select a start and end date to filter transactions
✅ Interactive Charts – Line and bar charts displaying transaction trends
✅ Responsive Design – Works on desktops and mobile devices
✅ Live Data Fetching – Retrieves transaction data from an API (Takes ~1 minute to load)

# ⏳ Important Note About API Response Time
⚠️ The API takes about 1 minute to load data, but only on the first request.
🔹 This happens because the API server is in a cold start state and needs time to wake up.
🔹 After the first request, transactions will load instantly.

👉 Be patient for the first load, and check the browser console for logs!

🖥️ Live Demo
🔗 Check the Live Demo (https://salaam-360.netlify.app/)

# 📸 Screenshots
![image](https://github.com/user-attachments/assets/7009866e-8730-4319-95a8-f6d4108b5142)

# 🛠️ Tech Stack
  HTML – Structure of the page
  CSS – Styling and layout
  JavaScript (jQuery) – Fetching and processing API data
  Chart.js – Rendering interactive charts


# 🚀 Getting Started
1️⃣ Clone the Repository
  git clone https://github.com/yourusername/transaction-analytics.git
  cd transaction-analytics
2️⃣ Open the index.html File
  You can open the file directly in your browser or use Live Server in VS Code.


# 🔌 API Integration
This project fetches transaction data from: https://transactions-de4e.onrender.com/transactions
The API returns transaction data in the following format:
[
  {
    "id": 1,
    "date": "2024-02-20",
    "amount": 500,
    "status": "success"
  },
  {
    "id": 2,
    "date": "2024-02-21",
    "amount": 250,
    "status": "failed"
  }
]

Transactions are filtered based on Start Date and End Date.
The Line Chart shows successful & failed transactions.
The Bar Chart displays successful, failed, and pending transactions.

# UI Design
  The date filter section has a modern gradient background.
  Hover effects and animations for better UX.
  Mobile-friendly using CSS Grid and Flexbox.

# 🏗️ Future Improvements
🔹 Add transaction categories (e.g., shopping, bills, food)
🔹 Improve data visualization with more chart types
🔹 Connect to a real backend for real-time transactions

🎯 Made with ❤️ by Mohamed Ghazali

