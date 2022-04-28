import React, {useCallback} from "react";
import {EditableSpan} from "../common/EditableSpan";
import {useDispatch} from "react-redux";
import {changeBookTitleAC} from "../store/bookReducerAC";

interface propsType1 {
    id: string
    title: string
    callback: (id: string) => void

}

export const Book = (props: propsType1) => {
    const dispatch = useDispatch()
    const changeBookTitle = useCallback((title: string) => {
        dispatch(changeBookTitleAC(props.id, title))
    }, [props.id, dispatch])


    return (
        <div key={props.id}>
            <EditableSpan title={props.title} onChange={changeBookTitle} />

            <button onClick={() => props.callback(props.id)}>+ to fav</button>
        </div>
    )
}