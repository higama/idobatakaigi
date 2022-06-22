import React from "react";
import { TextField } from "@material-ui/core";
import { RouterRounded } from "@material-ui/icons";

const MessageField = ({ name, setText, text }) => {
  console.log({ text });
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          console.log("push message to firebase");
          setText("");
          e.preventDefault(); // submitされないように
        }
      }}
      value={text}
    />
  );
};

export default MessageField;
