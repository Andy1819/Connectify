import { Box, Typography, Divider, IconButton, InputBase, styled } from "@mui/material";
import UserChatFriend from "screens/chatSection/UserChatFriend";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import WidgetWrapper from "components/WidgetWrapper";
import Footer from "./Footer";
import Chatheader from "./Chatheader";
import Messages from "./Messages";
import { getMsgs, newMessage } from "state";
import { getConversation } from "state";
import Message from "./Message"; // Import the Message component

const Component = styled(Box)`
  height: 48vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const ChatBox = ({ friendId }) => {
  console.log(friendId);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?._id)
  const [value, setValue] = useState("");
  const [conversation, setConversation] = useState({});

  // const chat = useSelector((state) => state.chat);
  // const { messages } = chat;

  useEffect(() => {
    const getConverDetails = async () => {
      let data = await getConversation({ senderId: userId, receiverId: friendId });
      setConversation(data);
      console.log(data)
    }
    getConverDetails();
  }, [friendId]);

  return (
    <WidgetWrapper>
      <Chatheader />
      <Messages friendId={friendId} conversation={conversation} />
      {/* <Footer sendText={sendText} value={value} setValue={setValue} /> */}
    </WidgetWrapper>
  );
};

export default ChatBox;
