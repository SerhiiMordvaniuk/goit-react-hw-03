import React, { useId } from "react";
import s from "./SearschBox.module.css";
import { Field, Form, Formik } from "formik";

const SearschBox = ({ filter, onSearch }) => {
  const id = useId();

  return (
    <>
      <form>
        <label htmlFor={id} className={s.form}>
          <span>Find contact by name</span>
          <input
            name="text"
            className={s.input}
            id={id}
            // value={filter}
            onChange={(event) => {
              onSearch(event.target.value);
            }}
          />
        </label>
        <button type="submitt">Search</button>
      </form>
    </>
  );
};

export default SearschBox;
