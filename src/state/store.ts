import {combineReducers, createStore} from "redux";
import {generalReducer} from "./generalReducer";



const rootReducer = combineReducers({
    count: generalReducer
})

// type RootTypeState = {
//     count: number
//     isHidden: boolean
// }

export type RootTypeState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



// @ts-ignore
window.store = store

