import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  skill: [],
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      const { skill } = action.payload;
      state.skill = skill;
    },
  },
});

export const { addSkill } = skillSlice.actions;

export default skillSlice.reducer;
