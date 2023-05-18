import {combineReducers, createStore} from "redux";
import {generalReducer} from "./generalReducer";



const rootReducer = combineReducers({
    count: generalReducer
})


export type RootTypeState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



// @ts-ignore
window.store = store

