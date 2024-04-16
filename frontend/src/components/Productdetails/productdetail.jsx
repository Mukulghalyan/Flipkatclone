import { Box, Table, TableBody, TableCell,TableRow, Typography,styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';


const SmallText = styled(Box)`
    font-size :14px;
    vertical-align:baseline;
    &>p{
      font-size:14px;
      margin-top:9px;
      
    }
`

const Styledbadge = styled(Badge)`
    margin-right:4px;
    color:green;
    font-size:20px
`
const Itemdetail=styled(Box)`
    margin-left:15px;
`
const Columntext= styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    &>td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`
const ProductDetail=({product})=>{
   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
   

   const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
   const date= new Date(new Date().getTime()+(5*24*60*60*1000));
     return(
      <>
      <Itemdetail>

      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{marginTop:5 ,color:'#878787',fontsize:14}}>
          8 Ratings & 1 Reviews
          <Box component="span"><img src={fassured} style={{width:77,marginLeft:20}}/></Box>
      </Typography>
      <Typography>
          <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;
          <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
         <Typography><Styledbadge/>Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
         <Typography><Styledbadge/>Get extra 13% off (price inclusive of discount) T&C </Typography>
         <Typography><Styledbadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*  Know More</Typography>
         <Typography><Styledbadge/>Buy 2 items save 5%;Buy 3 or more save 10% off T&C </Typography>
         <Typography><Styledbadge/>5% Cashback on Flipkart Axis Bank Card T&C </Typography>
         <Typography><Styledbadge/>No Cost on Bajaj Finserv EMI Card on cart Value above ₹2999 T&C </Typography>
      </SmallText>
      <Table>
         <TableBody>
            <Columntext>
                 <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                 <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
            </Columntext>
            <Columntext>
                 <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                 <TableCell>No Warranty</TableCell>
            </Columntext>
            <Columntext>
                 <TableCell style={{color:'#878787'}}>Seller</TableCell>
                 <TableCell>
                       <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                       <Typography>GST invoice available</Typography>
                       <Typography>14 days return policy</Typography>
                 </TableCell>
            </Columntext>
            <Columntext>
                 <TableCell colSpan={2}>
                        <img src={adURL} style={{width:390}} alt="flipkartpoints"/>
                 </TableCell>
            </Columntext>
            <Columntext>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>
            </Columntext>

         </TableBody>
      </Table>
      </Itemdetail>
      </>
     )
}


export default ProductDetail;