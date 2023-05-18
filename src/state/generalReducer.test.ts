import {generalReducer, IncrAC, initialStateType, IsHiddenAC, ResetAC} from "./generalReducer";

test('incr reducer should increment count', () => {
    const startState:initialStateType =  {
        count: 0,
        valueInputStart: 0,
        isHidden: true
    }

    const endState = generalReducer(startState, IncrAC())

    expect(endState.count).toBe(1)
    expect(startState.count).toBe(0)
})

test('count should be equal valueStart', () => {
    const startState:initialStateType =  {
        count: 0,
        valueInputStart: 0,
        isHidden: true
    }

    const endState = generalReducer(startState, ResetAC(startState.valueInputStart))

    expect(endState.count).toEqual(endState.valueInputStart)
    expect(startState.count).toBe(0)
})

test('isHidden should be switch to the opposite', () => {
    const startState:initialStateType =  {
        count: 0,
        valueInputStart: 0,
        isHidden: true
    }

    const endState = generalReducer(startState, IsHiddenAC())

    expect(endState.isHidden).toBe(false)
    expect(startState.isHidden).toBe(true)
})

