
export type initialStateType = {
    count: number
    valueInputStart: number
    valueInputMax: number
    isHidden: boolean
}

export const initialState: initialStateType = {
    count: 0,
    valueInputStart: 0,
    valueInputMax: 0,
    isHidden: true
}


type IncrAT = ReturnType<typeof IncrAC>

type ResetAT = ReturnType<typeof ResetAC>

type IsHiddenAT = ReturnType<typeof IsHiddenAC>

type ActionType = IncrAT | ResetAT | IsHiddenAT


export const countReducer = (state:initialStateType = initialState, action: ActionType): initialStateType => {
    if (action.type === "INCR-VALUE-INPUT") {
            return {
                ...state, count: state.count + 1
            }
    }
    if (action.type === "RESET") {
        return {
            ...state, count: action.valueInputStart
        }
    }
    if (action.type === "IS-HIDDEN") {
        return {
            ...state,
            isHidden: !state.isHidden
        }
    } else {
        return state
    }
}

export const IncrAC = () => ({
  type: "INCR-VALUE-INPUT"
} as const)

export const ResetAC = (valueInputStart: number)  => {
    return {
        type: "RESET",
        valueInputStart
    } as const
}

export const IsHiddenAC = () => ({
    type: "IS-HIDDEN"
} as const)