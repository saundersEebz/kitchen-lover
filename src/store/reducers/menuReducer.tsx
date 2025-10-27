import { createSlice } from "@reduxjs/toolkit";

interface ButtonRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface StateType {
  isOpen: boolean;
  buttonRect: ButtonRect | null;
}

const initialState: StateType = {
  isOpen: false,
  buttonRect: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },

    setButtonRect: (state, action) => {
      const rect = action.payload;
      state.buttonRect = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    },
  },
});

export const { toggleMenu, setButtonRect } = menuSlice.actions;

export default menuSlice.reducer;
