import { createStore } from "redux";
import appReducer from "./reducers/reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['settings', 'statistics']
}

const persistedReducer = persistReducer(persistConfig, appReducer)

// create store "redux" for state management
export const store = createStore(persistedReducer);
// and persistor from 'redux-persist' for persisting the app state
export const persistor = persistStore(store)


