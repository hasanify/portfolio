import React from "react";
import ReactDOM from "react-dom/client";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Landing />
  </React.StrictMode>
);
