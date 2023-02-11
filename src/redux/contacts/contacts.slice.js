import { createSlice } from "@reduxjs/toolkit";
import { contactsInitState } from "./contacts.init-state";
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from "./contacts.thunk";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        // contactsListAction: (state, {payload}) => {(state.contacts.items).push(payload)},
        // contactsListDeleteAction: (state, {payload})=> {state.contacts.items = (state.contacts.items.filter((contact) => contact.id !== payload))}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContactsThunk.pending, (state) => {
            (state.isLoading) = true})
        // [fetchContactsThunk.pending]: (state) => {
        //     (state.isLoading) = true},
        .addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
            (state.items) = payload; 
            (state.isLoading) = false})
        // [fetchContactsThunk.fulfilled]: (state, {payload}) => {
        //     (state.items) = payload; 
        //     (state.isLoading) = false},
        .addCase(fetchContactsThunk.rejected, (state, {error}) => {
            (state.error) = error.message;
            (state.isLoading) = false})
        // [fetchContactsThunk.rejected]: (state, {error}) => {
        //     (state.error) = error.message;
        //     (state.isLoading) = false},
        .addCase(addContactsThunk.pending, (state) => {
            (state.isLoading) = true})
        // [addContactsThunk.pending]: (state) => {
        //     (state.isLoading) = true},
        .addCase(addContactsThunk.fulfilled, (state, {payload}) => {(state.items).push(payload); 
            (state.isLoading) = false})
        // [addContactsThunk.fulfilled]: (state, {payload}) => {(state.items).push(payload); 
        //     (state.isLoading) = false},
        .addCase(addContactsThunk.rejected, (state, {error}) => {
            (state.error) = error.message; 
            (state.isLoading) = false})
        // [addContactsThunk.rejected]: (state, {error}) => {
        //     (state.error) = error.message; 
        //     (state.isLoading) = false},
        .addCase(deleteContactsThunk.pending,  (state) => {
            (state.isLoading) = true})
        // [deleteContactsThunk.pending]: (state) => {
        //     (state.isLoading) = true},
        .addCase(deleteContactsThunk.fulfilled, (state, {payload})=> {(state.items) = (state.items.filter((contact) => contact.id !== payload.id)); 
            (state.isLoading) = false})
        // [deleteContactsThunk.fulfilled]: (state, {payload})=> {(state.items) = (state.items.filter((contact) => contact.id !== payload.id)); 
        //     (state.isLoading) = false},
        .addCase(deleteContactsThunk.rejected, (state, {error}) => {
            (state.error) = error.message; 
            (state.isLoading) = false})
        // [deleteContactsThunk.rejected]: (state, {error}) => {
        //     (state.error) = error.message; 
        //     (state.isLoading) = false},
        }
    })

export const { contactsListAction, contactsListDeleteAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;