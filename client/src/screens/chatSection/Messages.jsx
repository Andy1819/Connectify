import { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Message from './Message';
import { getMsgs, newMessage } from 'state';

const Wrapper = styled(Box)`
    background-image: url(${'https://i.pinimg.com/1200x/26/88/9f/26889fb85cb76049f09b4ca91ef42a4d.jpg'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 74vh;
    overflow-y:scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({ friendId, conversation }) => {
    

    const [value, setValue] = useState('');
    const [msg, setMsg] = useState('');
    const [newmsg, setNewmsg] = useState(false);
    const userId = useSelector((state) => state.user?._id)
    // const [ file, setFile ] = useState();

    useEffect(() => {
        const getmsgDetails = async () => {
            let data = await getMsgs(conversation._id);
            setMsg(data);
        }
        conversation._id && getmsgDetails();
    },[conversation._id, friendId, newmsg])

    const sendText = async (e) => {
        console.log(e);
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: userId,
                receiverId: friendId,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
            await newMessage(message);
            setValue('');
            setNewmsg(prev => !prev);
        }
        else{
            console.log("error");
        }
    }

    return (
        <Wrapper>
            <Component>
                {
                    msg && msg.map(message => (
                        <Container>
                            <Message message={message} />
                        </Container>
                    ))
                }
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
            // file={file}
            // setFile={setFile}
            />
        </Wrapper>
    )
}

export default Messages;