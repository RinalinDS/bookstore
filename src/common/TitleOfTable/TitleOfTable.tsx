import React from "react";
import {EditableSpan} from "../EditableSpan";

export const TitleOfTable = React.memo((props: { title: string }) => {
  return (
    <h1>
      <EditableSpan title={props.title} onChange={() => {
      }}/>
    </h1>
  )
})