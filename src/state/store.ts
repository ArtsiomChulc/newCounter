import {combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";



const rootReducer = combineReducers({
    count: countReducer
})

// type RootTypeState = {
//     count: number
//     isHidden: boolean
// }

export type RootTypeState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



// @ts-ignore
window.store = store

