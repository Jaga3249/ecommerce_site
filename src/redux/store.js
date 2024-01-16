import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import productReducer from "./ProductSlice";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, productReducer)
export const store = configureStore({
  reducer: {
    product: persistedReducer,
  },
  
});

export const persistor = persistStore(store)
