import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'services/categorias';

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategoria: (state, {payload}) => {
      state.push(...payload)
    }
  },
  extraReducers: builder => {
    builder.addCase(
      buscarCategorias.fulfilled,
      (state, {payload}) => {
        state.push(...payload)
      }
    )
  }
});

export const { adicionarCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;