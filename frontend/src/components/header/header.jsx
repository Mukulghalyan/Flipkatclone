
import {AppBar, Toolbar , Box, styled,IconButton ,Drawer,List,ListItem, Typography} from '@mui/material';
import Search from './searchbar';
import Customerbtn from './customerbtn';
import {Menu} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Styled = styled(AppBar)`
     background: #2874f0;
     height: 55px;
     padding-bottom: 50px;
`
const Component=styled(Link)`
    margin-left: 12%;
    line-height: 0;
    margin-bottom:10px;
    color: inherit;
    
`
const Subheading = styled(Typography)`
     font-size: 10px;
     font-style: italic;
`
const Plusimage= styled('img')({
    width:10,
    height:10
})

const Customerwrapper= styled(Box)(({theme})=>({

    margin:'0 1% 0 auto',
    [theme.breakpoints.down('md')]:{
       display:'none'
    }
}));

const MenuIcon=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))




const Header = ()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleclose=()=>{
        setOpen(false);
    }

    const list=()=>(
        <Box style={{width:200}} >
            <List>
                <ListItem Button>
                      <Customerbtn/>
                </ListItem>
            </List>
        </Box>
    )

    

    return(
        <Styled>
            <Toolbar>
               <MenuIcon color="inherit" onClick={handleOpen}>
                 <Menu />
               </MenuIcon>
               <Drawer open={open} onClose={handleclose}>
                 {list()}
                </Drawer>
            <Component to='/' style={{textDecoration: 'none'}}>
             <img src={logoURL} alt="logo" style={{width:75}}/>
             <Box style={{display:'flex'}}>
                <Subheading >Explore&nbsp;
                    <Box component="span" style={{color:'#FFE500'}}>Plus&nbsp;</Box> 
                </Subheading>
                <Plusimage src={subURL} alt="sub-logo"/>
             </Box>
            </Component>
            <Search/>
            <Customerwrapper>
             <Customerbtn/>
            </Customerwrapper>
            </Toolbar>
        </Styled>
    )
}

export default Header;