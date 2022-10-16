/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { InputValue } from "../../../types/input-fields";
import { formConfigMock } from "../../../data/form-config";
import { FormConfig } from "../../../types/form-config";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FormConfig = formConfigMock;

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeFormField: (
      state,
      action: PayloadAction<{ name: string; value: InputValue }>
    ) => {
      const index = state.fields.findIndex(
        (field) => field.name === action.payload.name
      );

      state.fields.splice(index, 1, {
        ...state.fields[index],
        value: action.payload.value,
      });
    },
    setConfig: (state, action: PayloadAction<FormConfig>) => action.payload,
  },
});

export const { changeFormField, setConfig } = formSlice.actions;

export const formReducer = formSlice.reducer;
