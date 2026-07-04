import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employeePopup: false,
  deletePopup: false,
};

export const popupSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    openEmployeePopup: (state, action) => {
      // If payload is undefined, set true
      state.employeePopup = action.payload ?? true;
    },
    closeEmployeePopup: (state) => {
      state.employeePopup = false;
    },

    openDeletePopup: (state, action) => {
      // If payload is undefined, set true
      state.deletePopup = action.payload ?? true;
    },
    closeDeletePopup: (state) => {
      state.deletePopup = false;
    },

  },
});

// Action creators are generated for each case reducer function
export const { openEmployeePopup, closeEmployeePopup,openDeletePopup,closeDeletePopup } = popupSlice.actions;

export default popupSlice.reducer;