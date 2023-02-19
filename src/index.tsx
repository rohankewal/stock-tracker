import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import BoxRow from "./BoxRow";
import Footer from "./Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <BoxRow />
    <Footer />
  </React.StrictMode>
);
