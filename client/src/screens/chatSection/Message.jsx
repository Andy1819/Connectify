import { Box, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';


const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const min = new Date(date).getMinutes();
  return `${hours<10 ? '0'+hours : hours}:${min<10 ? '0'+min : min}`;
}

const Sendermsg = styled (Box)`
    background:#fff;
    max-width:60%;
    margin-left:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Receivermsg = styled (Box)`
    background:#D7A1F9;
    max-width:60%;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size:16px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size:14px;
    color:grey;
    margin-top:6px;
    word-break:keep-all;
    margin-top:auto;
`;

const Message = ({message}) => {

    const userId = useSelector((state) => state.user?._id);

    return (
        <>
            {
                userId === message.senderId ?
                    <Sendermsg>
                        <Text key={message._id}>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Sendermsg>
                :
                    <Receivermsg>
                        <Text key={message._id}>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Receivermsg>
            }
        </>
    )
}

export default Message;