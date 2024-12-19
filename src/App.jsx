import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Style from "./App.module.css";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <div className={Style.appContainer}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
