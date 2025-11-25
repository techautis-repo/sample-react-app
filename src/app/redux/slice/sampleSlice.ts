import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type Sample = {
    id: string
    name: string
}

export interface SampleState {
    value?: Sample
}

const initialState: SampleState = {
    value: undefined
}

export const sampleSlice = createSlice({
  name: 'sample',
  initialState,  
  reducers: {
    setSample: (state, action: PayloadAction<Sample|undefined>) => { 
      state.value = action.payload
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setSample } = sampleSlice.actions

export const selectSample = (state: RootState) => state.sample.value

export default sampleSlice.reducer