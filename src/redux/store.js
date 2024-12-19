import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import filterReducer from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configurations
const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactReducer), // Persisted slice
  filter: filterReducer, // Non-persisted slice
});

// Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);
export { store };
