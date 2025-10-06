import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import requestReducer from './requestsSlice'
import connectionReducer from './connectionSlice'

const appStore = configureStore({
  reducer: {
    user : userReducer,
    feed : feedReducer,
    requests : requestReducer,
    connection : connectionReducer,
  },
})

export default appStore