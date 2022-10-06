import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from './auth';
import popupReducer from './popup';
import productReducer from './product'



const middlewareState = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = combineReducers({
  auth: authReducer,
  popup: popupReducer,
  product:productReducer,
 
});

const persistConfig = {//
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  //middlewareState,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

let persistor = persistStore(store);

export default store;
export {persistor};
