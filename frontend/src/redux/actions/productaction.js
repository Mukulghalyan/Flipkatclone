
import  axios  from "axios";
import * as actiontypes from "./constants/productconstants";
const URL ='http://localhost:7000';


export const getProducts=()=>async(dispatch)=>{
    try{
       const {data}=await axios.get(`${URL}/products`);
       dispatch({type:actiontypes.GET_PRODUCTS_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:actiontypes.GET_PRODUCTS_FAIL ,payload:error.message});
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
    
       dispatch({type:actiontypes.GET_PRODUCT_DETAILS_REQUEST});
       const {data}=await axios.get(`${URL}/product/${id}`);
       dispatch({type:actiontypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data});

    }catch(error){
        dispatch({type:actiontypes.GET_PRODUCT_DETAILS_FAIL ,payload:error.message});
    }
}

