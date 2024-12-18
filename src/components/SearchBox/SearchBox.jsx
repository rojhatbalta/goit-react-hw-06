import PropTypes from "prop-types";
import Style from "./Searchbox.module.css";

export default function SearchBox({ handleSearch, search }) {
  return (
    <div className={Style.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="search"
        placeholder="None"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
