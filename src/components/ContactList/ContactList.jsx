import React from "react";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contactList }) => {
  return (
    <>
      <ul>
        {contactList.map((item) => {
          return (
            <li key={item.id}>
              <Contact name={item.name} number={item.number} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
