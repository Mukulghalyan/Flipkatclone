import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productaction";
import { Box, styled, Grid} from "@mui/material";
import Actionitem from "./actionitem";
import ProductDetail from "./productdetail";



const Component=styled(Box)`
    background:#f2f2f2;
    margin-top:55px
`

const Container=styled(Grid)(({theme})=>({

    background:'#ffffff',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))

const Rightcontainer=styled(Grid)`
     margin-top:50px;
     
`

const Detailview=()=>{


    const dispatch = useDispatch();
    const {id}=useParams();

    const{loading, product}=useSelector(state=>state.getProductDetails);

    useEffect(()=>{
        if(product && id !== product.id)
      dispatch(getProductDetails(id))
    },[dispatch , id , product,loading])

    
     return(

         <Component>
            {
                product && Object.keys(product).length &&
                <Container container >
                   <Grid item lg={4} md={4} sm={4} xs={12}>
                    <Actionitem product={product}/>
                    </Grid>
                    <Rightcontainer item lg={8} md={8} sm={8} xs={12}>
                        
                        <ProductDetail  product={product}/>
                    </Rightcontainer>    
                 </Container>   
            }
         </Component>
     )

}

export default Detailview;