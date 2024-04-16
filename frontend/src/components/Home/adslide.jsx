
import {Box ,styled} from '@mui/material';
import Slide  from './slide';

const Slidead= styled(Box)`
    display:flex;
`
const Leftcomp= styled(Box)(({theme})=>({
     width: '83%',
     [theme.breakpoints.down('md')]:{
        width:'100%'
     }
    
}));
const Rightcomp= styled(Box)(({theme})=>({

    BackgroundColor: '#ffffff' ,
    padding:5,
    marginTop:10,
    marginLeft:10,
    width:'17%',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));


const Adslide=({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Slidead>
            <Leftcomp>
              <Slide Products={products} 
              title={title}
              timer={timer}/>
            </Leftcomp>
            <Rightcomp>
             <img src={adURL} alt="ad" style={{width:217,height:300}}/>
            </Rightcomp>
        </Slidead>
    )
}
export default Adslide;