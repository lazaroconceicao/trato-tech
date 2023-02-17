import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import itensService from 'services/itens';
import { v4 as uuid } from 'uuid';

export const buscarItens = createAsyncThunk(
  'categorias/buscar',
  itensService.buscar
);

const itensSlice = createSlice({
  name: 'itens',
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    },
    cadastrarItem: (state, {payload}) => {
      state.push({...payload, id: uuid() });
    },
    mudarItem: (state, {payload}) => {
      const index = state.findIndex(item => item.id === payload.id);
      Object.assign(state[index], payload.item)
    },
    deletarItem: (state, {payload}) => {
      const index = state.findIndex(item => item.id === payload );
      state.splice(index, 1)
      // return state.filter(item => item.id !== payload);n
    },
    adicionarItens: (state, {payload}) => {
      state.push(...payload)
    }
  },
  extraReducers: build => {
    build.addCase(
      buscarItens.fulfilled,
      (state, {payload}) => {
        state.push(...payload)
      }
    )
  }
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem, adicionarItens} = itensSlice.actions

export default itensSlice.reducer;