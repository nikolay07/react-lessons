import React from "react";
import ReactDOM from "react-dom";
import Mailbox from "./MailBox.jsx";
import "./index.scss";
const rootElem = document.querySelector("#root");

ReactDOM.render(<Mailbox unreadMessages={["a"]} />, rootElem);
