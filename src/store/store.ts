import {combineReducers, createStore} from "redux";
import {bookReducer} from "./bookReducer";



const reducers = combineReducers({
    books: bookReducer
})

export type AppRootStateType = ReturnType<typeof reducers>


export const store = createStore(reducers)

