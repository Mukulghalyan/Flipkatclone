
import {useSelector} from 'react-redux';
import {Grid ,Typography,Box,styled, Button} from '@mui/material';
import Cartitem from './Cartitem';
import Totalamnt from './Totalamnt';
import Emptycart from './emptycart';


const Container=styled(Grid)(({theme})=>({
   padding:'30px 135px',
   [theme.breakpoints.down('sm')]:{
    padding:'15px',
 }
}))
;


const Header=styled(Box)`
     padding:15px 24px;
     background:#fff;
`;

const Placebutton =styled(Box)`
     padding:16px 22px;
     box-shadow:0 -2px 10px 0 rgb(0 0 0/ 10%);
     border-top: 1px solid #f0f0f0;
     color:
`;

const Styledbutton=styled(Button)`
     margin-left:auto;
     display:flex;
     background:#fb641b;
     color:#fff;
     width:250px;
     height:51px;
`;

const Leftcomp = styled(Grid)(({theme})=>({
     paddingRight:15,
     [theme.breakpoints.down('md')]:{
        marginBottom:15
     }
}))
;


const Cart=()=>{
    const {cartItems}=useSelector(state=>state.cart);
    return(
        <>
        {
            cartItems.length ?
                <Container container>
                      <Leftcomp item lg={8} md={8} sm={12} xs={12}>
                       <Header>
                           <Typography>My Cart ({cartItems.length})</Typography>
                       </Header>
                       {
                        cartItems.map(item=>(
                            <Cartitem item={item}/>
                        ))
                       }
                       <Placebutton style={{background:'#fff'}}>
                          <Styledbutton>Place Order</Styledbutton>
                       </Placebutton>
                      </Leftcomp>
                      <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Totalamnt cartItems={cartItems}/>
                      </Grid>
                </Container>
            : <Emptycart/>
        }
        </>
    )
}

export default Cart;