import { configureStore } from '@reduxjs/toolkit'
import OdoguSlice from './OdoguSlice'

export const store = configureStore({
    reducer: OdoguSlice
})