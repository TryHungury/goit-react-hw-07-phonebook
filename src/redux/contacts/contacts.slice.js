import { createSlice } from "@reduxjs/toolkit";
import { contactsInitState } from "./contacts.init-state";
import { getContactsThunk } from "./contacts.thunk";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        contactsListAction: (state, {payload}) => {(state.contacts.items).push(payload)},
        contactsListDeleteAction: (state, {payload})=> {state.contacts.items = (state.contacts.items.filter((contact) => contact.id !== payload))}
    },
    extraReducers: {
        [getContactsThunk.pending]: (state) => {
            (state.contacts.isLoading) = true},
        [getContactsThunk.fulfilled]: (state, {payload}) => {
            (state.contacts.items) = (payload); 
            (state.contacts.isLoading) = false},
    }
})

export const { contactsListAction, contactsListDeleteAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;