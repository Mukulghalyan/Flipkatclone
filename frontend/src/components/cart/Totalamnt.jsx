import { Typography ,Box,styled} from "@mui/material";
import { useState,useEffect } from "react";



const Heading= styled(Box)`
     padding: 15px 24px;
     border-bottom: 1px solid #f0f0f0;

`
const ActualHeading = styled(Typography)`
     color:#878787;
`
const Allamountdetails = styled(Box)`
     padding: 15px 24px;
     &>p{
        margin-bottom:20px;
        font-size:14px;
     }
`
const Price=styled(Box)`
     float:right;
`
const Discount=styled(Typography)`
     color: green;
     margin-top:10px;
     font-weight:500;
`

const Totalamnt=({cartItems})=>{
    const[price,setPrice]=useState(0);
    const[discount,setdiscount]=useState(0);
    
    useEffect(()=>{
        totalamount();
    },[cartItems])
    const totalamount=()=>{
    let price=0,discount=0;
    cartItems.map(item=>{
        price+=item.price.mrp;
        discount+=(item.price.mrp - item.price.cost);
    });
    setPrice(price);
    setdiscount(discount);
}
    return(
       <Box style={{background:'#fff'}}>
          <Heading>
            <ActualHeading>PRICE DETAILS</ActualHeading>
          </Heading>
          <Allamountdetails>
            <Typography>Price({cartItems?.length} item)
                 <Price component="span">{price}</Price>
            </Typography>
            <Typography>Discount
                 <Price component="span">-₹{discount}</Price>
            </Typography>
            <Typography style={{borderBottom: '1px solid #f0f0f0'}}>Delivery Charges
                 <Price component="span">₹20</Price>
            </Typography>
            <Typography variant={"h6"}>Total Amount
                 <Price component="span">₹{price-discount+20}</Price>
            </Typography>
            <Discount>You will save ₹{discount-20} on this order</Discount>
          </Allamountdetails>
       </Box>
    )
}

export default Totalamnt;