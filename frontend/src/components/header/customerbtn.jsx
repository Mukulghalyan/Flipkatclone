import {useContext, useState} from "react";
import {Box, Button, Typography,styled,Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Loginuser from '../login/loginuser';
import { Datacontext } from '../../context/dataprovider';
import Profile from "./profile";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Customerlogin=styled(Box)(({theme})=>({

    display: 'flex', 
    margin: '0 3% 0 auto',
    justifyContent:'center',
    '& > *':{
        marginRight:'40px !important',
        fontSize:16,
        alignItems: 'center',
        
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
    

const Cart=styled(Link)(({theme})=>({
      textDecoration:'none',
      display:'flex',
      color:'inherit',
      [theme.breakpoints.down('md')]:{
        display:'block'
      }
}));

const Login=styled(Button)`
      margin-bottom:8px;
      color: #2874f0;
      background: #fff;
      Text-transform: none;
      padding:5px 40px;
      font-weight:600;
      height: 32px;
      
`

const Customerbtn=()=>{
    const[open,setOpen]= useState(false);
    const{account,setAccount}=useContext(Datacontext);

    const {cartItems}=useSelector(state=>state.cart);
    
    const openDialog=()=>{
        setOpen(true);
    }
    

    return(
        <Customerlogin>
            {
                account?<Profile account={account} setAccount={setAccount}/>:
                <Login variant="contained" onClick={()=> openDialog()}>Login</Login>

            }

            <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>

            <Cart to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon style={{marginBottom:7}}/>
                <Typography style={{marginBottom:7}} >Cart</Typography>
                </Badge>
            </Cart>
            <Loginuser Open={open} SetOpen={setOpen} />
        </Customerlogin>
    )
}

export default Customerbtn;