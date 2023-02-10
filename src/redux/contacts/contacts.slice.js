import { createSlice } from "@reduxjs/toolkit";
import { contactsInitState } from "./contacts.init-state";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        contactsListAction: (state, {payload}) => {(state.contacts).push(payload)},

        contactsListDeleteAction: (state, {payload})=> {state.contacts = (state.contacts.filter((contact) => contact.id !== payload))}
    }
})

export const { contactsListAction, contactsListDeleteAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;