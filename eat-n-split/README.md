## Bill Splitting Application

This project is a `React JS` application that allows users to manage their friends and split bills with them. The application helps keep track of expenses shared with friends, showing who owes whom and how much.

### Features

- **Add Friends:** Users can add new friends by entering their name and image URL. Each friend starts with a balance of `$0`.
- **Select Friends:** Users can select a friend from the list to view or manage their balance.
- **Split Bills:** The application allows users to split a bill with a selected friend, updating their balances accordingly.
- **Expense Management:** Shows the balance of each friend, indicating whether the user owes the friend or the friend owes the user.

### Project Structure

- **`App.js`:** The main component managing the state of friends, selected friend, and showing different forms for adding friends or splitting bills.
- **`FriendsList.js`:** Component that lists all the friends, allowing the user to select a friend for splitting bills.
- **`Friend.js`:** Individual friend component that shows the friend’s name, image, and balance, and allows the user to select or deselect the friend.
- **`FormAddFriend.js`:** Form component to add a new friend by entering their name and image URL.
- **`FormSplitBill.js`:** Form component to split a bill with the selected friend, entering the bill amount, the amount paid by the user, and selecting who is paying the bill.

### Usage

- **`Add a friend`:** Click the "Add Friend" button to open the form, enter the friend's name and image URL, and click "Add" to include them in the list.
- **`Select a friend`:** Click the "Select" button next to a friend's name to start managing their expenses.
- **`Split a bill`:** Enter the total bill amount, how much you paid, and select who is paying the bill. The balances will update accordingly.
- **`Check balances`:** The app shows whether you owe your friend money or they owe you, with amounts displayed in red for negative balances and green for positive ones.

### Technologies used

- **React Js:** The core framework used to build the application.
- **JavaScript:** For handling the application's logic.
- **CSS:** For styling the application components.

### Setup

Clone the repository:

```bash
git clone https://github.com/sureshbabu170302/React-Js-Projects.git
cd eat-n-split
```
