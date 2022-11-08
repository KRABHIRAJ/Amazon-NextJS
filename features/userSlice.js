import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};


export const getBasketTotal = (items) => {
    return items.map((item) => {
        return item.price;
    }).reduce((acc, num) => {
        return acc + Number(num*40);
    }, 0);
};

const userSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    ADD_TO_BASKET: (state, action) => {
      state.items = [action.payload, ...state.items];
    },

      REMOVE_FROM_BASKET: (state, action) => {
          const id = action.payload.id;
          const index = state.items?.map((item) => {
              return item.id;
          }).findIndex((currId) => {
              return currId === id;
          })
          state.items.splice(index, 1);
        
    },
  },
});

export const { ADD_TO_BASKET, REMOVE_FROM_BASKET } = userSlice.actions;

export const selectBasketItem = (state) => state.user.items;

export default userSlice.reducer;
