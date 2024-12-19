import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { useCallback } from "react";
import PropTypes from "prop-types";
import Style from "./ContactForm.module.css";

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must be a text")
    .min(3, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
    .required("Required"),
});

function ValidationError({ message }) {
  return <span style={{ color: "red", fontSize: "12px" }}>{message}</span>;
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const initialValues = {
    name: "",
    number: "",
  };

  const handleNumChange = useCallback((e, setFieldValue) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/[^\d]/g, "")
      .replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3");
    setFieldValue("number", formattedValue);
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.trim().toLowerCase() ===
          values.name.trim().toLowerCase() || contact.number === values.number
    );

    if (isDuplicate) {
      alert(
        `This contact already exists! Name: ${values.name}, Number: ${values.number}`
      );
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      {({ setFieldValue, isValid, dirty }) => (
        <Form className={Style.contactForm}>
          <div className={Style.contactFormContainer}>
            <div className={Style.formInput}>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" placeholder="Name" />
              <ErrorMessage name="name" component={ValidationError} />
            </div>
            <div className={Style.formInput}>
              <label htmlFor="number">Number</label>
              <Field
                type="text"
                name="number"
                id="number"
                placeholder="000-00-00"
                onChange={(event) => handleNumChange(event, setFieldValue)}
              />
              <ErrorMessage name="number" component={ValidationError} />
            </div>
            <button
              type="submit"
              className={Style.formButton}
              disabled={!isValid || !dirty}
            >
              Add Contact
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
