import { configureStore } from "@reduxjs/toolkit";
import { filterInitState } from "./filter/filter.init-state";
import { contactsInitState } from "./contacts/contacts.init-state";
import { contactsReducer } from "./contacts/contacts.slice";
import { filterReducer } from "./filter/filter.slice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const initState = {
    contacts: contactsInitState,
    filter: filterInitState,
}

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// })

const persistConfig = {
    key: 'phone_book',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);