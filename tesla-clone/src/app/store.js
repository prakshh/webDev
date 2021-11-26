import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// commented because counter folder deleted from features folder
import carReducer from "../features/car/carSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car: carReducer
  },
});
