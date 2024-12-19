import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    category: "all",
    dateRange: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      const filterValue = action.payload.trim();
      if (filterValue.length > 50) {
        console.warn("Filter value is too long");
        return;
      }
      state.search = filterValue;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter.search;
export const selectCategory = (state) => state.filter.category;
export const selectDateRange = (state) => state.filter.dateRange;

export const { changeFilter, changeCategory, changeDateRange } =
  filterSlice.actions;
export default filterSlice.reducer;
