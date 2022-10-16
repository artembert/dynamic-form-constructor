/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { FormFieldConfig, InputValue } from "../../../types/input-fields";
import { formConfigMock } from "../../../data/form-config";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  fields: FormFieldConfig[];
};

const initialState: CounterState = {
  fields: formConfigMock,
};

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
  },
});

// Action creators are generated for each case reducer function
export const { changeFormField } = formSlice.actions;

export const formReducer = formSlice.reducer;
