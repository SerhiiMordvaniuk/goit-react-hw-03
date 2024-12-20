import React, { useId } from "react";
import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({ id: Date.now(), name: values.name, number: values.number });
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div>
            <label htmlFor={nameId}>
              <span>Name</span>
              <Field type="text" name="name" className={s.input} id={nameId} />
            </label>
          </div>
          <div>
            <label htmlFor={numberId}>
              <span>Number</span>
              <Field
                type="number"
                name="number"
                className={s.input}
                id={numberId}
              />
            </label>
          </div>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
