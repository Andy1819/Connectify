import { Box, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import { setChatFriend } from "state";
import Emptychat from "./EmptyChat";
import { setConversation } from "state";

// props data came from the PostWidget.jsx and FriendListWidget.jsx
const UserChatFreind = ({ friendId, name, subtitle, userPicturePath, online = false }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const userId = useSelector((state) => state.user?._id);

  const getuser = async () => {
    await setConversation({ senderId: userId, receiverId: friendId })
}


  // String 
  return (
    <FlexBetween
      onClick={() => {
        const friendData = {
          friendId,
          name,
          online: true,
          userPicturePath,
        };
        getuser();
        dispatch(setChatFriend(friendData));
      }}
      sx={{
        "&:hover": {
          color: palette.primary.light,
          cursor: "pointer",
        },
        mb: "1.5rem"
      }}
    >
    {friendId.length!==0 ? 
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
          >
            {name}
          </Typography>
          {online === true ? "Online" : 
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
            {/* Online */}
          </Typography>}

        </Box>
      </FlexBetween>

      :

      <Emptychat />}
    </FlexBetween>
  );
};

export default UserChatFreind;
