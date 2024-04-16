
import { imageURL } from "../../constants/Data";
import { Grid,styled } from "@mui/material";

const Wrapper =styled(Grid)`
      margin-top:10px;
      justify-content:space-between;
`

const Midadsection=()=>{
    return(
         <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
              imageURL.map(image=>(
                <Grid lg={4} sm={4} md={12} xs={12} >
                <img src={image} alt="imag" style={{width:'100%'}}/>
                </Grid>
              ))
            }
         </Wrapper>
    )
    
}

export default Midadsection;