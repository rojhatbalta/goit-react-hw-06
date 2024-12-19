import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import Style from "./Contact.module.css";
import IconPerson from "../Icons/IconPerson";
import IconPhone from "../Icons/IconPhone";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <li>
      <div className={Style.contactContainer}>
        <div>
          <div className={Style.contactItem}>
            <IconPerson />
            <p className={Style.contactName}>{contact.name}</p>
          </div>
          <div className={Style.contactItem}>
            <IconPhone />
            <p className={Style.contactNumber}>{contact.number}</p>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(deleteContact(contact.id));
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
