import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasSeenOnboarding : false
}

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setUtil(state, action){
      return {...state, ...action.payload}
    }
  }
})

export const {setUtil} = utilsSlice.actions
export default utilsSlice.reducer