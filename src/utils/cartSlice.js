import { createSlice, current } from "@reduxjs/toolkit";

//let x= ["1",2,3,4];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state));
      state.items.length = 0;
      // or return{items:[]}; redux says either mutate the existing state or return new state
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
