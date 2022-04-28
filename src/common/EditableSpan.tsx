import React, {ChangeEvent, useState} from 'react';


export const EditableSpan = (props: { title: string, onChange: (title: string) => void }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(props.title)

    const onSpanDoubleClickHandler = () => setEditMode(true)
    const onBlurInputHandler = () => {
        props.onChange(newTitle)
        setEditMode(false)
    }
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)


    return (
        <>
            {editMode
                ?
                <input value={newTitle} onBlur={onBlurInputHandler} onChange={onInputChangeHandler} autoFocus/>
                : <span onDoubleClick={onSpanDoubleClickHandler}>{props.title}</span>

            }
        </>
    )
}

