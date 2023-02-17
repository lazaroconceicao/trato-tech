import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategoria: (state, {payload}) => {
      state.push(...payload)
    }
  }
});

export const { adicionarCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;