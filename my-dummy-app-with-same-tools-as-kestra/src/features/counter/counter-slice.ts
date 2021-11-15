// the below is the basic slice from Modern Redux
// DUCKS Pattern
//createSlice - It is a main api function you use to define your redux logic
//PayloadAction - This is the content of one given action object
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}


const initialState : CounterState = {
    value: 10,
};


//This slice function has a couple fileds in it, one the reducer functions for all the cases that we define and 
//it also has the generated action creator for each of the generated function inside the reducers field

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment
        // in the below function we don't need to use "..." to return the immutable object that we do in a normal redux
        // because we are using "redux/toolkit", it has a library called "immer" that takes care of this
        // so this drastically shorten our code as we don't need to use "..." to make the object immutable
        incremented(state){
            state.value++;
        },
        amountAdded(state, action:PayloadAction<number>){
            state.value += action.payload;
        }
        //decrement
        //reset
    }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;



