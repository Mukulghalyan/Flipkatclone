import axios from 'axios';

const URL ='http://localhost:7000';
export const authenticationsignup = async (data)=>{
       try{
          return await axios.post(`${URL}/signup`,data);
       }catch(error){
          console.log("Errors while calling signup api",error);
       }
}

export const authenticationlogin = async(data)=>{
   try{
       return await axios.post(`${URL}/login`,data);
   }catch(error){
      console.log("Errors while calling login api",error);
   }
}
