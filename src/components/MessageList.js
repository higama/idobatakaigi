import React, { useEffect, useState } from "react";
import { makeStyles, List } from "@material-ui/core";

import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: "auto",
    width: "100%",
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      // .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key: key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;
        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
