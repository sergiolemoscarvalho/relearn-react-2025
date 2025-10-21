import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./css/style.css";
import Header from "./header.jsx";
import Message from "./message.jsx";
import Destaques from "./destaques.jsx";
import Energy from "./energia.jsx";
import NossaAgenda from "./nossaagenda.jsx";
import NossosResultados from "./nossosresultados.jsx";
import Footer from "./footer.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Fragment>
      <Header />
      <Message />
      <Destaques />
      <Energy />
      <NossaAgenda />
      <NossosResultados />
      <Footer />
    </React.Fragment>
  </StrictMode>
);
