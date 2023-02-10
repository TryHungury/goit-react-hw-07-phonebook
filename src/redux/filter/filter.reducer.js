import { createReducer } from "@reduxjs/toolkit";
import { filterInitState } from "./filter.init-state";
import { filterAction } from "./filter.actions";

export const filterReducer = createReducer(filterInitState, (builder)=>{
    builder.addCase(filterAction, (state, {payload}) => {state.filter = payload})
});