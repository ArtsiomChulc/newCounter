import {incrReducer} from "./reducer";

test('incr reducer should increment count', () => {
    const startState =  0

    const endState = incrReducer(startState, {type: "INCR-VALUE-INPUT"})

    expect(endState).toBe(1)
    expect(startState).toBe(0)
})

