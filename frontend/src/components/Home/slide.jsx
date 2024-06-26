import  Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography , styled , Button, Divider } from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
const Component=styled(Box)`
     margin-top:10px;
     Background:#ffffff;
`;

const Deal=styled(Box)`
    padding:15px 20px;
    display:flex;

`;

const Timer=styled(Box)`
    Display:flex;
    margin-left:10px;
    align-item:center;
    color :#7f7f7f;
`
const Dealtext=styled(Typography)`
    font-size:18px;
    font-weight:600;
    margin-right:25px;
    line-height:32px;
`
const Viewallbtn =styled(Button)`
   margin-left:Auto;
   background-color: #2874f0;
   color:#ffffff;
   border-radius:2px;
   font-size:13px;
   font-weight:600;

`
const Text=styled(Typography)`
  font-size:14px;
  margin-top:3px;
`

const Image= styled('img')({
  width:'auto',
  height:100
})
const Slide=({Products,title,timer})=>{
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({ hours, minutes, seconds }) => {
     return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
  };
  
    return(
      <Component>
        <Deal>
          <Dealtext>{title}</Dealtext>
          {
            timer &&
           <Timer>
           <img src={timerURL} alt="timer"  style={{width:24}}/>
           <Countdown date={Date.now() +5.04e+7}     renderer={renderer}/>
         </Timer>
          }
          
          <Viewallbtn varint="contained" color="primary">
           View All
          </Viewallbtn>
        </Deal>
        <Divider/>
        <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"

        >
            {
                Products.map(product=>(
                  <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                  <Box textAlign="center" style={{padding:"25px 15px"}}>
                    <Image src={product.url} alt="product" />
                    <Text style={{color:'#212121',fontWeight:600}}>{product.title.shortTitle}</Text>
                    <Text style={{color:'green'}}>{product.discount}</Text>
                    <Text style={{color:'#212121',opacity:'.6'}}>{product.tagline}</Text>

                  </Box>
                  </Link>
                 ) )
            }
        </Carousel>
      </Component>
    )
}

export default Slide;