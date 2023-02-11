import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContactsThunk = createAsyncThunk('fetchAll', async ()=>{
    const {data} = await axios.get('https://63e6298883c0e85a868dde63.mockapi.io/pet/v1/contacts')
    // throw Error;
    // console.log(data)
    return data;
})

export const addContactsThunk = createAsyncThunk('addContact', async ({ id, name, phone })=>{
    const {data} = await axios.post('https://63e6298883c0e85a868dde63.mockapi.io/pet/v1/contacts', {id, name, phone})
    // console.log(data)
    return data;
})

export const deleteContactsThunk = createAsyncThunk('deleteContact', async (id)=>{
    const {data} = await axios.delete(`https://63e6298883c0e85a868dde63.mockapi.io/pet/v1/contacts/${id}`)
    // console.log(data)
    return data;
})