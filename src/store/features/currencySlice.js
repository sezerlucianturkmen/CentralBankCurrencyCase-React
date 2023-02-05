import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import currencyService from '../../config/CurrencyService'

const initialStateCurrency = {
  currency: {},
  currencyList: [],
  isAsked: false,
  isLoading: false,
  data: [],
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const getCurrencies = createAsyncThunk('currency/askcurrency', async (payload) => {
  try {
    const response = await fetch(currencyService.askCurrencies, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error))
    return response
  } catch (err) {
    return err.response
  }
})

const currencySlice = createSlice({
  name: 'currency',
  initialState: initialStateCurrency,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(getCurrencies.pending, (state) => {
      state.isLoading = true
      state.isAsked = false
    })
    build.addCase(getCurrencies.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      if (Array.isArray(action.payload)) {
        state.currencyList = action.payload
        state.isLoading = false
        state.isAsked = true
        if (state.isAsked === false) {
          state.isAsked = true
        } else {
          state.isAsked = false
        }
      } else {
        state.error = action.payload
        console.log(action.payload.message)
        alert(action.payload.message)
        state.isLoading = false
        state.currencyList = []
      }
    })
    build.addCase(getCurrencies.rejected, (state) => {
      state.isLoading = false
      state.isAsked = false
    })
  },
})

export default currencySlice.reducer
