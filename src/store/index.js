import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import homeReducer from './home/HomeSlice'
import homeReducer from './home/homeSlice'
import { axiosInterceptor } from '@app/package/axios';
import ProductDetailsSlice from './product_details/ProductDetailsSlice';
import CartSlice from './cart/CartSlice'

const rootReducer = combineReducers({
  home:homeReducer,
  product:ProductDetailsSlice,
  cart:CartSlice
});

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['auth', 'inventory', 'offline'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  // enhancers: [batchedSubscribe(debounceNotify)],
});

// store.dispatch(AxiosInterceptor())
axiosInterceptor(store.dispatch);
// export type RootState = ReturnType<typeof store.getState>;

// const unsubscribe = store.subscribe(() => console.log("updated state"))
// unsubscribe();
// console.log("state after unsubscribe");

// export default store;
export const persistor = persistStore(store);
