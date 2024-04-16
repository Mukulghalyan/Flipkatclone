import { Typography,Box,styled} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component= styled(Menu)`
     margin-top:5px;
`;

const Loggout = styled(Typography)`
    font-size:14px;
    margin-left:10px;
`



const Profile =({account , setAccount})=>{

    const[open,setOpen] = useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const Logout=()=>{
        setAccount('');
    }

    return(
        <>
          <Box onClick={handleClick}>
             <Typography style={{marginTop:2, cursor:'pointer'}}>{account}</Typography></Box>

             <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
             >
             <MenuItem onClick={()=>{handleClose(); Logout();}}>
                <PowerSettingsNewIcon color="primary" fontSize="small"/>
                <Loggout>Logout</Loggout>
                </MenuItem>
             </Component>

        </>
    )
}

export default Profile;