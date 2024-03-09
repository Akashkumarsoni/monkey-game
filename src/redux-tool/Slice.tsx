import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../common/PlayCardData";
import { shuffleCard } from "../common-functions/CommonFunctions";

const initialState = {
  game: shuffleCard(cardData),
  value: 0,
  amount: 1,
};

export const gameSlice = createSlice({
  name: "memorymonkeygame",
  initialState,
  reducers: {
    changeRotate: (state, actions) => {
      const temp = state.game.map((i: any) =>
        actions.payload.id === i.id ? { ...i, rotate: true } : i
      );
      return {
        ...state,
        game: temp,
      };
    },
    matching: (state, actions) => {
      const temp2 = state.game.map((i: any) => {
        if (actions.payload.s1.id === i.id) {
          return {
            ...i,
            img: "https://image.shutterstock.com/image-vector/check-mark-icon-tick-symbol-260nw-1938875785.jpg",
            match: "match",
            disable: true,
            clicked: true,
          };
        } else return i;
      });
      const temp3 = temp2.map((i: any) => {
        if (actions.payload.s2.id === i.id) {
          return {
            ...i,
            img: "https://image.shutterstock.com/image-vector/check-mark-icon-tick-symbol-260nw-1938875785.jpg",
            match: "match",
            disable: true,
            clicked: true,
          };
        } else
          return {
            ...i,
            disable: i.clicked ? true : !i.disable,
          };
      });
      return {
        ...state,
        game: temp3,
      };
    },
    notmatching: (state, actions) => {
      const temp2 = state.game.map((i: any) =>
        actions.payload.s1.id === i.id
          ? { ...i, rotate: false, clicked: true, disable: true }
          : i
      );
      const temp3 = temp2.map((i: any) =>
        actions.payload.s2.id === i.id
          ? { ...i, rotate: false, clicked: true, disable: true }
          : {
              ...i,
              disable: i.clicked ? true : !i.disable,
            }
      );
      return {
        ...state,
        game: temp3,
      };
    },
    gameover: (state, action) => {
      return {
        ...state,
        game: shuffleCard(cardData),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeRotate, matching, notmatching, gameover } = gameSlice.actions;

export default gameSlice.reducer; // gameReducer  in Store.js
