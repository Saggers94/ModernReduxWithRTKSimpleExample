import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch } from "./store";


//SO, what we have done below is exporting hooks variables that is strictly typed and when we would use
//it in our components, we would use this instead of using the base typed functions

//through generics we can type the function, for example: "useDispatch<AppDispatch>()"
export const useAppDispatch = () => useDispatch<AppDispatch>();

//below we are aliasing the "useSelector" function but with a "RootState" type
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector; 