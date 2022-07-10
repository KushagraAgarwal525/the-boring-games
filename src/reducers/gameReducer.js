import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: "Catalog",
  restartButtonStyle: { display: "none" },
};

const gameReducer = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      return { ...state, game: action.payload };
    },
    // setRestartGame: (state, action) => {
    //   return { ...state, restartGame: action.payload };
    // },
    setRestartButtonStyle: (state, action) => {
      return { ...state, restartButtonStyle: action.payload };
    },
  },
});

export const { setGame, setRestartButtonStyle } = gameReducer.actions;
export default gameReducer.reducer;
