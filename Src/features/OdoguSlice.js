import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    duration: null
}

export const oduguSlice = createSlice({
    name: 'logic',
    initialState,
    reducers: {
        getOrigin: (state, action) => {
            state.origin = action.payload
        },
        getDestination: (state, action) => {
            state.destination = action.payload
        },
        getDuration: (state, action) => {
            state.duration = action.payload
        },

    },
})


export const { getDuration, getOrigin, getDestination } = oduguSlice.actions

export const selectOrigin = (state) => { state.odogu.origin };
export const selectDestination = (state) => { state.odogu.destination };
export const selectduration = (state) => { state.odogu.duration };



export default oduguSlice.reducer