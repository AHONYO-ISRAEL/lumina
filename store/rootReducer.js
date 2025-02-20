import { combineReducers } from "@reduxjs/toolkit";

import utilsReducer from './utilsSlice.js'

const rootReducer = combineReducers({
  utils : utilsReducer
})


export default rootReducer