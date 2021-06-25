# Frontend Code Challenge

This challenge consist in making a single page application using  React.js, Redux.js and SASS all files have to be in github on a repository named test-your-name.

## Web Email Client

This Single Page Application will be a email client and we have to show a list of email on the left side, each element of the list has two states, read and unread. When user clicks an element in the list it changes to read.

Inside the email detail we’ll see the full information, like who sent it, body text, attachments, etc. Also the ui have to be responsive for iPad.

## Required Behavior

### Email list:

- When user clicks on each element, it should display the email detail on the right side.
- Highlight email element on click.
- Every 90 seconds, two new emails should appear on the top of the list (emulating new emails received).
- Option to switch between inbox and spam view.
- Filter by is a dropdown to switch between Inbox, Spam and Deleted emails.
- Search bar search in the current section Inbox, Spam or Deleted.

### Email Detail Actions:

- Mark as unread.
- Mark as spam.
- Delete.

## Constraints

- Avoid use any CSS framework like bootstrap, foundation, etc.
- Don’t use create-react-app.

## Points to evaluate

- File architecture.
- React components.
- Redux State/Store.
- Sass files.
- Responsive.
- Animation/Transitions.

## Available Scripts

#### `npm install`

Install the dependencies in the local node_modules folder.

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
