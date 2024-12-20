import { useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearschBox from "./SearchBox/SearschBox";
import InitialContacts from "./InitialContacts.json";

function App() {
  const [contactList, setContactList] = useState(InitialContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContactList((prev) => {
      return [newContact, ...prev];
    });
  };
  const deleteContact = (id) => {
    console.log(id);
    setContactList((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contactList.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearschBox filter={filter} onSearch={setFilter} />
      <ContactList contactList={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
