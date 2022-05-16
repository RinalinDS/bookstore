import React from "react";
import {EditableSpan} from "../EditableSpan";

export const TitleOfTable = React.memo((props: { title: string }) => {
  return (
    <>
      <EditableSpan title={props.title} onChange={() => {}}/>
    </>
  )
})