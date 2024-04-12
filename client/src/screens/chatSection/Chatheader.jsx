import { Typography, Divider, IconButton } from "@mui/material";
import { Call, VideoCall, Settings } from "@mui/icons-material";
import UserChatFriend from "screens/chatSection/UserChatFriend";
import { useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const Chatheader = () => {
  const chatFriend = useSelector((state) => state.chatFriend);

  // Check if chatFriend is null before destructure
  const { friendId, name, online, userPicturePath } = chatFriend || {};

  return (
    
    <WidgetWrapper m="0 0 10 10"
    >
        <FlexBetween>
          {friendId ? (
            <UserChatFriend {...{ friendId, name, online, userPicturePath }} />
          ) : (
            <Typography variant="body1">No friend selected</Typography>
          )}
          <FlexBetween>
            <IconButton aria-label="Phone call">
              <Call />
            </IconButton>
            <IconButton aria-label="Video call">
              <VideoCall />
            </IconButton>
            <IconButton aria-label="Settings">
              <Settings />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <Divider sx={{ mb: "1.5rem" }} />
    </WidgetWrapper>
  );
};

export default Chatheader;
