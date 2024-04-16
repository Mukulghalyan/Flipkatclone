import { useEffect } from "react";
import Scroll from "./scroll";
import Banner from "./Banner";
import Midadsection from "./midadsection";
import Slide from "./slide";
import Adslide from "./adslide";
import {Box ,styled} from '@mui/material';
import { getProducts } from "../../redux/actions/productaction";
import {  useDispatch,useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 10px;
    background:#f2f2f2;
`
const Home= ()=>{
    const {products}= useSelector(state=>state.getProducts)
    console.log(products);
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch])
    return(
        <>
            <Scroll/>
            <Component>
            <Banner/>
            <Adslide products={products} title="Deal of the Day" timer={true}/>
            <Slide Products={products} title="Discounts for You" timer={false}/>
            <Midadsection/>
            <Slide Products={products} title="Trending offers" timer={false}/>
            <Slide Products={products} title="Top Selection" timer={false}/>
            <Slide Products={products} title="Recommended Items" timer={false}/>
            <Slide Products={products} title="Suggesting Items" timer={false}/>
            <Slide Products={products} title="Season Top Picks"timer={false}/>
            </Component>

        </>
    )
}

export default Home;