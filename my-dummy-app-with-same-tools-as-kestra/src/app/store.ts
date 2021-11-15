//"configureStore" is a wrapper around the basic "createStore" function 
//what it does is automatically set some defaults like enabling redux-dev-tools, it automatically adds the "thunk" middleware
//also, it automatically turns on couple of development checks that catch common mistakes like excess omitation
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import {astronautApiSlice} from "../features/astronauts/astronaut-api-slice";


export const store = configureStore({
    //in the video at 38 minute, i have a question
    // if we would pass an object with a field and assign it to its specific reducer function than 
    // this would automatically call combined reducers, so that we would end up with a "state.counter" field in our state
    reducer: {
        counter: counterReducer,
        [astronautApiSlice.reducerPath]: astronautApiSlice.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(astronautApiSlice.middleware);
    }
    
});


//we extract type with "store.dispatch" and "store.getState" because we won't need to declare it by ourselves and as a
//bonus, this types will be updated by its own
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;