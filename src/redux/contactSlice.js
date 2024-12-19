import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      try {
        if (!action.payload.name || !action.payload.number) {
          throw new Error("Name and number are required");
        }
        state.items.push({
          ...action.payload,
          id: uuidv4(),
        });
      } catch (error) {
        console.error("Add contact failed:", error.message);
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectContactById = (id) => (state) =>
  state.contacts.items.find((item) => item.id === id);

export default contactSlice.reducer;
