import { Box, Typography, useTheme } from "@mui/material";
import UserChatFriend from "screens/chatSection/UserChatFriend";
import WidgetWrapper from "components/WidgetWrapper";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";

const ScrollableBox = styled(Box)`
  overflow-y: auto;
  max-height: 69vh;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background: ${({ mode }) => (mode === "light" ? "#f0f0f0" : "#ggg")};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ mode }) => (mode === "light" ? "#ccc" : "#fff")};
  }
`;

const FriendListWidget = () => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const mode = useSelector((state) => state.mode);

  // const [ text, setText ] = useState('');

  // const getFriends = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/users/${userId}/friends`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setFriends({ friends: data }));
  // };

  // useEffect(() => {
  //   getFriends();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>

      
      <Search/>
      
      <Divider sx={{ mb: "1.5rem" }} />
      <ScrollableBox mode={mode}>
        {Array.isArray(friends) &&
          friends.map((friend) => (
            <UserChatFriend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))}
        {friends.length === 0 && (
          <Typography color={palette.neutral.medium}>
            It looks like you haven't made any friends yet. Start forging
            meaningful connections today!
          </Typography>
        )}
      </ScrollableBox>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
