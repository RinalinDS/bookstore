import React, {ChangeEvent, useState} from "react";


type propsType = {
    buttonName: string
    callback: (title: string) => void
}

export const UniversalAddingForm = (props: propsType) => {

    const [title, setTitle] = useState<string>('')

    const onInputChangeHandler =(e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItem =  () => {
        if (title) {
            props.callback(title)
            setTitle('')
        }
    }

    return (
        <>
            <input value={title} onChange={onInputChangeHandler}/>
            <button onClick={addItem}>{props.buttonName}</button>
        </>
    )
}