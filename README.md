# 📊 Expense Tracker App

A straightforward and responsive React-based application designed to help you manage your personal finances by tracking income and expenses.

---

## 🚀 Features

- 💸 **Add Transactions**: Easily log new income or expenses with descriptions and amounts.
- 💰 **Real-time Balance**: Instantly see your updated account balance.
- 📈 **Income/Expense Summary**: View clear totals for your earnings and spending.
- 📜 **Transaction History**: Keep a record of all your financial activities.
- 🗑️ **Delete Transactions**: Remove entries from your history with a click.
- 💾 **Local Storage**: Your data persists in the browser, so you don't lose track.

---

## 🛠️ Tech Stack

- **React.js**
- **React Context API** (for state management)
- **Tailwind CSS**

---

## 📦 Installation & Setup

1.  **Clone the repo**:

    ```bash
    git clone https://github.com/talhahappani/expense-tracker.git
    cd expense-tracker
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the app**:

    ```bash
    npm run dev
    ```

    The app will be available at http://localhost:5173

---

## 🔧 File Structure

```
expense-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTransaction.jsx
│   │   ├── Balance.jsx
│   │   ├── Header.jsx
│   │   ├── IncomeExpenses.jsx
│   │   ├── Transaction.jsx
│   │   └── TransactionList.jsx
│   ├── context/
│   │   ├── AppReducer.jsx
│   │   └── GlobalState.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

## 📄 License

[MIT](LICENSE)
