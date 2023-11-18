import {configureStore} from "@reduxjs/toolkit";

import examReducer from "@/Store/modules/examStore";

const store = configureStore({
  reducer: {
    exam: examReducer
  }
})

export default store