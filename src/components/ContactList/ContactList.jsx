import { useSelector } from "react-redux";
import { useMemo } from "react";
import Contact from "../Contact/Contact";
import Style from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filter.search);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }, [contacts, filterName]);

  if (filteredContacts.length === 0) {
    return <p>No contacts found for &quot;{filterName}&quot;</p>;
  }

  return (
    <ul className={Style.contactList}>
      {filteredContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
