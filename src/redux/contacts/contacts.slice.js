import { createSlice } from "@reduxjs/toolkit";
import { contactsInitState } from "./contacts.init-state";
import { deleteContactsThunk, getContactsThunk, putContactsThunk } from "./contacts.thunk";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        // contactsListAction: (state, {payload}) => {(state.contacts.items).push(payload)},
        // contactsListDeleteAction: (state, {payload})=> {state.contacts.items = (state.contacts.items.filter((contact) => contact.id !== payload))}
    },
    extraReducers: {
        [getContactsThunk.pending]: (state) => {
            (state.contacts.isLoading) = true},
        [getContactsThunk.fulfilled]: (state, {payload}) => {
            (state.contacts.items) = (payload); 
            (state.contacts.isLoading) = false},
        [putContactsThunk.pending]: (state) => {
            (state.contacts.isLoading) = true},
        [putContactsThunk.fulfilled]: (state, {payload}) => {(state.contacts.items).push(payload); 
            (state.contacts.isLoading) = false},
        [deleteContactsThunk.pending]: (state) => {
            (state.contacts.isLoading) = true},
        [deleteContactsThunk.fulfilled]: (state, {payload})=> {(state.contacts.items) = (state.contacts.items.filter((contact) => contact.id !== payload.id)); 
            (state.contacts.isLoading) = false}
        }
    })

export const { contactsListAction, contactsListDeleteAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;