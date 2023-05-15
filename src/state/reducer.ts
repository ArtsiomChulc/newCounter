

type IncrAT = {
    type: "INCR-VALUE-INPUT"
}

type ResetAT = {
    type: "RESET",
    valueInputStart: number
}

type ActionType = IncrAT | ResetAT


export const incrReducer = (count: number, action: ActionType): number => {
    if (action.type === "INCR-VALUE-INPUT") {
            return count + 1
    } else if (action.type === "RESET") {
        return action.valueInputStart
    } else {
        return count
    }
}