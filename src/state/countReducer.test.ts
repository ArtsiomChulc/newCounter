import {countReducer, IncrAC, initialState, ResetAC} from "./countReducer";

test('incr reducer should increment count', () => {
    const startState =  initialState

    const endState = countReducer(startState, IncrAC())

    expect(endState.count).toBe(1)
    expect(startState.count).toBe(0)
})

// test('count should be equal valueStart', () => {
//     const startState =  initialState
//
//     const endState = countReducer(startState, ResetAC(valueInputStart))
//
//     expect(endState.count).toBe(endState.valueInputStart)
//     expect(startState.count).toBe(0)
// })

