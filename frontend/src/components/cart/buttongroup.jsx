

import {Button,ButtonGroup,styled} from '@mui/material';

const Buttonstyle=styled(ButtonGroup)`
    margin-top:20px;
`
const StyleButton =styled(Button)`
    border-radius:50px;
`

const Buttongrp =()=>{
    return(
    <Buttonstyle>
        <StyleButton>-</StyleButton>
        <StyleButton>1</StyleButton>
        <StyleButton>+</StyleButton>
    </Buttonstyle>
    )
}

export default Buttongrp;