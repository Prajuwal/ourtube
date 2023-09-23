import { configureStore,combineReducers} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import resultSlice from "./resultSlice";


const rootReducer = combineReducers({
  app: appSlice,
  result: resultSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store


