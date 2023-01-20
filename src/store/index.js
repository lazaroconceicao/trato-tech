import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import intensSlice from './reducers/itens';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        intes: intensSlice,
    }
});

export default store;