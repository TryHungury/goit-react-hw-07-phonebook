import { createReducer } from "@reduxjs/toolkit";
import { contactsInitState } from "./contacts.init-state";
import { contactsListAction, contactsListDeleteAction } from "./contacts.actions";

export const contactsListReducer = createReducer(contactsInitState, (builder)=>{
    builder.addCase(contactsListAction, (state, {payload}) => {(state.contacts).push(payload)})

    .addCase(contactsListDeleteAction, (state, {payload})=> {state.contacts = (state.contacts.filter((contact) => contact.id !== payload))})
});
