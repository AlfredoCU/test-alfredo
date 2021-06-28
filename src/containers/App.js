import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Detail from "../components/detail";
import MailBox from "../components/mailbox";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <MailBox />
      <Detail />
    </div>
  </Provider>
);

export default App;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faPaperclip,
// } from "@fortawesome/free-solid-svg-icons";
// {/* <FontAwesomeIcon icon={faPaperclip} />
// <FontAwesomeIcon icon={faSearch} />
