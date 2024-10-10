import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import Counter from "./components/Counter";

// Convert the Counter component into a Web Component
const CounterWebComponent = reactToWebComponent(Counter, React, ReactDOM);

// Define the custom element
customElements.define("counter-component", CounterWebComponent);
