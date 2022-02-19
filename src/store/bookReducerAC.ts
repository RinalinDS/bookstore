export enum ACTIONS_TYPE {
    ADD_BOOK = "ADD_BOOK"
}


export type GeneralType = addBookAC


type addBookAC = {
    type: ACTIONS_TYPE.ADD_BOOK
    payload:{
        name: string
    }
}

export const addBookAC = (name: string) => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK,
        payload: {
            name
        }
    }
}