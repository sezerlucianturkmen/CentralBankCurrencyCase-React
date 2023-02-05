import { configureStore } from '@reduxjs/toolkit'
import { CurrencySlice } from './features'

const store = configureStore({
  reducer: {
    currency: CurrencySlice,
  },
})
export default store
