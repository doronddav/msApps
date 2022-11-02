import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  dataPlace: 0,
  endPoint: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    //Increment will change pages by 9 photos every time.
    // if there are less than 9 photos, in the end, the data will be , length less than 9 for full 9*9 photosto display
    //
    increment: (state) => {
      if (state.dataPlace + 9 > state.data.length - 9) {
        state.dataPlace = state.data.length - 9;
      } else state.dataPlace += 9;
    },
    //decrement will change pages by 9 photos if there are less than 9 photos. their first data will be the first object
    decrement: (state) => {
      if (state.dataPlace < 9) state.dataPlace = 0;
      else state.dataPlace -= 9;
    },
    setData: (state, data) => {
      state.data = data.payload;
    },
    //The category of the URL. this value will be the endpoint in fetch function
    chooseEndPoint: (state, endPoint) => {
      state.endPoint = endPoint.payload;
    },
  },
});

export const { increment, decrement, setData, chooseEndPoint } =
  dataSlice.actions;

export default dataSlice.reducer;
