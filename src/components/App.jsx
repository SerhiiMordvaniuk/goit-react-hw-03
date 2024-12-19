import { useState } from "react";
import "./App.css";
import Contact from "./Contact/Contact";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearschBox from "./SearchBox/SearschBox";

function App() {
  return (
    <>
      <ContactForm />
      <SearschBox />
      <ContactList />
    </>
  );
}

export default App;
