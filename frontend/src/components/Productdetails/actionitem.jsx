import {ShoppingCart as Cart , FlashOn as Flash  } from '@mui/icons-material';

import {Box, Button , styled} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addtocart } from '../../redux/actions/cartaction';
import { useState } from 'react';



const Leftwrapper=styled(Box)(({theme})=>({

   minWidth:'40%',
   padding: '40px 0 0 80px',
   [theme.breakpoints.down('lg')]:{
      padding:'20px 40px'
   }
}))

const Image=styled('img')({
   width:'90%',
   padding:'15px'
});

const StyleButton = styled(Button)(({theme})=>({

   width:'46%',
   height:50,
   borderRadius:2,
   [theme.breakpoints.down('lg')]:{
      width:'44%',
      fontSize:8
   },
   [theme.breakpoints.down('sm')]:{
      width:'46%'
   }


}))



const Actionitem =({product})=>{
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const [quantity,setQuantity]=useState(1);

   const {id}=product;

   const addItemCart=()=>{
      dispatch(addtocart(id,quantity));
       navigate('/Cart');
   }
    return(
       <Leftwrapper>
         <Box  style={{padding:'15px 20px',border:'1px solid #f0f0f0'}}>
           <Image src={product.detailUrl} alt={product} />
         </Box>
         <Box >
           <StyleButton variant="contained" onClick={()=>addItemCart()} style={{marginLeft:14,background:'#ff9f00'}}><Cart/>Add to Cart</StyleButton>
           <StyleButton variant="contained" style={{marginLeft:4,background:'#fb541b'}}><Flash/>Buy Now</StyleButton>
         </Box>
       </Leftwrapper>
    )
}

export default Actionitem;