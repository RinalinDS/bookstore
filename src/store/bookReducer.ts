
import {ACTIONS_TYPE, GeneralType} from "./bookReducerAC";

type stateType = Array<string>

export const bookReducer  = (state: stateType, action: GeneralType): stateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_BOOK:
            return [...state, action.payload.name]
        default:
            return state
    }

}



