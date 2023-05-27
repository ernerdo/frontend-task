import {
  Action,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { contactsReducer, ContactsState } from './slices/contactsSlice'

interface RootState {
  contacts: ContactsState
}

const rootReducer: Reducer<RootState, Action<string>> = combineReducers({
  contacts: contactsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
