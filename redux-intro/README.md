# Redux Toolkit Banking App

This is a simple banking app that demonstrates the use of **Redux Toolkit** for state management. The app manages **account** and **customer** states, allowing users to deposit, withdraw, request loans, and create customer profiles. It also includes **currency conversion** when making deposits in different currencies.

## Features

### Account Operations

- **Deposit funds**: Users can deposit funds into their account, and if they deposit in a foreign currency, the amount will be converted to USD using a currency conversion API.
- **Withdraw funds**: Users can withdraw funds from their account.
- **Request a loan**: Users can request a loan with a specific purpose, and the loan will be added to their balance.
- **Pay off loan**: If a user has an active loan, they can pay it off.

### Customer Management

- **Create a new customer**: Users can create a customer by providing a full name and national ID.

## Technologies Used

- **React**: Frontend UI framework.
- **Redux Toolkit**: State management for handling account and customer data.
- **Fetch API**: Used for currency conversion and communicating with the backend.
- **React Router**: Handles navigation in the application.
- **React-Redux**: For connecting React components with Redux state.
- **JavaScript**: Core logic is written in JavaScript.

## Folder Structure

```bash
src/
│
├── features/
│   ├── accounts/
│   │   ├── accountSlice.js  # Redux slice for account state management.
│   │   ├── AccountOperations.js
│   │   └── BalanceDisplay.js
│   └── customers/
│       ├── customerSlice.js  # Redux slice for customer state management.
│       ├── Customer.js
│       └── CreateCustomer.js
│
├── store.js  # Redux store configuration.
├── App.js    # Main application entry point.
└── index.js  # App bootstrap file.
```

## Redux Slices

### `accountSlice.js`

This slice manages the account state, including the balance, loan amount, and loan purpose. It also handles **asynchronous currency conversion** when depositing in foreign currencies.

Key Actions:

- `deposit`: Add funds to the account balance.
- `withdraw`: Withdraw funds from the account.
- `requestLoan`: Request a loan, which is added to the account balance.
- `payLoan`: Pay off an active loan.

### `customerSlice.js`

This slice manages the customer state, including creating a new customer with a full name and national ID.

Key Actions:

- `createCustomer`: Creates a new customer with a timestamp.
- `updateCustomer`: Updates the customer information.

## Store Configuration

The Redux store combines the `account` and `customer` reducers to manage the global state. The store is configured using `configureStore` from **Redux Toolkit**.

```js
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
```

## Running the Application

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
