import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store' 
 
 export interface QtdeRenderizacoesState {
     value: number
 }
 
 const initialState: QtdeRenderizacoesState = {
     value: 0
 }

export const qtdeRenderizacoesSlice = createSlice({
  name: 'qtdeRenderizacoes',
  initialState,  
  reducers: {
    setQtdeRenderizacoes: (state, action: PayloadAction<number>) => { 
      state.value = action.payload
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setQtdeRenderizacoes } = qtdeRenderizacoesSlice.actions

export const selectQtdeRenderizacoes = (state: RootState) => state.qtdeRenderizacoes.value

export default qtdeRenderizacoesSlice.reducer