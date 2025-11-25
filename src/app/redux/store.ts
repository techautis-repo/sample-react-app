import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './slice/sampleSlice'
import qtdeRenderizacoesReducer from './slice/qtdeRenderizacoesSlice'

export const store = configureStore({
  reducer: { 
    sample: sampleReducer,
    qtdeRenderizacoes: qtdeRenderizacoesReducer
  },
})
 
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch