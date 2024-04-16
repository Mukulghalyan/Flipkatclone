import {InputBase , Box ,styled, ListItem ,List} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState,useEffect } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/productaction'
import { Link } from 'react-router-dom'
const Searchcont = styled(Box)`
    background: #fff;
    width : 38%;
    border-radius: 2px;
    margin-left: 10px;
    margin-bottom:10px;
    height:35px;
    display: flex;
`
const Inputsearchb = styled(InputBase)`
    padding-left:20px;
    padding-top:2px;
    width:100%;
    
`
const SearchIconrapper= styled(Box)`
    margin-left:auto;
    display:flex;
    color: blue;
    padding:5px;
`

const Listwrapper=styled(List)`
    position: absolute;
    background:#FFFFFF;
    color: #000;
    margin-top:35px;
`

const Search = ()=>{

    const[text,setText]=useState('');

    const{products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
          setText(text);
    }
    return(
        <Searchcont>
            <Inputsearchb
               placeholder="Search for products, Brands and more"
               onChange={(e)=>getText(e.target.value)}
               value={text}
            />

            {
                text &&
                     <Listwrapper>
                        {
                            products.filter(product=>product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                    <Link
                                        to={`/product/${product.id}`}
                                        onClick={()=>setText('')}
                                        style={{textDecoration:'none',color:'inherit'}}
                                     >
                                    {product.title.shortTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                     </Listwrapper>
            }
            <SearchIconrapper>
                <SearchIcon/>
            </SearchIconrapper>
        </Searchcont>
    )
}

export default Search;