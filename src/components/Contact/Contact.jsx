import PropTypes from "prop-types";
import Style from "./Contact.module.css";
import IconPerson from "../Icons/IconPerson";
import IconPhone from "../Icons/IconPhone";

export default function Contact({ contact, deleteContact }) {
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
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
