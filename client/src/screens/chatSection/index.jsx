import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Send, Photo, Mic, EmojiEmotions } from "@mui/icons-material"; // Import icons
import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "screens/navbar";
import FriendListWidget from "./FriendListWidget";
import ChatBox from "./ChatBox";
import Emptychat from "./EmptyChat";

const ChatSection = () => {
  const friendId = useSelector((state) => state.chatFriend ? state.chatFriend.friendId : null);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      sx={{
        backgroundImage: `url('/background_image.jpg')`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        width="100%"
        padding="1rem 1%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box
          flexBasis={isNonMobileScreens ? "35%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <FriendListWidget />
          <Box m="2rem 0" />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "65%" : undefined}
          position="relative"
        >
          {friendId ? (
            <ChatBox friendId={friendId} />
          ) : (
            <Emptychat />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatSection;
