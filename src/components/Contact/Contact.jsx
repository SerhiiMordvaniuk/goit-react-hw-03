import React from "react";
import s from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={s.item}>
        <div className={s.contacts}>
          <div className={s.contact}>
            <FaUserAlt size="20" />
            <p>{name}</p>
          </div>
          <div className={s.contact}>
            <FaPhoneAlt size="20" />
            <p>{number}</p>
          </div>
        </div>
        <button className={s.btn}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
