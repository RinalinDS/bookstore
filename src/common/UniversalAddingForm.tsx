import React, {ChangeEvent, useState, KeyboardEvent} from "react";


type propsType = {
    buttonName: string
    callback: (title: string) => void
}

export const UniversalAddingForm = React.memo((props: propsType) => {

    const [title, setTitle] = useState<string>('')

    const onInputChangeHandler =(e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItem =  () => {
        if (title.trim()) {
            props.callback(title)
            setTitle('')
        }
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter') {
            addItem()
        }
    }

    return (
        <>
            <input value={title} onChange={onInputChangeHandler} onKeyPress={onEnterPressHandler}/>
            <button onClick={addItem}>{props.buttonName}</button>
        </>
    )
})