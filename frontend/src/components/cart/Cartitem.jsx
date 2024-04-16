

import { Box,Typography,styled,Button } from "@mui/material";
import { addellipsis } from "../../utils/common-utils";
import Buttongrp from './buttongroup';
import { removetocart } from "../../redux/actions/cartaction";
import { useDispatch } from "react-redux";




const Component=styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`;

const Leftcomponent= styled(Box)`
    margin: 20px;
    display:flex;
    flex-direction:column;

`;

const Seller=styled(Typography)`
     color:#878787;
     font-size:14px;
     margin-top:10px;
`;

const Remove=styled(Button)`
     margin-top:20px;
     font-size:16px;
     color:#000;
     font-weight:600
`

const Cartitem=({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch=useDispatch();

    const Removeitemcart =(id)=>{
        dispatch(removetocart(id));
    }

    return(
        <Component>
            <Leftcomponent>
                <img src={item.url} alt="product" style={{height:110,width:110}}/>
                <Buttongrp/>
            </Leftcomponent>
            <Box style={{margin:20}}>
                <Typography>{addellipsis(item.title.longTitle)}</Typography>
                <Seller>Seller:ReatilNet
                    <Box component="span"><img src={fassured} alt="flipkart" style={{width:50,marginLeft:10}} /> </Box>
                </Seller>
                <Typography style={{margin:'20px 0'}}>
                    <Box component="span" style={{fontWeight:600 ,fontSize:18}}>₹{item.price.cost}</Box>&nbsp;
                    <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=>Removeitemcart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default Cartitem;