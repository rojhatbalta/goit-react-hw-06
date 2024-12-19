import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import Style from "./Searchbox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.filter.search);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={Style.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="search"
        placeholder="None"
        value={filterName}
        onChange={handleSearch}
      />
    </div>
  );
}
