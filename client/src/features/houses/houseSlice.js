import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import houseService from './houseService';
import errorMessage from '../../utilities/errorMessage';

const initialState = {
  houses: null,
  house: null,
};

export const getAllHouses = createAsyncThunk(
  'houses/getAll',
  async (_, thunkAPI) => {
    try {
      return await houseService.getAllHouses();
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error));
    }
  }
);

export const houseSlice = createSlice({
  name: 'house',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllHouses.pending, (state) => {
        state.houses = null;
      })
      .addCase(getAllHouses.fulfilled, (state, action) => {
        state.houses = action.payload;
      });
  },
});

export default houseSlice.reducer;
