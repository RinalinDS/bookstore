import React from "react";

interface propsType1 {
    id: string
    title: string
    callback: (id: string) => void
}

export const Book = (props: propsType1) => {
    return (
        <div key={props.id}> {props.title}
            <button onClick={() => props.callback(props.id)}>+ to fav</button>
        </div>
    )
}