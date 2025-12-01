// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import GreetingElement from "./mGreetingApp";
// import GreetingElementwithProp from "./Mygreetingprop";
// import AppColor from "./AppbackgroundColor";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <GreetingElement/>
//     <GreetingElementwithProp msg="Hi its Monday" />
//     <GreetingElementwithProp msg="Monday" />
//     <GreetingElementwithProp msg="Tuesday" />
//     <GreetingElementwithProp msg="Wednesday" />
//     <GreetingElementwithProp msg="Thursday" />
//     <GreetingElementwithProp msg="Friday" />
//     <GreetingElementwithProp msg="Saturday" />
//     <GreetingElementwithProp msg="Sunday" />
//     <AppColor heading="This is first element" lbl="Name :" color="green" />{" "}
//     <AppColor heading="This is second element" lbl="Name :" color="blue" />{" "}
//     <AppColor
//       heading="This is third third element"
//       lbl="Name :"
//       color="Yellow"
//     />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// this is for week 6 Calculator
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Calculator from './SimpleCalculator';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>
// );

// src/index.js for week7
// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import "./App.css";
// import Hook_ControlledButtonState from "./Counter";
// import EmojeeCounter from "./EmojeeCounters";
// import TextToEmoji from "./TextToEmoji";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Hook_ControlledButtonState />
//     <EmojeeCounter pic="Love" />
//     <EmojeeCounter pic="sad" />
//     <EmojeeCounter pic="Like" />
//     <TextToEmoji />
//   </React.StrictMode>
// );

// this is for week 9
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index.css";
import FacebookEmojiCounter from "./Facebookemoji";
import ToggleMode from "./ToggleModeComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <FacebookEmojiCounter type="happy" />
      <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <ToggleMode />
  </React.StrictMode>
  // <React.Fragment>

  // </React.Fragment>,
);

