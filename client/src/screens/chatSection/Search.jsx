
import { Box, InputBase, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Component = styled(Box)`
    background: #black;
    height: 42px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
`;

const Wrapper = styled(Box)`
    position: relative;
    border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
    ${'' /* background-color: ${({mode}) => (mode === "light" ? "#pink" : "#orange")}; */}
`;

const Icon = styled(Box)`
    
    padding: 6px;
    height: 100%;
    position: absolute;

`;
      
const InputField = styled(InputBase) `
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 18px;
    height: 15px;
    width: 100%;
`;

const Search = () => {

    const mode = useSelector((state) => state.mode);

    return (
        <Component>
            <Wrapper mode={mode}>
                <Icon>
                    <SearchIcon fontSize="small"/>
                </Icon>
                <InputField
                    placeholder="Search..."
                    // onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default Search;