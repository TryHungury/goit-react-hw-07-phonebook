import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsThunk = createAsyncThunk('contacts', async ()=>{
    const {data} = await axios.get('https://63e6298883c0e85a868dde63.mockapi.io/pet/v1/contacts')
    // console.log(data)
    return data;
})