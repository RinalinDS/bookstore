import React from "react";

export const TitleOfTable = React.memo((props: { title: string }) => {
    return (
        <h1>{props.title}</h1>
    )
})