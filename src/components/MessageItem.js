import React, { useEffect, useRef } from "react";

import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
